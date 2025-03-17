import { ArrowCheck } from "@/icons"
import type { Color as ColorType } from "@/models"

interface Props {
	color: ColorType
	state: string | null
	handleClick: (color: string) => void
}

export function Color({ color, handleClick, state }: Props) {
	const isWhite = color.color === "#fff"
	const colorCheck = isWhite ? "text-black" : "text-white"
	const currentBg = color.color
	const currentColor = state === color.name
	return (
		<li
			key={color.id}
			className={
				"flex justify-center items-center rounded-full size-8 cursor-pointer shadow-xl"
			}
			style={{ backgroundColor: currentBg }}
			onKeyDown={() => handleClick(color.name)}
			onClick={() => handleClick(color.name)}
		>
			{currentColor && <ArrowCheck className={`${colorCheck} size-4`} />}
		</li>
	)
}
