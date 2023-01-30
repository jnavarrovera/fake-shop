import { createStore } from "vuex";
import authModule from "./auth";
import cartModule from "./cart";
import productsModule from "./products";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IState {}
export default createStore({
  modules: {
    auth: authModule,
    cart: cartModule,
    products: productsModule
  },
});
