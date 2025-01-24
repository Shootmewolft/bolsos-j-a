import { Breadcrumb, Filters, Products, SkeletronProduct } from "@/components"
import { slugToName } from "@/lib"
import { Suspense } from "react"

async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>
  searchParams: Promise<{ [key: string]: string }>
}) {
  const { category } = await params
  const { page, color, size, sub_category: subCategory } = await searchParams

  return (
    <section className="grid grid-cols-[1fr_3fr] gap-12 items-center">
      <Suspense fallback={<SkeletronProduct />}>
        <Filters categoryProp={category} />
      </Suspense>
      <div className="flex flex-col gap-4">
        <Breadcrumb category={category} className="pt-4" />
        <h2 className="text-2xl font-bold">{slugToName(category)}</h2>
        <Suspense fallback={<SkeletronProduct />}>
          <Products
            categoryProp={category}
            page={page}
            color={color}
            size={size}
            subCategory={subCategory}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default CategoryPage
