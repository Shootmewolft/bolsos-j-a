"use client";

import { WhatsApp } from "@/icons/WhatsApp";

const PHONE = "573024287752";
const MESSAGE = "Hola, necesito asesoría para completar mi pedido.";

const handleClick = () => {
  window.open(
    `https://api.whatsapp.com/send/?phone=${PHONE}&text=${MESSAGE}`,
    "_blank noreferrer noopener"
  );
};

export function WhatsAppButton() {
  return (
    <button
      className="flex gap-2 items-center cursor-pointer fixed right-4 bottom-4"
      onClick={handleClick}
    >
      <p className="hidden text-sm font-medium bg-white p-2 rounded-md md:flex flex-col items-center">
        ¿Necesitas ayuda?
        <strong className="font-bold">Habla con nosotros</strong>
      </p>
      <div className="bg-whatsaap p-3 rounded-full">
        <WhatsApp className="size-8" />
      </div>
    </button>
  );
}
