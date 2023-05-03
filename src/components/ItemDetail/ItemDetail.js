import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({id,name,price,category,img,stock,description}) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img
        }

        addItem(item,quantity)
    }

    return (
        <article className='cardItemDetail'>
            <header className='header'>
                <h3 className='itemHeader'>{name}</h3>
            </header>
            <picture>
                <img src={img} alt={name} className='itemImage'/>
            </picture>
            <section>
                <p className='info'>
                    Precio: ${price}
                </p>
                <p className='info'>
                    Categoría: {category}
                </p>
                <p className='info'>
                    Descripción: {description}
                </p>
                <p className='info'>
                    Disponible: {stock}
                </p>
            </section>
            <footer className='itemFooter'>
                { 
                quantityAdded > 0 ? (
                    <Link to='/cart' className='option'>Finalizar compra</Link>
                ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
                }
            </footer>
        </article>
    )
}

export default ItemDetail