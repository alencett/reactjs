import logo from './logo.svg';
import './App.css';

function App() {
  const productos = ['Camiseta', 'Pantalón', 'Zapatos']
  const ids = [0,1,2]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Alvarito, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
            {
              ids.map((idProducto) => (
              <li>{productos[idProducto]}</li>
                )
              )
            }
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
