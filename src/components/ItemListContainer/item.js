import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Item = ({ item }) => {
    const {id} = useParams();
    

    return (
        <>
            <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                        {}
                            <img src={item.img} className="card-img" alt="..." />
                        
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Precio: ${item.price}</p>
                            <Link to={`/item/${item.id}`}>
                            <button>Ver más</button>
                            </Link>
                        </div>                      
                        </div>
                    </div>
            </div>            
        </>
    )
}

export default Item;