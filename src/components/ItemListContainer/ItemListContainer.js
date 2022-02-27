import React, {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import { products } from './Items';
import ItemList from './ItemList'
import { useParams } from "react-router-dom";



const ItemListContainer = (props) => {
    const { categoryId } = useParams();
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
//         .then((res) => {
//             console.log(res)
//              res && setItems(res)
//         })
//         .catch((error) => {
//             console.log(error);
//         }).finally(() => {
//             setLoader(false);
//         });
// }, []);        
.then((result) => {
    if(categoryId){
     const productCategory = result.filter(
       (product) => product.category.id === parseInt(categoryId) 
     );
     return setItems(productCategory);
    }
     return setItems(result);

    
   })
   .catch((err) => {
     console.log(err);
   }).finally(() => {
                setLoader(false);
            });
}, [categoryId]);    
    return (loader ? <h1>Cargando productos...</h1>:
        
        <ItemList items = {items}/>
    ) 
}
//ver  min 42  de routing

export default ItemListContainer;