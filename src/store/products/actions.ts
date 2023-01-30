import fakeShopApi from "@/api/fakeShopApi";
import { Product } from "@/models/product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";

const actions: ActionTree<IProductsState, IState> = {
  async getProducts({ commit }, title: string | null) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona y vemos si hay que filtrar
    const url = `/products${title ? "/?title=" + title : ""}`;
    const { data } = await fakeShopApi.get<Product, AxiosResponse<Product>>(
      url
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setProducts", data);
  },

  async getProductById({ commit }, id: string) {
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.get<Product, AxiosResponse<Product>>(
      `/products/${id}`
    );

    commit("setSelectedProduct", data);

    commit("setIsLoading", false);
  },
};

export default actions;
