<template>
  <div class="card">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="product.images[0]"
          class="img-fluid rounded-start"
          :alt="product.title"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5
            class="card-title pointer"
            @click="$emit('productClicked', product)"
          >
            {{ product.title }}
          </h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ product.category.name }}</small>
          </p>
        </div>
      </div>
      <div class="col">
        <div class="card-footer">
          <small class="h3">{{ product.price }} €</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Product } from "../models/product";

export default defineComponent({
  name: "ProductItem",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
