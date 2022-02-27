import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css';
import { useState } from 'react';

const ItemCount = (props) => {

    const [contador, setContador] = useState(1);

    const add = () => {
        if (contador < props.stock) {
            return contador + 1;
          } else {
            return contador;
          }
    };

    const substract = () => {
        if (contador <= props.stock && contador !== 1) {
            return contador - 1;
          } else {
            return contador;
          }
    };

    return (
        <div className = "counterContainer">
            <div className = "counter">
            <button onClick={() => setContador(add())} type="button" className="btn btn-secondary btn-sm">+</button>
            <h1>{contador}</h1>
            <button onClick={() => setContador(substract())} type="button" className="btn btn-secondary btn-sm">-</button>     
            <button button type="button" className="btn btn-secondary btn-sm btn-ml">Agregar al carrito</button>
            
            </div>     
        </div>
    )
}

export default ItemCount;