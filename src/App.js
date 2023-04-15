import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Deléitate'}/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
