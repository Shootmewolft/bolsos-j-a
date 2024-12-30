import Image from "next/image";
import Link from "next/link";
import { SearchBar, ThemeToggle, Navbar, Banner } from "../index";
import { Cart } from "@/icons";

export function Hero() {
  return (
    <>
      <Banner />
      <header className="flex justify-between items-center px-12 py-4 gap-3 sticky top-0 z-20 backdrop-blur-sm">
        <picture>
          <Link href="/">
            <Image
              src="/logo.svg"
              className="object-contain text-primary dark:text-white w-28 h-20"
              width={40}
              height={112}
              alt="Bolsos J&A"
            />
          </Link>
        </picture>
        <Navbar />
        <SearchBar className="grow" />
        <div className="flex items-center gap-4">
          <Link href="/carrito">
            <Cart className="size-8 dark:text-primary" />
          </Link>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
