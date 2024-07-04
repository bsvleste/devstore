'use client'
import { useCart } from '@/contexts/cart-context'
interface AddToCartButttonProps {
  productId: number
}
export function AddToCartButtton({ productId }: AddToCartButttonProps) {
  const { addToCart } = useCart()
  function handleAddToCart() {
    addToCart(productId)
  }
  return (
    <button
      onClick={handleAddToCart}
      className="hover:bg-emerald-500 w-full mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
