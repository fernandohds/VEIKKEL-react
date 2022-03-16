import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'
import {Link} from "react-router-dom"
import Checkout from '../Checkout/Checkout'


function Cart() {
  const {cartItems, clear, removeItem, total} = useContext(CartContext)

  return cartItems.length ? (
    <div>
      <div>
        {/* <Checkout cartItems={cartItems} total={total} /> */}
        {cartItems.map((e) => (
          <section >
            <div>
              <div>
                <button onClick={() => removeItem(e.id)}>               
                  Eliminar producto
                </button>
              </div>
              <div>
              <img src={e.img} className="card-img" alt="..." />
              </div>
              <div >
                <div>{e.name}</div>
                <div >${e.price}</div>
                <h1>{e.totalPrice}</h1>

                <div>
                  Cantidad: {e.quantity}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div >
        <h1>Total:{total}</h1>
      </div>
      <button  onClick={clear}>
        Borrar todo
      </button>
      <Link to={"/checkout"} >
          <button>Ir a pagar</button>
        </Link>
    </div>
  ) : (
    <div >
      <div>
        {" "}
        <h3 >Carrito vacio</h3>
        <Link to={"/"} >
          <button>Ir a comprar</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart