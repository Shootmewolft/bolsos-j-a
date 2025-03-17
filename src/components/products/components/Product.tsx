import { Stars } from "@/components"
import { formatPrice } from "@/lib"
import type { Product as ProductType } from "@/models"
import Image from "next/image"
import Link from "next/link"

export function Product({
	name,
	calification,
	description,
	price,
	slug,
	category,
	images,
}: Omit<
	ProductType,
	| "id"
	| "documentId"
	| "createdAt"
	| "updatedAt"
	| "publishedAt"
	| "stock"
	| "colors"
	| "sizes"
>) {
	const slugProduct = category ? `${category.slug}/${slug}` : slug
	return (
		<Link
			href={slugProduct}
			className="transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 p-4 rounded-md"
		>
			<picture>
				<Image
					src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${images[0].url}`}
					alt={description}
					width={315}
					height={315}
					priority
				/>
			</picture>
			<div>
				<h3 className="font-bold">{name}</h3>
				<div>
					<div className="flex items-center gap-2 flex-wrap">
						<Stars calification={calification} size="small" />
						<p>
							{calification}
							<span className="text-black/50">/5</span>
						</p>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<strong className="text-base">{formatPrice(price)}</strong>
				</div>
			</div>
		</Link>
	)
}
