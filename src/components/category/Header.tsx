"use client"
import { useFiltersContext } from "@/context"
import { Button } from "../ui"

export function Header() {
  const { resetFilters, filters } = useFiltersContext()
  const isActive = Object.values(filters).some((filter) => filter !== null)
  
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-3xl font-bold font-fontTitle">Filtros</h2>
      {isActive && (
        <Button size="sm" onClick={resetFilters}>
          Eliminar filtros
        </Button>
      )}
    </div>
  )
}
