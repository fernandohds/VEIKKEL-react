import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import { products } from './Items';
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import db from '../../service/firebase';
import { collection, getDocs } from 'firebase/firestore';
import useFireStore from '../../hooks/useFireStore';

const ItemListContainer = () => {

    const {items, load, getData} = useFireStore()
    
    useEffect(() => {
        
     getData()
    }, []);

   
    return (
        <div>
        {load? <h1 className="text-center">Cargando productos...</h1> : <ItemList items = {items}/>}
        </div>
    ) 
}
//ver  min 42  de routing

export default ItemListContainer;