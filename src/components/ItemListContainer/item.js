import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Item = ({ product }) => {
    const {id} = useParams();
    

    return (
        <Link to={`/item/${product.id}`}>
            <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-2">
                        {}
                            <img src={product.img} className="card-img" alt="..." />
                        
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">Precio: ${product.price}</p>
                            
                            <button className="btn btn-secondary btn-sm btn-ml">Ver más</button>
                           
                        </div>                      
                        </div>
                    </div>
            </div>            
        </Link>
    )
}

export default Item;