import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utils/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={closeCart}
      />

      {/* Cart panel */}
      <div className="fixed top-0 right-0 h-full w-96 bg-white z-50 shadow-lg flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col gap-3">
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}

            {/* Total */}
            <div className="ml-auto font-bold text-lg">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find(
                    i => i.id === cartItem.id
                  )
                  return total + (item?.price || 0) * cartItem.quantity
                }, 0)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
