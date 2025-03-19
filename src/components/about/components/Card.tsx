import type { ReactNode } from "react"

interface Props {
	icon: ReactNode
	title: string
	description: string
}

export function Card({ icon, title, description }: Props) {
	return (
		<article className="flex flex-col items-center gap-2 justify-center shadow-xl p-4 rounded-md">
			{icon}
			<h3 className="font-bold text-base">{title}</h3>
			<p className="text-sm text-black/50 text-center w-[80%] md:w-1/2">
				{description}
			</p>
		</article>
	)
}
