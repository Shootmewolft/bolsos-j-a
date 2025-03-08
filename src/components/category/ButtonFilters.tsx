"use client"
import { useFiltersContext } from "@/context"
import { Button } from "../ui"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { toast } from "@/hooks/use-toast"
import { ComponentProps } from "react"

export function ButtonFilters(props: ComponentProps<"button">) {
  const { filters } = useFiltersContext()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = () => {
    const currentQuery = new URLSearchParams(searchParams)
    if (!filters.color && !filters.size && !filters.subCategory) {
      toast({ title: "No hay filtros seleccionados." })
    }
    if (filters.color) {
      currentQuery.set("color", filters.color)
    }
    if (filters.size) {
      currentQuery.set("size", filters.size)
    }
    if (filters.subCategory) {
      currentQuery.set("subCategory", filters.subCategory)
    }
    router.push(`?${currentQuery.toString()}`)
  }

  return <Button onClick={handleClick} className={props.className}>Aplicar filtros</Button>
}
