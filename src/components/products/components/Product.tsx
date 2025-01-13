import Link from "next/link";
import Image from "next/image";
import { Product as ProductType } from "@/models";
import { Stars } from "@/components";
import { formatPrice } from "@/lib";

export async function Product({
  name,
  calification,
  description,
  price,
  slug,
  category,
  images,
}: Omit<
  ProductType,
  "id" | "documentId" | "createdAt" | "updatedAt" | "publishedAt"
>) {
  return (
    <Link
      href={`/${category.slug}/${slug}`}
      className="transition duration-300 shadow-xl hover:shadow-md p-4 rounded-md"
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
          <div className="flex items-center gap-2">
            <Stars calification={calification} />
            <p>
              {calification}
              <span className="text-black/50">/5</span>
            </p>
          </div>
        </div>
        <strong className="text-base">{formatPrice(price)}</strong>
      </div>
    </Link>
  );
}
