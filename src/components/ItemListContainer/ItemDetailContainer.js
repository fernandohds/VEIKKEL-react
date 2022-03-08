import React, { useState, useEffect } from 'react';
import { products } from './Items';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";
import useFireStore from '../../hooks/useFireStore';


const ItemDetailContainer = () => {
    const {id} = useParams();
    const { productsDetail, getById } = useFireStore();
    
    
    useEffect(() => {
        getById({ id });
      }, [productsDetail]);
    
      return (
        <div>
          <ItemDetail item={productsDetail} />
        </div>
      );
    };


export default ItemDetailContainer;