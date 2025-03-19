import { motion } from "motion/react"
import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export function OptionMenu({ children }: Props) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, x: -20 },
				visible: { opacity: 1, x: 0 },
			}}
			exit={{ opacity: 0, x: -20 }}
			transition={{ duration: 0.3, delay: 0.6 }}
			className="flex items-center justify-between"
		>
			{children}
		</motion.div>
	)
}
