import {useState, useEffect} from 'react'
// import {getProducts, getProductsByCategory} from '../../asyncCatalog'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig'
import {getDocs, collection, query, where} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const[products,setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
    
            getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })
        },[categoryId])

        if(loading) {
            return <h2>Cargando...</h2>
        }
        
    return (
        <div className='mainContainer'>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )}

export default ItemListContainer