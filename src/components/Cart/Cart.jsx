import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from "react-router-dom"
import CartAdded from './CartAdded'

function Cart() {
  const {cartItems, clear} = useContext(CartContext)

  let total = /*Object.values(*/cartItems/*)*/.map((ttl) => ttl.prc).reduce((accumulator, curr) => accumulator + curr, 0);
    let cantidad = /*Object.values(*/cartItems/*)*/.map((ctn) => ctn.quanty).reduce((accumulator, curr) => accumulator + curr, 0);
    let cantidadArray = /*Object.values(*/cartItems/*)*/.map((ctn) => ctn.quanty);


    let totalCar = (total * cantidad) / (cantidadArray.length)
    

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