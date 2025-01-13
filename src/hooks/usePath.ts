import { PATHNAME } from "@/constants/path";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function usePath() {
  const [path, setPath] = useState<string[] | null>(null);
  const currentPath = usePathname();

  useEffect(() => {
    if (currentPath !== PATHNAME.HOME) {
      setPath(currentPath.split(PATHNAME.HOME));
    }
  }, [currentPath]);

  if (path && path.length > PATHNAME.MAX_RANGE) {
    setPath((prevPath) => prevPath && [...prevPath].slice(1));
  }

  return { path };
}
