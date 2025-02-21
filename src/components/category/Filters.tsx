"use client"
import { URL_FETCHING_STRAPI } from "@/constants"
import { Category, Color, Size } from "@/models"
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

interface Response {
  category: Category
  colors: Color[]
  sizes: Size[]
}

export function Filters({ categoryProp, className }: Props) {
  const { data, error, loading } = useFetching<Response>(
    URL_FETCHING_STRAPI.CATEGORY(categoryProp)
  )

  const { filters } = useFiltersContext()
  const { isMobile } = useWindowWidth()
  if (error && !data) {
    notFound()
  }

  return (
    <AnimatePresence>
      {filters.isMobile && isMobile && (
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`fixed flex flex-col gap-6 border border-secondary p-6 ml-0 lg:ml-8 shadow-xl rounded-lg lg:sticky top-[145px] md:mt-6 self-start bg-white ${className} w-full`}
        >
          {loading && <SkeletronProduct />}
          <HeaderFilters />
          <hr />
          {data && <SelectorFilters response={data} />}
          <hr />
          <ButtonFilters />
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
