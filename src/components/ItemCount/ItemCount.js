import './ItemCountStyle.css'
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    // const reset = () => {
    //   setQuantity(0);
    // };

    return (
    <div className='counter'>
      <h4>Cuenta: {quantity}</h4>
      <div className='controls'>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button className='button' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        {/* <button className='button' onClick={reset}>Vaciar</button> */}
      </div>
    </div>
    )
}

export default ItemCount