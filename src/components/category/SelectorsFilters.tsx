"use client"
import { useFiltersContext } from "@/context"
import type { CategoryFetching } from "@/models"
import { useEffect } from "react"
import { Selector } from "../core/filters/Selector"

interface Props {
	filters: CategoryFetching
}

export function SelectorFilters({ filters }: Props) {
	return (
		<>
			<Selector
				label="Colores"
				optionMenu="color"
				options={filters.colors}
				className="grid grid-cols-7 lg:grid-cols-4 xl:grid-cols-7"
			/>
			<hr />
			<Selector
				label="Tallas"
				optionMenu="size"
				options={filters.sizes}
				className="flex-wrap"
			/>
			<hr />
			<Selector
				label="Subcategorias"
				optionMenu="subCategories"
				options={filters.category.sub_categories}
				className="flex-wrap"
			/>
		</>
	)
}
