import React, { useContext, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import useFireStore from '../../hooks/useFireStore';

const Order = ({item}) => {
  // const {id: order} = useParams();
    const {cartItems} = useContext(CartContext)
    const { generateOrder, idOrder} = useFireStore();
  return (
      <>
    <div>
      <h1 className="text-center">Su compra ha sido exitosa!</h1>
      <h1 className="text-center">Su numero de orden es: <b>{idOrder}</b></h1>
      
   
    </div>
    </>
  );
};

export default Order;