import {useState, useEffect} from 'react'
import {getProducts, getProductsByCategory} from '../../asyncCatalog'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const[products,setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect (() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts 

        asyncFunction(categoryId)
        .then(response => {
            setProducts(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[categoryId])

    return (
        <div className='mainContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer