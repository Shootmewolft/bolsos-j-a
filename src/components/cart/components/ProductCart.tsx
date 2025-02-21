import { Counter } from "@/components"
import { useToast } from "@/hooks/use-toast"
import { Trash } from "@/icons"
import { calculateDiscountPrice, formatPrice } from "@/lib"
import { ProductCart as ProductCartType } from "@/models"
import { useCartStore } from "@/store"
import Image from "next/image"

export function ProductCart({
  color,
  image,
  price,
  name,
  size,
  count,
  id,
  stock,
}: ProductCartType) {
  const { removeProduct } = useCartStore()
  const { toast } = useToast()
  const isSixItems = count >= 6
  const newPrice = count * price

  const handleClick = () => {
    toast({
      title: `${name} fue eliminado del carrito 🛒`,
    })
    removeProduct(id)
  }
  return (
    <article className="flex items-center gap-4">
      <Image
        alt={name}
        src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image}`}
        className="size-24 max-sm:w-[40%] aspect-[16/9] object-contain"
        width={50}
        height={50}
      />
      <div className="flex flex-col gap-1 grow">
        <header className="flex items-center justify-between">
          <h3 className="font-bold text-lg">{name}</h3>
          <button
            onClick={handleClick}
            className="text-red-600 hover:text-red-300 transition duration-300"
          >
            <Trash className="size-6" />
          </button>
        </header>
        <div className="flex flex-col font-normal">
          <span>
            Talla: <strong className="font-light">{size}</strong>
          </span>
          <span>
            Color: <strong className="font-light">{color}</strong>
          </span>
        </div>
        <footer className="flex items-center justify-center sm:justify-between flex-wrap gap-2">
          <strong className="text-xl">
            {isSixItems
              ? formatPrice(calculateDiscountPrice(newPrice))
              : formatPrice(newPrice)}
          </strong>
          <Counter stock={stock} idProduct={id} initialCount={count} />
        </footer>
      </div>
    </article>
  )
}
