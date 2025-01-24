import Image from "next/image";
import Link from "next/link";
import {
  SearchBar,
  ThemeToggle,
  Navbar,
  CartButton,
} from "@/components";

export function Hero() {
  return (
    <>
      <header className="flex justify-between items-center px-12 py-3 gap-3 sticky top-0 z-20 bg-white border-accent-background border-b-[1px]">
        <picture>
          <Link href="/">
            <Image
              src="/logo.svg"
              className="object-contain text-primary dark:text-white w-28 h-20"
              width={40}
              height={112}
              alt="Bolsos J&A"
              priority
            />
          </Link>
        </picture>
        <Navbar />
        <SearchBar />
        <div className="flex items-center gap-4">
          <CartButton />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
