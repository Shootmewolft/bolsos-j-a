"use client"
import { Product, SizeTypeCart } from "@/models"
import { useState } from "react"
import { SelectCart, Counter, Button } from "@/components"
import { useCartStore } from "@/store"
import { useToast } from "@/hooks/use-toast"
import { productExistsInCart } from "@/lib"

interface Props {
  product: Product
}

export function FormCart({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<
    SizeTypeCart | null | string
  >(null)
  const [quantity, setQuantity] = useState(1)
  const { products, addProduct } = useCartStore()
  const { toast } = useToast()

  const handleClick = () => {
    if (!selectedColor || !selectedSize) {
      toast({
        title: "Error al añadir al carrito 🛒",
        description: "Debes seleccionar un color y una talla",
        variant: "destructive",
      })
      return
    }
    const newProduct = {
      id: product.id,
      color: selectedColor,
      size: selectedSize as SizeTypeCart,
      count: quantity,
      price: product.price,
      image: product.images[0].url,
      name: product.name,
      stock: product.stock,
    }
    const existProduct = productExistsInCart(products, product.id)
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
      <div className="flex items-center gap-8">
        <SelectCart
          options={product.colors}
          optionMenu="color"
          label="Selecciona un color:"
          option={selectedColor}
          setOption={setSelectedColor}
        />
        <hr />
        <SelectCart
          options={product.sizes}
          optionMenu="size"
          label="Selecciona una talla:"
          option={selectedSize}
          setOption={setSelectedSize}
        />
      </div>
      <hr />
      <div className="flex gap-4 items-center">
        <Counter
          personalCount={{ count: quantity, setCounter: setQuantity }}
          initialCount={quantity}
          stock={product.stock}
          className="w-[30%] justify-between"
        />
        <Button onClick={handleClick} className="grow rounded-full py-5">
          Añadir al carrito
        </Button>
      </div>
    </article>
  )
}
