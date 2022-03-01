import {useContext} from 'react'
import Carrito from '../Assets/Images/carticon.png';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <Link to="/cart">
        <img src = {Carrito} className = "cartStyle" alt = "imagen carrito"/>{cartItems.length}
        </Link>
    )
}



export default CartWidget;