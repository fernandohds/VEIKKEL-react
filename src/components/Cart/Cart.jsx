import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from "react-router-dom"
import CartAdded from './CartAdded'

function Cart() {
  const {cartItems, clear} = useContext(CartContext)

  return (
    <div >
            {cartItems.length === 0 ? (
                <div>
                    <h2 >Carrito vacio</h2>
                    <Link to={"/"}>Ir al inicio</Link>
                </div>
            ) :
                <div>
                    <h2 >Tu pedido:</h2>
                    
                    <CartAdded itemsToAdd={cartItems}/>
                    
                    <div>
            {/* {cartItems.map((itemsToAdd) => (
                <CartAdded key ={itemsToAdd}/>
            ))}; */}
        </div>
                    
                    
                    <div>
                        <button onClick={() => clear()} >Vaciar carrito</button>
                    </div>
                    <div>
                        <button>Ir a pagar</button>
                    </div>
                </div>
            }
        </div>
  )
}

export default Cart