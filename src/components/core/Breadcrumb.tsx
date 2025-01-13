"use client";

import {
  Breadcrumb as BreadcrumbElement,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PATHNAME } from "@/constants/path";
import { usePath } from "@/hooks";
import { formatSlug } from "@/lib";

export function Breadcrumb() {
  const { path } = usePath();
  console.log(path);
  
  return (
    <BreadcrumbElement className="ml-16">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href={PATHNAME.HOME}>Inicio</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {path &&
          path.map((path, index) => (
            <>
              <BreadcrumbItem key={index + path}>
                <BreadcrumbLink href={`/${path}`}>
                  {formatSlug(path)}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ))}
      </BreadcrumbList>
    </BreadcrumbElement>
  );
}
