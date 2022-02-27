import React from 'react'
import Logo from '../NavBar/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <nav className="navBar">
            <div> 
                <Link to={"/"}>
                    <img src = {Logo} className = "logo" alt = "imagen logo"/>
                </Link>
            </div>
            <div>
            <ul className="menuItems">
                <li>
                <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/category/1"}>Buzos</Link>
                </li>
                <li>
                    <Link to={"/category/2"}>Camperas</Link>
                </li>
                <li>
                    <Link to={"/category/3"}>Chombas</Link>
                </li>
                <li>
                    <Link to={"/category/4"}>Conjuntos</Link>
                </li>
                <li>
                    <Link to={"/category/5"}>Joggings</Link>
                </li>
                <li>
                    <Link to={"/category/6"}>Remeras</Link>
                </li>
                <CartWidget/>
            </ul>
            </div>

        </nav>
    )
}

export default NavBar;