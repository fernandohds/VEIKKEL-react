import React, { useState, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ item }) => {
    
    // const {addItem} = useContext(CartContext);
    // const [counter, setCounter] = useState(null);
    // const handleOnAdd = count => {
	// 	setCounter(count);
    //     addItem(item, count);
	// };

    return (
        <>
            <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body">
                            <img src={item.img} className="card-img" alt="..." />
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <p className="card-text">Envío gratis a todo el país a partir de $3000</p>
                            <p className="card-text">{item.description}</p>
                            
                            
                             <ItemCount item={item} stock={item.stock}/>
                            <div>
                                <Link to={`/cart`}>
                                <button className="btn btn-secondary btn-sm btn-ml">Ir al carrito</button>
                                </Link>
                            </div>
                        </div>                      
                        </div>
                    </div>
            </div>            
        </>
    )
}

export default ItemDetail;