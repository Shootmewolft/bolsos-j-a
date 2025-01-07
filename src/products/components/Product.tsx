import Link from "next/link";
import Image from "next/image";
import { Product as ProductType } from "@/models";
import { Stars } from "../components";

export function Product({
  name,
  calification,
  description,
  price,
  slug,
}: Omit<ProductType, "id">) {
  return (
    <Link href={`/products/${slug}`} className="border border-primary p-4 rounded-md">
      <Image
        src="/products/bolso.webp"
        alt={description}
        width={500}
        height={400}
      />
      <div>
        <h3 className="font-bold">{name}</h3>
        <div>
          <div className="flex items-center gap-2">
            <Stars calification={calification} />
            <p>
              {calification}
              <span className="text-black/30">/5</span>
            </p>
          </div>
        </div>
        <strong className="text-base">${price}</strong>
      </div>
    </Link>
  );
}