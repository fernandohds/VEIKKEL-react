import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'

import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import db from '../../service/firebase';
import { collection, getDocs } from 'firebase/firestore';
import useFireStore from '../../hooks/useFireStore';

const ItemListContainer = (props) => {

    const { category } = useFireStore()
    const { products, getData } = useFireStore();
    
    useEffect(() => {
        
        getData({ category });
    }, [products]);

   
    return (
        <div>
         <ItemList products={products}/>
        </div>
    ) 
}
//ver  min 42  de routing

export default ItemListContainer;