"use client";

import { useTheme } from "@/hooks";
import { Moon, Sun } from "@/icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="" onClick={toggleTheme}>
      {theme === "dark" ? <Moon className="size-12" /> : <Sun className="size-12" />}
    </button>
  );
}
