export interface ProductCart {
  id: number;
  image: string;
  price: number;
  count: number;
  name: string;
  size: SizeTypeCart;
  color: string;
  stock: number;
}

export type SizeTypeCart = "S" | "M" | "L"; 

export const enum OperationCounter {
  ADD = "ADD",
  SUBSTRACT= "SUBSTRACT"
};

export type OperationCounterType = `${OperationCounter}`;