import type { SVGProps } from "react"

export function X(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			{...props}
		>
			<title>X icon</title>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18 18 6M6 6l12 12"
			/>
		</svg>
	)
}
