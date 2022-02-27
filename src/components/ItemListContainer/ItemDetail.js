import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { products } from './Items';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
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
                            <ItemCount stock={item.stock} />
                        </div>                      
                        </div>
                    </div>
            </div>            
        </>
    )
}

export default ItemDetail;