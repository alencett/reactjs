import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={'Bonjour! Deléitate...'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/aboutus' element={<AboutUs/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<h2>Eror 404, mejor volvamos...</h2>}/>
            </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
