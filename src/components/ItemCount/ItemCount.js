import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css';
import { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ stock, item }) => {
  const [contador, setContador] = useState(1);

  const { addToCarrito,  handleShow,   } =
    useContext(CartContext);
  const onAdd = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      setContador(contador);
    }
  };
  const onRest = () => {
    if (contador <= stock && contador !== 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };

  return stock === 0 ? (
    <div>
      <p>Producto sin stock</p>
    </div>
  ) : (
    <div className="">
      <button onClick={onRest} className="btn btn-secondary btn-sm">
        -
      </button>
      <input id="input" className="counterNumber" value={contador}></input>
      <button onClick={onAdd} className="btn btn-secondary btn-sm">
        +
      </button>
      <div>
        <button
          className="btn btn-secondary btn-sm btn-ml buttonCart"
          onClick={() => {
            addToCarrito(item, contador);
            
          }}
        >
          Agregar al carrito
        </button>
      </div>
      
    </div>
  );
};


export default ItemCount;