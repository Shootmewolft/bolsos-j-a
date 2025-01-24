"use client"
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation"

interface Props {
  totalPages: number
}

export function Pagination({ totalPages }: Props) {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page") || 1)
  const isLastPage = currentPage === totalPages
  const isFirstPage = currentPage === 1

  const nextPage = currentPage + 1
  const nextPageUrl = isLastPage ? null : `?page=${nextPage}`
  const prevPage = currentPage - 1
  const prevPageUrl = isFirstPage ? null : `?page=${prevPage}`

  return (
    <PaginationComponent>
      <PaginationContent className="w-full flex items-center justify-between">
        <PaginationItem>
          {prevPageUrl && <PaginationPrevious href={prevPageUrl} />}
        </PaginationItem>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href={`?page=${index + 1}`}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>
        <PaginationItem>
          {nextPageUrl && <PaginationNext href={nextPageUrl} />}
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  )
}
