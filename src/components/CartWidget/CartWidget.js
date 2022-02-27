import React from 'react'
import Carrito from '../Assets/Images/carticon.png';
import './CartWidget.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <Link to="/cart">
        <img src = {Carrito} className = "cartStyle" alt = "imagen carrito"/>
        </Link>
    )
}



export default CartWidget;