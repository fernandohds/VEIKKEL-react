import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import { products } from './Items';
import ItemList from './ItemList'

const ItemListContainer = (props) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setLoader(true);
        const bringProducts = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000);

        })
        bringProducts
        .then((res) => {
            console.log(res)
             res && setItems(res)
        })
        .catch((error) => {
            console.log(error);
        }).finally(() => {
            setLoader(false);
        });
}, []);        
        
    return (loader ? <h1>Cargando productos...</h1>:
        
        <ItemList items = {items}/>
    ) 
}


export default ItemListContainer;