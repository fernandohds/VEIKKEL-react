import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemCount.css';
import { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = (props) => {

    const [contador, setContador] = useState(1);

    const {addItem} = useContext(CartContext)

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
            {/* <button onClick={() => props.onAdd(contador)} button type="button" className="btn btn-secondary btn-sm btn-ml">Agregar al carrito</button> */}
            <button className="btn btn-secondary btn-sm btn-ml" onClick={() =>  addItem(props.item, props.contador, props.item.price, props.item.name, props.item.img, props.item.stock)} disabled={props.stock === 0 ? true : false}>{props.stock === 0 ? "sin stock" : "agregar al carrito"}</button>
            </div>     
        </div>
    )
}

export default ItemCount;