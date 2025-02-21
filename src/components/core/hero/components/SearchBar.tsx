"use client"
import { redirect } from "next/navigation"
import { SearchIcon } from "lucide-react"
import { FormEvent } from "react"
import { toast } from "@/hooks/use-toast"
import { Input } from "@/components"
import { PATHNAME } from "@/constants"

interface Props{
  className?: string
}

export function SearchBar({ className }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const fields = Object.fromEntries(new FormData(form))
    const query = (fields.query as string).trim().toLowerCase()
    if (!query) {
      toast({ title: "Debes ingresar un valor para buscar" })
      return
    }
    form.reset()
    redirect(PATHNAME.SEARCH(query))
  }

  return (
    <form className={`${className} relative grow`} onSubmit={handleSubmit}>
      <SearchIcon className="absolute top-[22%] left-[5px] text-gray-500 size-5" />
      <Input
        placeholder="Busca aquí tus productos.."
        name="query"
        className="font-medium pl-8 rounded-md text-xs"
      />
    </form>
  )
}
