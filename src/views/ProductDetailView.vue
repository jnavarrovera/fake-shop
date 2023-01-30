<template>
  <div class="container" v-if="selectedProduct">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in selectedProduct.images"
          :key="index"
          :class="{ active: index === imageIndex }"
        >
          <img :src="image" class="d-block w-100" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ selectedProduct.title }}</h5>
            <p>{{ selectedProduct.description }}</p>
            <p>{{ selectedProduct.price }} €</p>
          </div>
        </div>
      </div>
      <button
        v-show="selectedProduct.images.length > 1"
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        @click="prev()"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        v-show="selectedProduct.images.length > 1"
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
        @click="next()"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import useProducts from "@/composables/useProducts";
import { ref } from "@vue/reactivity";
export default {
  props: {
    id: String,
  },
  setup(props) {
    const { getProductById, selectedProduct } = useProducts();

    const imageIndex = ref<number>(0);

    if (props.id) {
      getProductById(props.id);
    }

    return {
      selectedProduct,
      imageIndex,
      next: () => {
        if (imageIndex.value + 1 < selectedProduct.value.images.length) {
          imageIndex.value = imageIndex.value + 1;
        } else {
          imageIndex.value = 0;
        }
      },
      prev: () =>
        imageIndex.value - 1 > 0
          ? (imageIndex.value = imageIndex.value - 1)
          : (imageIndex.value = selectedProduct.value.images.length - 1),
    };
  },
};
</script>

<style>
</style>