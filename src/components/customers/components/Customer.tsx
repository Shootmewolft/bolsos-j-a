import { Check } from "@/icons";
import { Stars } from "@/components";

interface Props {
  name: string;
  opinion: string;
  calification: number;
}

export function Customer({ name, opinion, calification }: Props) {
  return (
    <article className="p-8 rounded flex flex-col gap-2 shadow-xl">
      <Stars calification={calification} />
      <div className="flex items-center gap-2">
        <h3 className="font-bold text-xl">{name}</h3>
        <Check className="w-4" />
      </div>
      <p>{opinion}</p>
    </article>
  );
}
