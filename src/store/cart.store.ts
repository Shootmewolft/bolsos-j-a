import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  name: string;
  id: number;
  count: number;
}

interface CartStore {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateCountProduct: (id: number, count: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => {
      return {
        products: [],

        addProduct(product) {
          set((state) => ({
            products: [...state.products, product],
          }));
        },

        removeProduct(id) {
          set((state) => ({
            products: state.products.filter((product) => product.id !== id),
          }));
        },

        updateCountProduct(id, newCount) {
          set((state) => {
            const [newProduct] = [...state.products].filter(
              (product) => product.id === id
            );
            newProduct.count = newCount;
            return {
              products: state.products,
            };
          });
        },

        resetCart() {
          set({ products: [] });
        },
      };
    },
    { name: "cart" }
  )
);
