import React from 'react'
import Logo from '../NavBar/logo.png'
import CartWidget from '../CartWidget/CartWidget';
function NavBar(){
    return (
        <nav className="navBar">
            <div>
            <img src = {Logo} className = "logo" alt = "imagen logo"/>
            </div>
            <div>
            <ul className="menuItems">
                <li>
                   <a>Home</a> 
                </li>
                <li>
                    <a>Categorias</a>
                </li>
                <li>
                    <a>Outlet</a>
                </li>
                <li>
                    <a>Login</a>
                </li>
                <CartWidget/>
            </ul>
            </div>

        </nav>
    )
}

export default NavBar;