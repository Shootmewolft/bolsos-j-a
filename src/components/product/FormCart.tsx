"use client"
import { Product, ProductCart, SizeTypeCart } from "@/models"
import { useState } from "react"
import { Counter, Button } from "@/components"
import { useCartStore } from "@/store"
import { useToast } from "@/hooks/use-toast"
import { productExistsInCart } from "@/lib"
import { useFiltersContext } from "@/context"
import { Selector } from "../core/filters/Selector"

interface Props {
  product: Product
}

export function FormCart({ product }: Props) {
  const [quantity, setQuantity] = useState(1)
  const { products, addProduct } = useCartStore()
  const { filters } = useFiltersContext()
  const { toast } = useToast()

  const handleClick = () => {
    if (!filters.color || !filters.size) {
      toast({
        title: "Error al añadir al carrito 🛒",
        description: "Debes seleccionar un color y una talla",
        variant: "destructive",
      })
      return
    }
    const newProduct: ProductCart = {
      id: product.documentId,
      color: filters.color,
      size: filters.size as SizeTypeCart,
      count: quantity,
      price: product.price,
      image: product.images[0].url,
      name: product.name,
      stock: product.stock,
    }
    const existProduct = productExistsInCart(products, product.documentId)

    if (existProduct) {
      toast({
        title: "El producto ya se encuentra en el carrito 🛒",
      })
      return
    }

    addProduct(newProduct)
    toast({
      title: "Producto añadido al carrito 🛒",
      description: `El producto fue ${product.name}`,
    })
  }
  return (
    <article className="flex flex-col gap-4">
      <div className="flex items-center gap-3 md:gap-8 flex-col md:flex-row">
        <Selector
          label="Selecciona un color:"
          optionMenu="color"
          options={product.colors}
        />
        <hr />
        <Selector
          label="Selecciona una talla:"
          optionMenu="size"
          options={product.sizes}
        />
      </div>
      <hr />
      <div className="flex gap-4  justify-center items-center flex-row flex-wrap">
        <Counter
          personalCount={{ count: quantity, setCounter: setQuantity }}
          initialCount={quantity}
          stock={product.stock}
          className="w-[45%] md:w-[30%] justify-between"
        />
        <Button onClick={handleClick} className="grow rounded-full py-5">
          Añadir al carrito
        </Button>
      </div>
    </article>
  )
}
