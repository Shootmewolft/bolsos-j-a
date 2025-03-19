"use client"

import { MESSAGE, PHONE } from "@/constants"
import { WhatsApp } from "@/icons/WhatsApp"
import { openNewWindow } from "@/lib"

const handleClick = () => {
	openNewWindow(MESSAGE.WELCOME, PHONE)
}

export function WhatsAppButton() {
	return (
		<button
			type="button"
			className="flex gap-2 items-center cursor-pointer fixed right-4 bottom-4"
			onClick={handleClick}
		>
			<p className="hidden text-sm font-medium bg-primary-foreground p-2 rounded-md md:flex flex-col items-center">
				¿Necesitas ayuda?
				<strong className="font-bold">Habla con nosotros</strong>
			</p>
			<div className="bg-whatsaap p-3 rounded-full">
				<WhatsApp className="size-8" />
			</div>
		</button>
	)
}
