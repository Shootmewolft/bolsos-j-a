import type { Config } from "tailwindcss"

export default {
	important: true,
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					background: "#F0EEED",
				},
				text: "#F2F0F1",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				whatsaap: "#25D366",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				fontTitle: ["var(--font-title)"],
			},
			boxShadow: {
				xl: "0px 0px 7px 0px rgba(0, 0, 0, 0.2)",
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config
