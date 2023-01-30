import { GetterTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const getters: GetterTree<IProductsState, IState> = {
  getIsLoading(state) {
    return state.isLoading;
  },
  getProducts(state) {
    return state.products;
  },
  getSelectedProduct(state) {
    return state.selectedProduct;
  },
};
export default getters;
