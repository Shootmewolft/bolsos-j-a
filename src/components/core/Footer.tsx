"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-16 py-8 bg-secondary flex flex-col gap-2 mt-16">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 w-[50%]">
          <Image
            src="/logo.svg"
            alt="Bolsos Meriño J&A"
            className="size-36"
            width={144}
            height={144}
            priority
          />
          <p className="font-light text-sm">
            Diseñamos y fabricamos bolsos únicos que combinan estilo, calidad y
            funcionalidad.
          </p>
        </div>
        <nav className="flex items-center gap-4 font-medium">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/nosotros" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/carrito" className="hover:underline">
            Tu carrito
          </Link>
        </nav>
      </div>
      <hr className="h-[2px]" />
      <span className="flex flex-col gap-2 text-sm">
        Bolsos J&A. © {currentYear}. Todos los derechos reservados.
      </span>
      <a
        href="https://github.com/Shootmewolft"
        target="_blank"
        rel="noreferrer noopener"
        className="text-[14px] text-center cursor-pointer hover:underline"
      >
        Powered by shoot.dev
      </a>
    </footer>
  );
}
