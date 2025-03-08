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
  SkeletronProduct,
} from "@/components";
import { MESSAGE, PATHNAME, PHONE, URL_FETCHING_STRAPI } from "@/constants";
import { useFetching } from "@/hooks";
import { Category } from "@/models";

interface Props{
  className?: string;
}

export function Navbar({ className }: Props) {
  const { data, loading } = useFetching<Category[]>(
    URL_FETCHING_STRAPI.CATEGORIES
  );
  return (
    <NavigationMenu className={`${className}`}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
          <NavigationMenuContent>
            {loading && <SkeletronProduct />}
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
              {data &&
                (Array.isArray(data) ? data : data.data).map((component) => (
                  <ListItem
                    key={component.name}
                    title={component.name}
                    href={`/${component.slug}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={PATHNAME.ABOUT} legacyBehavior passHref>
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

export const ListItem = ({
  title,
  children,
  href,
  className,
  ...props
}: {
  title: string;
  children: string;
  href: string;
  className?: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          passHref
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
