export const URL_FETCHING_STRAPI = {
  BANNER: "banner?fields[0]=title",
  SECTION:
    "?populate[products][fields][0]=name&populate[products][fields][1]=price&populate[products][fields][2]=slug&populate[products][fields][3]=calification&populate[products][fields][4]=description&populate[products][populate][category][fields][5]=slug&populate[products][populate][images][fields][6]=url",
  CUSTOMERS:
    "customers?fields[0]=name&fields[1]=opinion&fields[3]=calification",
  HOME_CARROUSEL: "carrousel?populate[images][fields][0]=url&populate[images][fields][1]=name",
  CATEGORIES: "categories?fields[0]=name&fields[1]=description&fields[2]=slug&populate[icon][fields][3]=url",
};
