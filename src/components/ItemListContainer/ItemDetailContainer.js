import React, { useState, useEffect } from 'react';
import { products } from './Items';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const {id} = useParams();
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getItem
        .then((res) => {
                const prod = res.find(prod => prod.id == id)
                setProductDetail(prod);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <div>
                <ItemDetail item = {productDetail} /> 
            </div>

        </>
    );
};

export default ItemDetailContainer;