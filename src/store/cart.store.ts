import { OperationCounter, OperationCounterType, ProductCart } from "@/models"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface CartStore {
  products: ProductCart[]
  addProduct: (product: ProductCart) => void
  removeProduct: (id: string) => void
  updateCount: (id: string, operation: OperationCounterType) => void
  resetCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => {
      return {
        products: [],

        addProduct(product) {
          set((state) => ({
            products: [...state.products, product],
          }))
        },

        removeProduct(id) {
          set((state) => ({
            products: state.products.filter((product) => product.id !== id),
          }))
        },

        updateCount(id, operation) {
          set((state) => {
            const productInCartIndex = [...state.products].findIndex(
              (product) => product.id === id
            )
            const newProducts = [...state.products]
            const newProduct = newProducts[productInCartIndex]
            newProduct.count =
              (operation === OperationCounter.ADD)
                ? newProduct.count + 1
                : newProduct.count - 1
            return { products: newProducts }
          })
        },

        resetCart() {
          set({ products: [] })
        },
      }
    },
    { name: "cart" }
  )
)
