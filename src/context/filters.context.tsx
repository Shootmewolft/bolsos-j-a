"use client"
import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
  use,
} from "react"
import { useRouter } from "next/navigation"

interface Filters {
  color: string | null
  size: string | null
  subCategory: string | null
}

interface FiltersContextState {
  filters: Filters
  setFilters: Dispatch<SetStateAction<Filters>>
  deleteFilter: (filter: keyof Filters) => void
  resetFilters: () => void
}

const FiltersContext = createContext<FiltersContextState>({
  filters: {
    color: null,
    size: null,
    subCategory: null,
  },
  setFilters: () => {},
  deleteFilter: () => {},
  resetFilters: () => {},
})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(() => {
    if (typeof window !== "undefined") {
      const savedFilters = localStorage.getItem("filters")
      return savedFilters
        ? JSON.parse(savedFilters)
        : { color: null, size: null, subCategory: null }
    }
    return { color: null, size: null, subCategory: null }
  })

  const router = useRouter()

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters))
  }, [filters])

  const deleteFilter = (filter: keyof Filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: null,
    }))
  }

  const resetFilters = () => {
    setFilters({
      color: null,
      size: null,
      subCategory: null,
    })
    router.push(window.location.pathname)
  }

  return (
    <FiltersContext value={{ filters, setFilters, deleteFilter, resetFilters }}>
      {children}
    </FiltersContext>
  )
}

export const useFiltersContext = (): FiltersContextState => {
  const context = use(FiltersContext)
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider")
  }
  return context
}
