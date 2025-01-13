import { Cart, CartSummary } from "@/components";

function PageCart(){
  return (
    <>
    <h1 className="text-fontTitle">Tu carrito</h1>
      <Cart />
      <CartSummary />
    </>
  );
};

export default PageCart;