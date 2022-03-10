import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Order = ({item}) => {
    const {cartItems} = useContext(CartContext)
  return (
      <>
    <div>
      <h1 >Compra ha sido exitosa!</h1>
       <h1>Detalle de su compra:</h1>
       <ul>
           <li>
               {item.name}
           </li>
           
       </ul>
    </div>
    </>
  );
};

export default Order;