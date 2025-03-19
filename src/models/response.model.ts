export interface Data {
	id: number
	documentId: string
	name: string
	title: string
	opinion: string
	calification: number
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
}

export interface Product {
	id: number
	documentId: string
	name: string
	description: string
	price: number
	slug: string
	calification: number
	createdAt: Date
	updatedAt: Date
	stock: number
	publishedAt: Date
	category: Category
	images: Image[]
	colors: Color[]
	sizes: Size[]
}

export interface Category {
	id: number
	documentId: string
	name: string
	slug: string
	description: string
	icon: {
		id: number
		url: string
		documentId: string
	}
	locale: null
	products: Product[]
	sub_categories: SubCategory[]
	sizes: Size[]
	colors: Color[]
}

export interface Meta {
	pagination: Pagination
}

export interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export interface Image {
	id: number
	name: string
	documentId: string
	url: string
}

export interface ApiResponse<T> {
	data: T
	meta: Meta
}

export interface Color {
	id: number
	name: string
	color: string
	documentId: string
}

export interface Size {
	name?: string
	id: number
	size: string
	documentId: string
}

export interface SubCategory {
	id: number
	documentId: string
	name: string
	slug: string
}

export interface CategoryFetching {
	category: Category
	sizes: Size[]
	colors: Color[]
}
