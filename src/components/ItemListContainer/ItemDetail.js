import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                            <img src={item.img} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <p className="card-text">Envío gratis a todo el país a partir de $3000</p>
                            <p className="card-text">Jackson Kelly es una versión más ligera de Gibson Explorer producido por Jackson Guitars®. Este modelo es más agresivo que la Explorer, hecho más para un género tal como Thrash Metal y Death Metal.</p>
                        </div>                      
                        </div>
                    </div>
            </div>            
        </>
    )
}

export default ItemDetail;