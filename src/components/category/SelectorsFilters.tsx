"use client"
import { Category, Color, Size } from "@/models"
import { Selector } from "../core/filters/Selector"

interface Props {
  response: { category: Category; colors: Color[]; sizes: Size[] }
}

export function SelectorFilters({ response }: Props) {
  return (
    <>
      <Selector
        label="Colores"
        optionMenu="color"
        options={response.colors}
        className="grid grid-cols-7"
      />
      <hr />
      <Selector
        label="Tallas"
        optionMenu="size"
        options={response.sizes}
        className="flex-wrap"
      />
      <hr />
      <Selector
        label="Subcategorias"
        optionMenu="subCategories"
        options={response.category.sub_categories}
        className="flex-wrap"
      />
    </>
  )
}
