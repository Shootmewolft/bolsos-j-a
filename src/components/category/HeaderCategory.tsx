"use client"
import { slugToName } from "@/lib"
import { Breadcrumb } from "../core"
import { Filters } from "@/icons"
import { useFiltersContext } from "@/context"

interface Props {
  category: string
}

export function HeaderCategory({ category }: Props) {
  const { isOpenFilters } = useFiltersContext()
  return (
    <header className="flex flex-col md:justify-between gap-4">
      <Breadcrumb category={category} className="max-lg:pl-6 pt-4" />
      <div className="flex items-center justify-between pr-6">
        <h2 className="max-lg:pl-6 text-2xl font-bold">
          {slugToName(category)}
        </h2>
        <Filters
          className="size-8 text-black cursor-pointer lg:hidden"
          onClick={() => isOpenFilters(true)}
        />
      </div>
    </header>
  )
}
