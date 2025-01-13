import { URL_FETCHING_STRAPI } from "@/constants";
import { BannerType } from "@/models";
import { fetching } from "@/services/strapi";

export async function Banner() {
  const banner = await fetching<BannerType>(URL_FETCHING_STRAPI.BANNER);
  if (banner instanceof Error) {
    console.error("Error", banner.message);
    return;
  }
  return (
    <article className="flex justify-center py-2 bg-primary text-white dark:text-black dark:bg-white">
      <span className="text-sm font-medium">{banner.title}</span>
    </article>
  );
}
