import Image from "next/image";
import Link from "next/link";
import { SearchBar, ThemeToggle } from "./index";
import { Cart } from "@/icons";

export function Hero() {
  return (
    <header className="flex justify-between items-center p-8">
      <picture>
        <Image src="/next.svg" width={30} height={30} alt="Bolsos Meriño J&A" />
      </picture>
      <nav className="">
        <ul>
          <li>Categorías</li>
          <li>Sobre nosotros</li> 
          <li>Contáctanos</li>
        </ul>
      </nav>
      <SearchBar />
      <nav>
        <Link href="/cart">
          <Cart className="size-12" />
        </Link>
      </nav>
      <ThemeToggle />
    </header>
  );
}
