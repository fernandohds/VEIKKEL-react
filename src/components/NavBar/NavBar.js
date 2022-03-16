import React from 'react'
import Logo from '../NavBar/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import Listas from './Listas';

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
            <div>

            <Listas lista= {categoriaMenu}/>

            {/* <ul className="menuItems">
                <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category"}>Buzos</Link>
                </li>
                <li>
                    <Link to={"/category"}>Camperas</Link>
                </li>
                <li>
                    <Link to={"/category"}>Chombas</Link>
                </li>
                <li>
                    <Link to={"/category"}>Conjuntos</Link>
                </li>
                <li>
                    <Link to={"/category"}>Joggings</Link>
                </li>
                <li>
                    <Link to={"/category"}>Remeras</Link>
                </li> */}
                <CartWidget/>
            {/* </ul> */}
            </div>

        </nav>
    )
}

export default NavBar;