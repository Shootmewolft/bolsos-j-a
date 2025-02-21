import Link from "next/link"
import { CartButton, Navbar, NavbarMobile, SearchBar } from "./components"
import Image from "next/image"
import { PATHNAME } from "@/constants"

export function Hero() {
  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-3 gap-3 sticky top-0 z-20 bg-white border-accent-background border-b-[1px]">
      <picture>
        <Link href={PATHNAME.HOME}>
          <Image
            src="/logo.svg"
            className="object-contain object-left text-primary dark:text-white w-28 h-20"
            width={40}
            height={112}
            alt="Bolsos J&A"
            priority
          />
        </Link>
      </picture>
      <Navbar className="hidden md:flex" />
      <SearchBar className="max-sm:hidden" />
      <div className="flex items-center gap-2">
        <CartButton />
        <NavbarMobile />
      </div>
    </header>
  )
}
