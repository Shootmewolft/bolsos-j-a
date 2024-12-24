import { create } from "zustand";

interface SystemGlobalStore {
  phone: number;
  message: string;
}

export const useSystemGlobalStore = create<SystemGlobalStore>((set, get) => {
  return {
    message: "Hola",
    phone: 12
  }
});