import {useContext} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer";
import Order from '../components/Order/Order';
import Checkout from '../components/Checkout/Checkout';
import { CartContext } from '../context/CartContext';

export const Rutas = () => {
    const {cartItems, total} = useContext(CartContext)
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>

                <Route path="/" element = {<ItemListContainer/>} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/category" element={<ItemListContainer />} /> */}
                <Route path="/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/checkout" element={<Checkout cartItems={cartItems} total={total} />}/>
                {/* <Route path="/order" element={<Order />} /> */}
            </Routes>
        
        </BrowserRouter>
    )
}

export default Rutas