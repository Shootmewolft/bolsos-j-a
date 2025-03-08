import {
  Breadcrumb,
  ProductInfo,
  CarouselProduct,
  FormCart,
} from "@/components"
import { URL_FETCHING_STRAPI } from "@/constants"
import { Product } from "@/models"
import { fetching } from "@/services"
import { notFound } from "next/navigation"

async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = (await fetching<Product>(
    URL_FETCHING_STRAPI.PRODUCT(slug)
  )) as unknown as Product

  if (product instanceof Error) {
    notFound()
  }

  return (
    <section className="gap-12 items-center px-8 md:px-24">
      <Breadcrumb
        className="py-4"
        category={product.category.slug}
        product={product.slug}
      />
      <div className="grid grid-cols-1 md:grid-cols-[45dvw_1fr] gap-8 md:gap-16 py-4">
        <CarouselProduct className="max-sm:h-[25dvh]" images={product.images} />
        <div className="flex flex-col gap-4">
          <ProductInfo
            calification={product.calification}
            description={product.description}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
          <FormCart product={product} />
        </div>
      </div>
    </section>
  )
}

export default ProductPage
