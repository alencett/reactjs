import './CartItem.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ prod }) => {

    const {removeItem} = useContext(CartContext)

    return (
        <div className='cartItem'>
            <img src={prod.img} alt={prod.name}/>
            <div>
                <p>Producto: {prod.name}</p>
                <p>Cantidad: {prod.quantity}</p>
                <p>Precio unitario: ${prod.price}</p>
                <p>Subtotal: ${prod.quantity * prod.price}</p>
                <button onClick={() => removeItem(prod.id)}>X</button>
            </div>
        </div>
    )
}

export default CartItem