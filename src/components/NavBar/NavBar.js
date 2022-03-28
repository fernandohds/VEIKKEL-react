import React from 'react'
import Logo from '../NavBar/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Listas from './Listas';
import './NavBar.css'

function NavBar(){

    const categoriaMenu = [
        "Buzos", "Camperas", "Chombas", "Conjuntos", "Joggings", "Remeras"
    ]

    

    return (
        <nav className="navBar">
            <div> 
                <Link to={"/"}>
                    <img src = {Logo} className = "logo" alt = "imagen logo"/>
                </Link>
            </div>
            <div className="menuItems">

            <Listas lista= {categoriaMenu}/>

            
            </div>

        </nav>
    )
}

export default NavBar;