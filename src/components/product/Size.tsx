import { Size as SizeType } from "@/models"

interface Props {
  size: SizeType
  state: string | null
  handleClick: (size: string) => void
}

export function Size({ size, handleClick, state }: Props) {
  const currentSize = state === size.size
  return (
    <li
      className={`shadow-md transition duration-300 font-medium px-8 py-1 text-center rounded-full cursor-pointer ${
        currentSize ? "bg-black text-white" : "bg-secondary text-black/60"
      }`}
      onClick={() => handleClick(size.size)}
    >
      {size.size}
    </li>
  )
}
