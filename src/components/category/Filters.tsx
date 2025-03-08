"use client"
import { URL_FETCHING_STRAPI } from "@/constants"
import { CategoryFetching } from "@/models"
import {
  SelectorFilters,
  HeaderFilters,
  ButtonFilters,
  SkeletronProduct,
} from "@/components"
import { notFound } from "next/navigation"
import { useFetching, useWindowWidth } from "@/hooks"
import { useFiltersContext } from "@/context"
import { AnimatePresence, motion } from "motion/react"

interface Props {
  categoryProp: string
  className?: string
}

export function Filters({ categoryProp, className }: Props) {
  const { data, error, loading } = useFetching<CategoryFetching>(
    URL_FETCHING_STRAPI.CATEGORY(categoryProp)
  )
  const { isMobile } = useWindowWidth()
  const { filters } = useFiltersContext()
  if (error && !data) {
    notFound()
  }

  return (
    <AnimatePresence>
      {filters.isOpen && (
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-0 flex flex-col gap-4 lg:gap-6 border border-secondary p-6 ml-0 lg:ml-8 shadow-xl rounded-lg lg:sticky lg:top-[145px] md:mt-6 self-start bg-white ${className} w-full max-sm:z-50`}
        >
          <HeaderFilters />
          <hr />
          {loading && <SkeletronProduct isMobile={isMobile} />}
          {data && <SelectorFilters filters={data as CategoryFetching} />}
          <hr />
          <ButtonFilters />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
