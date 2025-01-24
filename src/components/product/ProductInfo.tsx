import { formatPrice } from "@/lib"
import { Stars } from "../products/components"

interface Props {
  name: string
  calification: number
  description: string
  price: number
  stock: number
}

export function ProductInfo({
  name,
  calification,
  description,
  price,
  stock,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-fontTitle text-3xl font-bold">{name}</h2>
      <div className="flex items-center gap-4">
        <Stars calification={calification} size="large" />
        <span className="text-sm">
          {calification}
          <span className="opacity-70">/5</span>
        </span>
      </div>
      <div className="flex items-center gap-3">
        <strong className="text-2xl">{formatPrice(price)}</strong>
        <span className="w-12 text-center bg-green-300 rounded-full font-normal text-green-700">
          {stock}
        </span>
      </div>
      <p className="text-balance font-normal opacity-70">{description}</p>
      <hr />
    </div>
  )
}
