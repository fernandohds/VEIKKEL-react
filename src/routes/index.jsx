import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Cart/Cart";
import ItemDetailContainer from "../components/ItemListContainer/ItemDetailContainer";

export const Rutas = () => {
    return (
        <BrowserRouter>
        <NavBar />
            <Routes>

                <Route path="/" element = {<ItemListContainer/>} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
            
            </Routes>
        
        </BrowserRouter>
    )
}

export default Rutas