import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  price: number;
  image: string;
  slug: string;
  categorySlug: string;
}

export function ProductSearch({
  name,
  price,
  image,
  slug,
  categorySlug,
}: Props) {
  return (
    <Link
      className="flex items-center gap-3"
      href={`/${categorySlug}/${slug}`}
      replace
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_HOST}${image}`}
        alt={name}
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-md"
      />
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm font-light">{price}</p>
      </div>
    </Link>
  );
}
