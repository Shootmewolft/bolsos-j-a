"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components";
import { MESSAGE, PHONE } from "@/models";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Riñoneras",
    href: "/rinoneras",
    description: "Prácticos accesorios para llevar objetos personales.",
  },
  {
    title: "Sombrillas",
    href: "/sombrillas",
    description: "Protección portátil contra el sol y la lluvia.",
  },
  {
    title: "Viajeros",
    href: "/viajeros",
    description: "Artículos esenciales para viajes cómodos y organizados.",
  },
  {
    title: "Maletas",
    href: "/maletas",
    description:
      "Contenedores ideales para guardar tus pertenencias durante un viaje.",
  },
  {
    title: "Carriles",
    href: "/carriles",
    description: "Prácticas opciones de transporte para cargas ligeras.",
  },
  {
    title: "Morrales",
    href: "/morrales",
    description:
      "Mochilas versátiles para uso diario o actividades al aire libre.",
  },
  {
    title: "Escolares",
    href: "/escolares",
    description: "Mochilas y accesorios ideales para estudiantes.",
  },
  {
    title: "Tulas",
    href: "/tulas",
    description: "Bolsas ligeras y fáciles de llevar para cualquier actividad.",
  },
  {
    title: "Cartucheras",
    href: "/cartucheras",
    description: "Organizadores compactos para útiles escolares o de oficina.",
  },
];

export function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/nosotros" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            href={`https://api.whatsapp.com/send/?phone=${PHONE}&text=${MESSAGE.MANUFACTURING}`}
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              target="_blank"
              className={`${navigationMenuTriggerStyle()} border border-black hover:bg-white bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black dark:border-white`}
            >
              ¡Haz tu bolso a medida!
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({
  title,
  children,
  href,
  ...props
}: {
  title: string;
  children: string;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
