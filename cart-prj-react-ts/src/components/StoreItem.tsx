import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"


type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <div>
            <div className=" h-full rounded-lg overflow-hidden border shadow-sm flex flex-col">
                <img src={imgUrl} alt={name} className="w-full h-[200px] object-cover" />
                <div className="flex flex-col p-4">
                    <div className="flex justify-between items-baseline mb-4">
                        <span className="text-2xl font-semibold"> {name} </span>
                        <span className="ml-2 text-gray-500"> {formatCurrency(price)} </span>
                    </div>
                    <div className="mt-auto">
                        { quantity === 0 ? (  
                            <button className="w-full bg-blue-400" onClick={() => increaseCartQuantity(id)}>+ Add To Cart</button> ) 
                            : (
                            <div className="flex items-center flex-column gap-2" >
                                <div className="flex items-center justify-center gap-2" >
                                    <button onClick={() => decreaseCartQuantity(id)}>-</button>
                                    <div>  <span className="text-xl font-medium">{quantity}</span> in cart </div>
                                    <button onClick={() => increaseCartQuantity(id)}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(id)} className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600" > Remove </button>
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}