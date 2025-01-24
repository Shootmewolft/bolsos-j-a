"use client"
import { useFiltersContext } from "@/context"
import { Button } from "../ui"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { toast } from "@/hooks/use-toast"

export function ButtonFilters() {
  const { filters } = useFiltersContext()
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleClick = () => {
    const currentQuery = new URLSearchParams(searchParams)
    if (
      !currentQuery.has("color") &&
      !currentQuery.has("size") &&
      !currentQuery.has("subCategory")
    ) {
      toast({ title: "No hay filtros seleccionados." })
    }
    if (filters.color && !currentQuery.has("color")) {
      currentQuery.set("color", filters.color)
    }
    if (filters.size && !currentQuery.has("size")) {
      currentQuery.set("size", filters.size)
    }
    if (filters.subCategory && !currentQuery.has("subCategory")) {
      currentQuery.set("subCategory", filters.subCategory)
    }
    router.push(`?${currentQuery.toString()}`)
  }

  return <Button onClick={handleClick}>Aplicar filtros</Button>
}
