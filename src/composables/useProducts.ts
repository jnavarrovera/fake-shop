import { Product } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex";

const useProducts = () => {
  const store = useStore();

  return {
    products: computed<Product[]>(() => store.getters["products/getProducts"]),
    selectedProduct: computed<Product>(()=> store.getters['products/getSelectedProduct']),
    getProducts: (title?: string) =>
      store.dispatch("products/getProducts", title),
    getProductById: (id: string) =>
      store.dispatch("products/getProductById", id),
  };
};

export default useProducts;
