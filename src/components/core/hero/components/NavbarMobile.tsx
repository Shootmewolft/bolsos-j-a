"use client"
import { MESSAGE, PATHNAME, PHONE, URL_FETCHING_STRAPI } from "@/constants"
import { useFetching } from "@/hooks"
import { X } from "@/icons"
import type { Category } from "@/models"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import {
	HamburgerMenu,
	HorizontalLine,
	LinkMenu,
	OptionMenu,
	SearchBar,
	TitleNavbar,
} from "./index"

export function NavbarMobile() {
	const [isOpen, setIsOpen] = useState(false)
	const { data, loading } = useFetching<Category[]>(
		URL_FETCHING_STRAPI.CATEGORIES,
	)

	const closeNavbar = () => {
		setIsOpen(false)
	}

	return (
		<>
			<HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
			<AnimatePresence mode="wait">
				{isOpen && (
					<motion.nav
						key="mobile-nav"
						initial={{ opacity: 0, scale: 0.9, y: -20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: -20, display: "none" }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="fixed top-0 left-0 p-6 bg-primary w- overflow-y-auto w-full max-h-dvh rounded-bl-md rounded-br-md shadow-xl"
					>
						<motion.div
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={{
								visible: {
									transition: { staggerChildren: 0.1 },
								},
								hidden: {},
							}}
							className="flex flex-col gap-4"
						>
							<OptionMenu>
								<SearchBar className="bg-white rounded-md text-sm" />
							</OptionMenu>
							<motion.div className="flex items-center justify-between">
								<TitleNavbar title="Categorias" />
								<motion.div
									key="close"
									onClick={closeNavbar}
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
									transition={{ duration: 0.2 }}
								>
									<X className="relative size-8 md:hidden text-white" />
								</motion.div>
							</motion.div>
							<HorizontalLine />
							{data &&
								!loading &&
								"data" in data &&
								data.data.map((category, index) => (
									<LinkMenu
										key={category.id}
										onClick={closeNavbar}
										href={`/${category.slug}`}
										label={category.name}
										delay={index * 0.3}
									/>
								))}

							<TitleNavbar title="Nosotros" />
							<HorizontalLine />
							<LinkMenu
								href={PATHNAME.HOME}
								label="Inicio"
								onClick={closeNavbar}
							/>
							<LinkMenu
								href={PATHNAME.ABOUT}
								label="Acerca de nosotros"
								onClick={closeNavbar}
							/>
							<LinkMenu
								href={PATHNAME.CART}
								label="Tu carrito"
								onClick={closeNavbar}
							/>
							<LinkMenu
								href={`https://api.whatsapp.com/send/?phone=${PHONE}&text=${MESSAGE.MANUFACTURING}`}
								label="Haz tu bolso a medida"
								onClick={closeNavbar}
								target
							/>
						</motion.div>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	)
}
