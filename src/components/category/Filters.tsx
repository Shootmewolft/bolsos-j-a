import { URL_FETCHING_STRAPI } from "@/constants"
import { Category, Color, Size } from "@/models"
import { fetching } from "@/services"
import { SelectorFilters } from "./SelectorsFilters"
import { Header } from "./Header"
import { ButtonFilters } from "./ButtonFilters"

interface Props {
  categoryProp: string
}

export async function Filters({ categoryProp }: Props) {
  const category = (await fetching<{
    category: Category
    colors: Color[]
    sizes: Size[]
  }>(URL_FETCHING_STRAPI.CATEGORY(categoryProp))) as unknown as {
    category: Category
    colors: Color[]
    sizes: Size[]
  }

  if (category instanceof Error) {
    return <h2>¡Hubo un error!</h2>
  }

  return (
    <aside className="flex flex-col gap-6 border border-secondary p-6 ml-8 shadow-xl rounded-lg sticky top-[145px]">
      <Header />
      <hr />
      <SelectorFilters response={category} />
      <hr />
      <ButtonFilters />
    </aside>
  )
}
