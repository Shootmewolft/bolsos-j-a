"use client"
import { useFiltersContext } from "@/context"
import { Button } from "../ui"
import { X } from "@/icons"

export function HeaderFilters() {
  const { resetFilters, filters, isOpenFilters } = useFiltersContext()
  const isActive = Object.values(filters).some(
    (filter) => typeof filter === "string"
  )

  return (
    <header className="flex justify-between items-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-fontTitle">
        Filtros
      </h2>
      <div className="flex items-center gap-4">
        {isActive && (
          <Button size="sm" onClick={resetFilters}>
            Eliminar filtros
          </Button>
        )}
        <X
          className="size-8 text-black cursor-pointer lg:hidden"
          onClick={() => isOpenFilters(false)}
        />
      </div>
    </header>
  )
}
