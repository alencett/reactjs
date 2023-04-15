import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        
        <div className='listaAgrupada'>
            <h3>Nuestros productos</h3>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList