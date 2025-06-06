"use client"
import { Color, Size } from "@/components"
import { Subcategory } from "@/components/product/Subcategory"
import { useFiltersContext } from "@/context"
import type {
	Color as ColorType,
	Size as SizeType,
	SubCategory,
} from "@/models"

type Option = SizeType | ColorType | SubCategory

interface Props {
	options: Option[]
	label: string
	optionMenu: "color" | "size" | "subCategories"
	className?: string
}

export function Selector({ options, optionMenu, label, className }: Props) {
	const { filters, setFilters } = useFiltersContext()

	const handleOptions = (currentOption: string) => {
		const filterKeys: Record<typeof optionMenu, keyof typeof filters> = {
			color: "color",
			size: "size",
			subCategories: "subCategory",
		}

		const filterKey = filterKeys[optionMenu]
		if (filterKey) {
			setFilters({ ...filters, [filterKey]: currentOption })
		}
	}

	// biome-ignore lint/suspicious/noExplicitAny: any is used to avoid type errors
	const componentMapping: Record<typeof optionMenu, any> = {
		color: Color,
		size: Size,
		subCategories: Subcategory,
	}

	const Component = componentMapping[optionMenu]
	return (
		<div className="flex flex-col gap-2 max-sm:w-full">
			<span className="font-bold text-black">{label}</span>
			<ul className={`flex gap-2 ${className}`}>
				{options?.map((item: Option) => (
					<Component
						key={item.documentId || item.id}
						state={
							filters[
								optionMenu === "subCategories" ? "subCategory" : optionMenu
							]
						}
						{...(optionMenu === "color"
							? { color: item as ColorType }
							: optionMenu === "size"
								? { size: item as SizeType }
								: { subcategory: item as SubCategory })}
						handleClick={(currentOption: string) =>
							handleOptions(currentOption)
						}
					/>
				))}
			</ul>
		</div>
	)
}
