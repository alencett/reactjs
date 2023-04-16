import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,name,price,category,img,stock,description}) => {
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
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Agregaste', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail