import { Stars } from "@/components"
import { Check } from "@/icons"

interface Props {
	name: string
	opinion: string
	calification: number
}

export function Customer({ name, opinion, calification }: Props) {
	return (
		<article className="p-5 md:p-8 rounded flex flex-col gap-2 shadow-xl">
			<Stars calification={calification} size="small" />
			<div className="flex items-center gap-2">
				<h3 className="font-bold text-base md:text-xl">{name}</h3>
				<Check className="w-4" />
			</div>
			<p className="text-sm md:text-base">{opinion}</p>
		</article>
	)
}
