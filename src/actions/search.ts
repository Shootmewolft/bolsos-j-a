"use server"

import { PATHNAME } from "@/constants"
import { toast } from "@/hooks"
import { ActionSearch } from "@/models"
import { redirect } from "next/navigation"

export const search = async (prevState: ActionSearch | null, formData: FormData) => {
  const query = formData.get("query")?.toString().trim().toLowerCase() as string
  if (!query) {
    toast({ title: "Debes ingresar un valor para buscar" })
    return {
      query: null,
      success: false,
      error: "Debes ingresar un valor para buscar"
    }
  }
  redirect(PATHNAME.SEARCH(query))
}