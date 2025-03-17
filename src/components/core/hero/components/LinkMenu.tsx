import { Arrow } from "@/icons"
import { motion } from "motion/react"
import Link, { type LinkProps } from "next/link"

type Props = {
	label: string
	delay?: number
	target?: boolean
} & LinkProps

export function LinkMenu({ delay, target, href, label, ...props }: Props) {
	const newDelay = delay ? delay : 0.6
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, x: -20 },
				visible: { opacity: 1, x: 0 },
			}}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3, delay: newDelay }}
			className="flex items-center justify-between"
		>
			<Link
				href={href}
				target={target ? "_blank" : "_self"}
				rel="noopener noreferrer"
				className="text-white hover:text-gray-300 transition-colors uppercase ml-4 font-medium"
				{...props}
			>
				{label}
			</Link>
			<Arrow className="size-6 rotate-180 text-white" />
		</motion.div>
	)
}
