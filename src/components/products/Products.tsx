import { PAGE, URL_FETCHING_STRAPI } from "@/constants"
import { Product as ProductType } from "@/models"
import { fetching } from "@/services"
import { Product } from "./components"
import { Pagination } from "../category"

interface Props {
  categoryProp: string
  page: string
  color: string
  size: string
  subCategory: string
}

export async function Products({ categoryProp, page }: Props) {
  const currentPage = !page ? 1 : Number(page)
  const products = (await fetching<ProductType[]>(
    `${URL_FETCHING_STRAPI.PRODUCTS(categoryProp, PAGE.SIZE, currentPage)}`
  ))

  if (products instanceof Error) {
    return <h2>¡Hubo un error!</h2>
  }

  if (products.data.length === 0) {
    return <h2>No existen productos con estos filtros</h2>
  }

  return (
    <div className="flex flex-col gap-4 pr-16">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.data.map((product) => (
          <Product
            key={product.id}
            category={product.category}
            calification={product.calification}
            description={product.description}
            name={product.name}
            slug={product.slug}
            price={product.price}
            images={product.images}
          />
        ))}
      </ul>
      <Pagination totalPages={products.meta.pagination.pageCount} />
    </div>
  )
}
