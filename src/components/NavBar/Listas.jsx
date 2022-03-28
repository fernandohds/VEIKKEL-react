import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const Listas = ({lista}) => {
    return (
        <div>
            <ul className="menuItems">
                {
                    lista.map((list) => 
                    <Link key = {list} to = {`/${list.toLowerCase()}`}>
                        {list}
                    </Link>)
                }

            </ul>
        </div>
    )
}

export default Listas
