"use client"

import { Button } from "@/components"
import { MESSAGE, PHONE } from "@/constants"
import { Arrow } from "@/icons"
import { calculateDiscountPrice, formatPrice, openNewWindow } from "@/lib"
import { ProductCart } from "@/models"
import { useCartStore } from "@/store"

export function CartSummary() {
  const { products, resetCart } = useCartStore()
  const subtotal = products.reduce(
    (acc, currentValue) =>
      acc +
      (currentValue.count >= 6
        ? calculateDiscountPrice(currentValue.price)
        : currentValue.price) *
        currentValue.count,
    0
  )

  const handleClick = (products: ProductCart[]) => {
    openNewWindow(MESSAGE.generateOrder(products), PHONE)
    resetCart()
  }

  return (
    <section className="flex flex-col gap-6 border border-[#E5E5E5] p-6 rounded-md h-fit">
      <h2 className="text-2xl font-bold">Resumen del pedido</h2>
      <strong className="flex items-center justify-between font-light">
        Subtotal: <span className="font-medium">{formatPrice(subtotal)}</span>
      </strong>
      <strong className="flex items-center justify-between font-light">
        Envío:
        <span className="font-medium">
          {products.length >= 6 ? "Gratis" : "Varía de acuerdo a su ubicación"}
        </span>
      </strong>
      <hr />
      <strong className="flex items-center justify-between font-light">
        Total <span className="font-medium">{formatPrice(subtotal)}</span>
      </strong>
      <Button
        variant="default"
        className="flex items-center rounded-full p-4 py-6"
        onClick={() => handleClick(products)}
      >
        Finalizar compra
        <Arrow className="size-6 rotate-180" />
      </Button>
    </section>
  )
}
