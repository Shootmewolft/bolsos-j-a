import { ProductCart } from "@/models"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(price)
}

export const formatSlug = (slug: string) => {
  return slug.replace(/-/g, " ")
}

export const calculateDiscountPrice = (price: number) => {
  const DISCOUNT_PERCENTAGE = 0.1
  const newPrice = price - price * DISCOUNT_PERCENTAGE
  return newPrice
}

export const openNewWindow = (message: string, phone: string) => {
  window.open(
    `https://api.whatsapp.com/send/?phone=${phone}&text=${message}`,
    "_blank noreferrer noopener"
  )
}

export const slugToName = (slug: string) => {
  if (!slug || typeof slug !== "string") {
    throw new Error("Invalid slug provided")
  }

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

export function productExistsInCart(
  products: ProductCart[],
  idProduct: number
): ProductCart | undefined {
  return products.find((product) => product.id === idProduct)
}
