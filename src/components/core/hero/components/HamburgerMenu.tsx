"use client"
import { Hamburger } from "@/icons"
import { AnimatePresence, motion } from "motion/react"
import type { Dispatch, SetStateAction } from "react"

interface Props {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function HamburgerMenu({ isOpen, setIsOpen }: Props) {
	const handleClick = () => {
		setIsOpen(true)
	}
	return (
		<motion.div layout>
			<AnimatePresence mode="wait">
				{!isOpen && (
					<motion.div
						key="menu"
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						transition={{ duration: 0.2 }}
					>
						<Hamburger
							onClick={handleClick}
							className="size-8 md:hidden z-30"
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
