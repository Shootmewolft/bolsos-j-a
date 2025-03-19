"use client"
import { search } from "@/actions"
import { Input } from "@/components"
import { initialState } from "@/models"
import { SearchIcon } from "lucide-react"
import { type ComponentProps, useActionState } from "react"

export function SearchBar({ className, ...props }: ComponentProps<"form">) {
	// const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
	//   event.preventDefault()
	//   const form = event.currentTarget
	//   const fields = Object.fromEntries(new FormData(form))
	//   const query = (fields.query as string).trim().toLowerCase()
	//   if (!query) {
	//     toast({ title: "Debes ingresar un valor para buscar" })
	//     return
	//   }
	//   form.reset()
	//   redirect(PATHNAME.SEARCH(query))
	// }
	// const [state, actionState, isPending] = useActionState(search, initialState)
	// console.log(state)
	return (
		<form
			className={`${className} relative grow`}
			// action={actionState}
			{...props}
		>
			<SearchIcon className="absolute top-[22%] left-[5px] text-gray-500 size-5" />
			<Input
				placeholder="Busca aquí tus productos.."
				name="query"
				className="font-medium pl-8 rounded-md text-xs"
			/>
		</form>
	)
}
