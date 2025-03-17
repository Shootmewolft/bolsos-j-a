"use server"

import type { ApiResponse } from "@/models"

const { NEXT_PUBLIC_STRAPI_URL_API, STRAPI_TOKEN } = process.env

if (!STRAPI_TOKEN || !NEXT_PUBLIC_STRAPI_URL_API) {
	throw new Error(
		"Missing NEXT_PUBLIC_STRAPI_URL_API or STRAPI_TOKEN in environment variables",
	)
}

export const fetching = async <T>(
	url: string,
): Promise<ApiResponse<T> | Error> => {
	try {
		const response = await fetch(`${NEXT_PUBLIC_STRAPI_URL_API}/${url}`, {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`,
			},
		})
		if (!response.ok) throw new Error("Error fetching data")
		const json: ApiResponse<T> = await response.json()
		return json
	} catch (err) {
		return err as Error
	}
}
