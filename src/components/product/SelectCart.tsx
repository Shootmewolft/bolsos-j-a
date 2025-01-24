import { Dispatch, SetStateAction } from "react"
import { Color, Size } from "@/components"
import { Color as ColorType, Size as SizeType, SubCategory } from "@/models"

type Option = SizeType | ColorType | SubCategory

interface Props {
  options: Option[]
  label: string
  optionMenu: "color" | "size"
  option: string | null
  setOption: Dispatch<SetStateAction<string | null>>
}

export function SelectCart({
  options,
  optionMenu,
  label,
  option,
  setOption,
}: Props) {
  const handleClick = (option: string) => {
    setOption(option)
  }

  return (
    <div className="flex flex-col gap-2">
      <span className="text-black/60">{label}</span>
      <ul className="flex gap-2">
        {options?.map((item: Option) => {
          switch (optionMenu) {
            case "color":
              return (
                <Color
                  key={item.id}
                  state={option}
                  color={item as ColorType}
                  handleClick={handleClick}
                />
              )
            case "size":
              return (
                <Size
                  key={item.documentId}
                  state={option}
                  size={item as SizeType}
                  handleClick={handleClick}
                />
              )
          }
        })}
      </ul>
    </div>
  )
}
