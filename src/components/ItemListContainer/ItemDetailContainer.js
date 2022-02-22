import React, { useState, useEffect } from 'react';
import { products } from './Items';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getItem
        .then((res) => {
            const product = res.find(
                (productos) => productos.id === parseInt(productos.id));
            setItem(product);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div>
                <ItemDetail item = {item} /> 
            </div>

        </>
    );
};

export default ItemDetailContainer;