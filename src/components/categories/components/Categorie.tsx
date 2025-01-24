import { Category } from "@/models"
import Image from "next/image"
import Link from "next/link"

export function Categorie({
  icon,
  name,
  slug,
}: Omit<
  Category,
  | "id"
  | "documentId"
  | "description"
  | "locale"
  | "products"
  | "sub_categories"
  | "sizes"
  | "colors"
>) {
  return (
    <Link
      href={`/${slug}`}
      passHref
      className="flex flex-col items-center gap-2 hover:shadow-xl py-2 transition duration-300"
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${icon.url}`}
        className="size-14"
        alt={name}
        width={100}
        height={100}
      />
      <small className="font-bold text-sm">{name}</small>
    </Link>
  )
}
