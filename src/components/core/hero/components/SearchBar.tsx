import { Input } from "@/components";
import { SearchIcon } from "lucide-react";

interface Props{
  className?: string;
}

export function SearchBar({ className }: Props) {
  // const handleSubtmit = (data) => {
  //   console.log(12)
  // }
  return (
    <form className={`${className} relative`}>
      <SearchIcon className="absolute top-[22%] left-[5px] text-gray-500 size-5"/>
      <Input placeholder="Busca aquí tus productos.." name="query" className="font-medium pl-8 rounded-md"/>
    </form>
  );
}
