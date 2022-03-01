import './App.css';
import Rutas from './routes';
import { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      
      <CartContextProvider>
        <Rutas />
      </CartContextProvider>
      
      
    </div>
  );
}

export default App;