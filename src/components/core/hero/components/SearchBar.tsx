"use client";
import { Input, ProductSearch } from "@/components";
import { URL_FETCHING_STRAPI } from "@/constants";
import { useFetching } from "@/hooks";
import { Product } from "@/models";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const [query, setQuery] = useState<null | string>(null);
  // const { data, loading } = useFetching<Product[]>(
  //   `${URL_FETCHING_STRAPI.PRODUCTS}&filters[name][$contains]=${query}`
  // );

  const debounced = useDebouncedCallback((query: string) => {
    setQuery(query.trim());
  }, 300);

  return (
    <>
      <div className="relative grow">
        <SearchIcon className="absolute top-[22%] left-[5px] text-gray-500 size-5" />
        <Input
          placeholder="Busca aquí tus productos.."
          name="query"
          onChange={(event) => debounced(event.target.value)}
          className="font-medium pl-8 rounded-md"
        />
        {query && query.length && loading && <span>Cargando...</span>}
        {query &&
          (data ? (
            <ul className="absolute top-12 w-full gap-3 p-4 bg-white border border-gray-200 rounded-md">
              {data.map((product) => (
                <ProductSearch
                  key={product.id}
                  categorySlug={product.category.slug}
                  image={product.images[0].url}
                  name={product.name}
                  price={product.price}
                  slug={product.slug}
                />
              ))}
            </ul>
          ) : (
            <span>No hay resultados</span>
          ))}
      </div>
    </>
  );
}
