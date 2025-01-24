import {
  Breadcrumb as BreadcrumbElement,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { PATHNAME } from "@/constants/path"
import { slugToName } from "@/lib"
import Link from "next/link"

interface Props {
  category: string
  className?: string
  product?: string
}

export function Breadcrumb({ category, product, className }: Props) {
  return (
    <BreadcrumbElement className={`${className}`}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <Link href={PATHNAME.HOME}>Inicio</Link>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <Link href={`/${category}`}>{slugToName(category)}</Link>
        </BreadcrumbItem>
        {product && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href={`/${category}/${product}`}>
                {slugToName(product)}
              </Link>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </BreadcrumbElement>
  )
}
