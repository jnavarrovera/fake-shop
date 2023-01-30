<template>
  <button class="btn" @click="$emit('clicked')" :class="btnType">
    <slot name="start"></slot>
    <slot></slot>
    <slot name="end"></slot>
  </button>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
export default {
  name: "ActionButton",
  props: {
    color: String,
  },
  setup(props) {
    return {
      btnType: computed(() => `btn-${props.color ?? "primary"}`),
    };
  },
};
</script>

<style>
</style>