import { create } from "zustand";

interface Product {
  name: string;
  id: number;
  count: number;
}

interface CartStore {
  products: Product[];
  totalProducts: number;
  addProduct: (product: Product) => void;
  removeProduct: (id: number) => void;
  updateCountProduct: (id: number, count: number) => void;
}

export const useCartStore = create<CartStore>((set) => {
  return {
    products: [],
    totalProducts: 0,

    addProduct(product) {
      set((state) => ({
        products: [...state.products, product],
        totalProducts: state.products.length,
      }));
    },

    removeProduct(id) {
      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
        totalProducts: state.products.length,
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
          totalProducts: state.products.length,
        };
      });
    },

    resetCart() {
      set({ products: [], totalProducts: 0 });
    },
  };
});
