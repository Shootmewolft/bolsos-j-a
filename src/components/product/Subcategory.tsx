import { SubCategory } from "@/models"

interface Props {
  subcategory: SubCategory
  state: string | null
  handleClick: (color: string) => void
}

export function Subcategory({ subcategory, handleClick, state }: Props) {
  const currentSubcategory = state === subcategory.name
  return (
    <li
      key={subcategory.id}
      className={` shadow-md transition duration-300 font-medium px-8 py-1 text-center rounded-full cursor-pointer ${
        currentSubcategory ? "bg-black text-white" : "bg-secondary text-black"
      }`}
      onClick={() => handleClick(subcategory.name)}
    >
      {subcategory.name}
    </li>
  )
}
