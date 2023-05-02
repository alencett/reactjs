import cart from './assets/cart.svg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {

    const {totalItems} = useContext(CartContext)

    return (
        <Link to='/cart' className='cartwidget' /* style={{display: totalItems > 0 ? 'block' : 'none'}} */>
            <img className='cartImg' src={cart} alt='cart-widget'/>
            {/* {totalItems} */}
            <>
            <h5>{totalItems() || ''}</h5>
            </>
        </Link>
        
    )
}

export default CartWidget