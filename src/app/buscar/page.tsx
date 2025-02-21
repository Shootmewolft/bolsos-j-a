import { URL_FETCHING_STRAPI } from "@/constants"
import { Product } from "@/models"
import { fetching } from "@/services"
import { notFound } from "next/navigation"
import { Products } from "@/components/search/Products"

async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>
}) {
  const { query } = await searchParams
  const response = await fetching<Product[]>(
    URL_FETCHING_STRAPI.PRODUCTS_WITHOUT_CATEGORY({ query, page: 1 })
  )
  if (response instanceof Error) {
    notFound()
  }

  return (
    <section className="flex flex-col justify-center items-center w-full pt-8 gap-4">
      <h2 className="text-2xl font-fontTitle">
        Buscando con <strong>{query}</strong>:
      </h2>
      {response.data.length === 0 ? (
        <h2>No hay productos con este nombre</h2>
      ) : (
        <Products
          query={query || ""}
          initialProducts={response.data}
          totalPages={response.meta.pagination.pageCount}
        />
      )}
    </section>
  )
}

export default SearchPage
