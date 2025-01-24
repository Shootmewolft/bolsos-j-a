"use client";
import { Color, Size } from "@/components";
import { Subcategory } from "@/components/product/Subcategory";
import { useFiltersContext } from "@/context";
import { Color as ColorType, Size as SizeType, SubCategory } from "@/models";

type Option = SizeType | ColorType | SubCategory;

interface Props {
  options: Option[];
  label: string;
  optionMenu: "color" | "size" | "subCategories";
  className?: string;
}

export function Selector({ options, optionMenu, label, className }: Props) {
  const { filters, setFilters } = useFiltersContext();

  const handleOptions = (currentOption: string) => {
    const filterKeys: Record<typeof optionMenu, keyof typeof filters> = {
      color: "color",
      size: "size",
      subCategories: "subCategory",
    };

    const filterKey = filterKeys[optionMenu];
    if (filterKey) {
      setFilters({ ...filters, [filterKey]: currentOption });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const componentMapping: Record<typeof optionMenu, any> = {
    color: Color,
    size: Size,
    subCategories: Subcategory,
  };

  const Component = componentMapping[optionMenu];

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-black">{label}</span>
      <ul className={`flex gap-2 ${className}`}>
        {options?.map((item: Option) => (
          <Component
            key={item.documentId}
            state={filters[optionMenu === "subCategories" ? "subCategory" : optionMenu]}
            {...(optionMenu === "color"
              ? { color: item as ColorType }
              : optionMenu === "size"
              ? { size: item as SizeType }
              : { subcategory: item as SubCategory })}
            handleClick={(currentOption: string) => handleOptions(currentOption)}
          />
        ))}
      </ul>
    </div>
  );
}
