"use client";

import { useCartStore } from "@/store";
import { ProductCart } from "@/components";

export function Cart() {
  const { products } = useCartStore();
  return (
    <section className="flex flex-col gap-4 border border-[#E5E5E5] p-5 rounded-xl">
      {products.map((product, index) => (
        <>
          <ProductCart
            key={product.id}
            color={product.color}
            count={product.count}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            size={product.size}
            stock={product.stock}
          />
          {index !== products.length - 1 && (
            <hr className="text-accent-background" />
          )}
        </>
      ))}
    </section>
  );
}
