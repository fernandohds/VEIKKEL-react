import React, { useState, useEffect } from 'react';
import { products } from './Items';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import useFireStore from '../../hooks/useFireStore';


const ItemDetailContainer = () => {
    const {id} = useParams();
    
    const {individual, load, getIndividualData} = useFireStore();

    useEffect(() => {
        
    getIndividualData({id}) 
    }, [])
    return (
        <>
            <div>
             {load ? <h1>Espere mientras carga</h1>  : <ItemDetail item = {individual} /> } 
            </div>

        </>
    );
};

export default ItemDetailContainer;