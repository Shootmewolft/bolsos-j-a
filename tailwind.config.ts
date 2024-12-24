import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url(/whatsaap.svg)"
      },
      colors: {
        primary: "#ffff",
        secondary: "#F2F0F1",
        accent: "#000",
        text: "#F2F0F1",
        background: "var(--background)",
        foreground: "var(--foreground)",
        whatsaap: "#25D366",
      },
    },
  },
  plugins: [],
} satisfies Config;
