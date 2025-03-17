"use client"

import { PATHNAME } from "@/constants"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="px-8 md:px-16 py-8 bg-secondary flex flex-col gap-2 mt-16">
			<div className="flex justify-between items-center flex-col-reverse md:flex-row gap-4">
				<div className="flex flex-col gap-2 w-full items-center md:items-start md:w-[60%]">
					<Image
						src="/logo.svg"
						alt="Bolsos Meriño J&A"
						className="size-36"
						width={144}
						height={144}
						priority
					/>
					<p className="font-light text-xs text-center md:text-left md:text-sm">
						Diseñamos y fabricamos bolsos únicos que combinan estilo, calidad y
						funcionalidad.
					</p>
				</div>
				<nav className="flex items-center gap-4 font-medium flex-wrap">
					<Link
						href={PATHNAME.HOME}
						className="hover:underline text-sm md:text-base"
					>
						Inicio
					</Link>
					<Link
						href="/nosotros"
						className="hover:underline text-sm md:text-base"
					>
						Nosotros
					</Link>
					<Link
						href="/carrito"
						className="hover:underline text-sm md:text-base"
					>
						Tu carrito
					</Link>
				</nav>
			</div>
			<hr className="h-[2px]" />
			<span className="flex flex-col gap-2 text-xs text-center md:text-left md:text-sm">
				Bolsos J&A. © {currentYear}. Todos los derechos reservados.
			</span>
			<a
				href="https://github.com/Shootmewolft"
				target="_blank"
				rel="noreferrer noopener"
				className="text-[14px] text-center cursor-pointer hover:underline text-xs md:text-sm"
			>
				Powered by shoot.dev
			</a>
		</footer>
	)
}
