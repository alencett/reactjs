import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { cart, clearCart, /* totalItems */ totalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='carritovacio'>
                <h2>El carrito está vacío, mejor volvamos</h2>
                <Link to='/' className='option'>Todos los productos</Link>
            </div>
        )
    }

    return (
        <div className='carritolleno'>
            { cart.map(prod => <CartItem key={prod.id} prod={prod}/>)}
            <h3>Total: ${totalPrice()}</h3>
            <button onClick={() => clearCart()} className='button'>Vaciar carrito</button>
            <Link to='/checkout' className='option'>Checkout</Link>
        </div>
    )
}

export default Cart