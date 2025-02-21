"use client"
import { Cart, CartSummary } from "@/components"
import { useCartStore } from "@/store"

function PageCart() {
  const { products } = useCartStore()
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase font-fontTitle mt-8 px-12">
        Tu carrito
      </h2>
      <hr className="relative w-[80%] md:w-[94%] left-12" />
      {products.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 md:px-12">
          <Cart />
          <CartSummary />
        </div>
      ) : (
        <p className="text-center text-sm md:text-xl font-medium">
          No hay productos en el carrito 🛒
        </p>
      )}
    </div>
  )
}

export default PageCart
