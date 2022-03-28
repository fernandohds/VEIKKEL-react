import React, {useState, useEffect} from 'react';

import './ItemListContainer.css'

import ItemList from './ItemList'
import { useParams } from "react-router-dom";

import useFireStore from '../../hooks/useFireStore';

const ItemListContainer = () => {

    const {  categoryId } = useParams()
    const { products, getData } = useFireStore();
    
    useEffect(() => {
        
        getData();
    } );

   
    return (
        <div>
         <ItemList products={categoryId === undefined ? products : products.filter((f) => f.category === categoryId)}/>
        </div>
    ) 
}

export default ItemListContainer;