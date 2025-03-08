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
import { useRouter, useSearchParams } from "next/navigation"
import { useWindowWidth } from "@/hooks"

interface Filters {
  color: string | null
  size: string | null
  subCategory: string | null
  isOpen: boolean
}

interface FiltersContextState {
  filters: Filters
  setFilters: Dispatch<SetStateAction<Filters>>
  deleteFilter: (filter: keyof Filters) => void
  resetFilters: VoidFunction
  isOpenFilters: (value: boolean) => void
}

const FiltersContext = createContext<FiltersContextState>({
  filters: {
    color: null,
    size: null,
    subCategory: null,
    isOpen: false,
  },
  setFilters: () => {},
  deleteFilter: () => {},
  resetFilters: () => {},
  isOpenFilters: () => {},
})

export const FiltersProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<Filters>(() => {
    if (typeof window !== "undefined") {
      const savedFilters = localStorage.getItem("filters")
      return savedFilters
        ? JSON.parse(savedFilters)
        : { color: null, size: null, subCategory: null }
    }
  })
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentQuery = new URLSearchParams(searchParams)
  const { isMobile } = useWindowWidth()

  useEffect(() => {
    localStorage.setItem("filters", JSON.stringify(filters))
  }, [filters])

  useEffect(() => {
    const showFilters = !isMobile ? true : false
    setFilters((prevFilters) => ({
      ...prevFilters,
      isOpen: showFilters,
    }))
  }, [isMobile]);

  const deleteFilter = (filter: keyof Filters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: null,
    }))
  }

  const resetFilters = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      color: null,
      size: null,
      subCategory: null,
    }))
    if (
      !currentQuery.has("color") &&
      !currentQuery.has("size") &&
      !currentQuery.has("subCategory")
    )
      return
    router.push(window.location.pathname)
  }

  const isOpenFilters = (value: boolean) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      isOpen: value,
    }))
  }

  return (
    <FiltersContext
      value={{ filters, setFilters, deleteFilter, resetFilters, isOpenFilters }}
    >
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
