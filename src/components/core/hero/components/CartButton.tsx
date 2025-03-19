"use client"

import { Bag } from "@/icons"
import { useCartStore } from "@/store"
import Link from "next/link"

export function CartButton() {
	const { products } = useCartStore()
	return (
		<Link href="/carrito" className="flex items-center relative">
			<Bag className="size-8 dark:text-primary" />
			{products.length > 0 && (
				<span
					className={`text-base absolute before:absolute -right-[2px] -top-3 before:content-[''] before:bg-black ${
						products.length >= 10 ? "before:w-7" : "before:w-6"
					} before:h-full before:rounded-full text-white before:-z-30 z-40 before:-left-1.5 w-2`}
				>
					{products.length}
				</span>
			)}
		</Link>
	)
}
