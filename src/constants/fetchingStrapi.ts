import { PAGE } from "./products"

export const URL_FETCHING_STRAPI = {
  BANNER: "banner?fields[0]=title",
  SECTION:
    "?populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=slug&populate[products][fields][3]=calification&populate[products][fields][4]=description&populate[products][populate][category][fields][5]=slug&populate[products][populate][images][fields][6]=url",
  CUSTOMERS:
    "customers?fields[0]=name&fields[1]=opinion&fields[3]=calification",
  HOME_CARROUSEL:
    "carrousel?populate[images][fields][0]=url&populate[images][fields][1]=name",
  CATEGORIES:
    "categories?fields[0]=name&fields[1]=description&fields[2]=slug&populate[icon][fields][3]=url",
  CATEGORY: (slug: string) => `categories/${slug}`,
  PRODUCTS: (
    category: string,
    pageSize?: number,
    page?: number,
    color?: string,
    size?: string,
    subCategory?: string
  ) => {
    let url = `products?filters[category][slug]=${category}&[populate][images][fields][0]=url&[populate][category][fields][1]=name&[populate][category][fields][2]=slug&filters[isActive]=true`
    if (pageSize) url += `&pagination[pageSize]=${pageSize}`
    if (page) url += `&pagination[page]=${page}`
    if (color) url += `&filters[colors][name]=${color}`
    if (size) url += `&filters[sizes][size]=${size}`
    if (subCategory) url += `&filters[sub_category][slug]=${subCategory}`
    return url
  },
  PRODUCTS_WITHOUT_CATEGORY: ({
    query,
    page,
  }: {
    query: string
    page?: number
  }) => {
    let url = `products?filters[name][$containsi]=${query}&[populate][images][fields][0]=url&[populate][category][fields][1]=name&[populate][category][fields][2]=slug&filters[isActive]=true&pagination[pageSize]=${PAGE.SIZE}`
    if (page) url += `&pagination[page]=${page}`
    return url
  },
  PRODUCT: (id: string) => `products/${id}`,
}
