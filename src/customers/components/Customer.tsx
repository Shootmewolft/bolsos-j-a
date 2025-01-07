import { Check } from "@/icons";
import { Stars } from "@/products/components";

interface Props {
  name: string;
  description: string;
  calification: number;
}

export function Customer({ name, description, calification }: Props) {
  return (
    <article className="p-4 rounded flex flex-col gap-2 border border-primary">
      <Stars calification={calification} />
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <Check className="w-4" />
      </div>
      <p>{description}</p>
    </article>
  );
}
