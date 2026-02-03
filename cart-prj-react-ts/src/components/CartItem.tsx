import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"
import { formatCurrency } from "../utils/formatCurrency"

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find(i => i.id === id)

  if (item == null) return null

  return (
    <div className="flex items-center gap-3">
      {/* Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-[125px] h-[75px] object-cover rounded"
      />

      {/* Item info */}
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <span className="font-medium">{item.name}</span>
          {quantity > 1 && (
            <span className="text-gray-500 text-[10px]">
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-gray-500 text-xs">
          {formatCurrency(item.price)}
        </div>
      </div>

      {/* Price */}
      <div className="font-medium">
        {formatCurrency(item.price * quantity)}
      </div>

      {/* Remove button */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="ml-2 h-6 w-6 flex items-center justify-center
                   border border-red-500 text-red-500
                   rounded hover:bg-red-500 hover:text-white
                   transition"
        aria-label="Remove item"
      >
        ×
      </button>
    </div>
  )
}
