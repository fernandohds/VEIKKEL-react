import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export default function CartAdded ({itemsToAdd}) {

    const { removeOneItem } = useContext(CartContext)
    
    return (
        <>
        
            {itemsToAdd.map(item =>
                <div  key={item.id}>
                <div>
                    <h5>Id del producto</h5>
                    <p>{item.id}</p>
                </div>
                <div >
                    <img src={item.img} alt =""/>
                </div>
                    <div>
                        <b >{item.name}</b>
                    </div>
                    <div>
                        <h6>Precio: </h6>
                        <p>{item.price}</p>
                    </div>
                    <div>
                        <h6>Cantidad: </h6>
                        <p>{item.quanty}</p>
                    </div>
                    <div>
                        <button onClick={() => removeOneItem(item.id)} >Quitar producto</button>
                    </div>
                </div>
                )
        }

        </>
    )
}

