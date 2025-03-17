import type { Product } from "./response.model"

export interface sectionProductsType {
	id: number
	documentId: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	products: Product[]
}
