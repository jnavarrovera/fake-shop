import fakeShopApi from "@/api/fakeShopApi";
import { Credentials } from "@/models/credentials";
import { Token } from "@/models/token";
import { User } from "@/models/user";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthState } from "./state";

const actions: ActionTree<IAuthState, IState> = {
  async getProfile({ commit }) {
    // usamos la mutación para poner isLoading = true
    commit("setIsLoading", true);

    // obtenemos los datos de manera asíncrona
    const { data } = await fakeShopApi.get<User, AxiosResponse<User>>(
      "/auth/profile"
    );

    // usamos la mutación para poner isLoading = false
    commit("setIsLoading", false);

    // usamos la mutación para volcar los datos obtenidos en la variable del state users
    commit("setLoggedUser", data);
  },

  async login({ commit }, credentials: Credentials) {
    commit("setIsLoading", true);

    const { data } = await fakeShopApi.post<
      Token,
      AxiosResponse<Token>,
      Credentials
    >("/auth/login", credentials);

    commit("setToken", data.access_token);
    localStorage.setItem("access_token", data.access_token);

    commit("setIsLoading", false);
  },
};

export default actions;
