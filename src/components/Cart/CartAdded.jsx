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
                </div>
                )
        }

        </>
    )
}

