import { ProductCart } from "@/models";

export const PHONE = "573008808743";
export const MESSAGE = {
  WELCOME: "Hola, necesito asesoría para completar mi pedido.",
  MANUFACTURING:
    "Hola, quiero llevar a cabo una idea para fabricar mi propio bolso.",
  generateOrder: (products: ProductCart[]) => {
    const productList = products
      .map(
        (product) =>
          `\u0020|- ${product.count} ${product.name} - ${product.size} - ${product.color}`
      )
      .join("%0A");

    return `Hola, me gustaría comprar los siguientes productos:%0A${productList}`;
  },
};

