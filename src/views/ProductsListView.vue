<template>
  <div class="container">
    <FilterProducts @searched="onSearch($event)" />
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
      <div class="col" v-for="product in products" :key="product.id">
        <ProductItem
          :product="product"
          @productClicked="onClickProduct($event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import ProductItem from "../components/ProductItem.vue";
import FilterProducts from "../components/FilterProducts.vue";
import { Product } from "@/models/product";
import { useRouter } from "vue-router";

export default {
  components: {
    ProductItem,
    FilterProducts,
  },
  setup() {
    const router = useRouter();
    const { products, getProducts } = useProducts();
    getProducts();

    return {
      products,
      onSearch: (title: string) => {
        getProducts(title);
      },
      onClickProduct: (product: Product) => {
        router.push({ name: "product-detail", params: { id: product.id } });
      },
    };
  },
};
</script>

<style>
</style>