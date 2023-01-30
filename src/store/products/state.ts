import { Product } from "@/models/product";

export interface IProductsState {
  products: Product[];
  isLoading: boolean;
  selectedProduct: Product | null;
}

function state(): IProductsState {
  return {
    isLoading: false,
    products: [],
    selectedProduct: null,
  };
}
export default state;
