"use server";

import { Meta } from "@/models";

const { NEXT_PUBLIC_STRAPI_URL_API, STRAPI_TOKEN } = process.env;

if (!STRAPI_TOKEN || !NEXT_PUBLIC_STRAPI_URL_API) {
  throw new Error(
    "Missing NEXT_PUBLIC_STRAPI_URL_API or STRAPI_TOKEN in environment variables"
  );
}

interface ApiResponse<T> {
  data: T;
  meta: Meta;
}

export const fetching = async <T>(
  url: string,
  controller?: AbortController
): Promise<T | Error> => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_STRAPI_URL_API}/${url}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
      },
      signal: controller?.signal,
    });
    if (!response.ok) throw new Error("Error fetching data");
    const json: ApiResponse<T> = await response.json();
    return json.data;
  } catch (err) {
    return err as Error;
  }
};
