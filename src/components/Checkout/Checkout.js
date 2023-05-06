import './Checkout.css'
import { collection, getDocs, addDoc, query, where, Timestamp, documentId, writeBatch } from 'firebase/firestore'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/firebaseConfig'
import { Link } from 'react-router-dom'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const {cart, clearCart} = useContext(CartContext)

     // Calculate the total based on the items in the cart
     const calculateTotal = () => {
        return cart.reduce((acc, item) => {
            return acc + (item.quantity * item.price)
        }, 0)
    }

    const createOrder = async({name, phone, email}) => {

        setLoading(true)

        try {

            // Ensure that the total value is always a number
            const orderTotal = calculateTotal();

            const objOrder = {
                buyer: {name, phone, email},
                items: cart,
                total: orderTotal,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const {docs} = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedtoCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedtoCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        
        if(outOfStock.length === 0) {
            await batch.commit()

            const orderRef = collection(db, 'orders')

            const orderAdded = await addDoc(orderRef, objOrder)

            setOrderId(orderAdded.id)
            clearCart()
        } else {
            console.error('Hay productos que no están en stock')
        }

        }
        catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

        if(loading) {
            return <h1>Se está generando su orden</h1>
        }

        if(orderId) {
            return <h3>Gracias por su compra! El número de referencia de su orden es: {orderId}, <Link to='/'> seguir comprando</Link></h3>
                    
        }

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout