<template>
  <div class="card">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Búsqueda por título"
        v-model="title"
      />
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        @click="onSearch()"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
export default {
  setup(_, ctx) {
    const title = ref<string>("");

    return {
      title,

      onSearch: () => {
        if (title.value?.length > 3) {
          ctx.emit("searched", title.value);
        }
      },
    };
  },
};
</script>

<style>
</style>