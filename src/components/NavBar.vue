<template>
  <nav>
    <div class="title">
      <h4>{{ title }}</h4>
    </div>
    <div class="links">
      <action-button color="secondary" @clicked="toggleCart" class="me-2">
        <template v-slot:start>
          <i class="fa-solid fa-cart-shopping"></i>
        </template>
        Carrito
      </action-button>

      <action-button @clicked="logOut" color="danger" v-if="isAuthenticated">
        <template v-slot:start>
          <i class="fa-solid fa-right-from-bracket"></i>
        </template>
        Salir
      </action-button>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Link } from "@/interfaces/link";
import { useCart } from "@/composables/useCart";
import useAuth from "@/composables/useAuth";
import ActionButton from "./ActionButton.vue";

interface NavbarProps {
  title: string;
}

export default defineComponent({
  name: "NavBar",
  components: {
    ActionButton,
  },
  emits: ["buttonClicked"],
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(_props: NavbarProps, ctx) {
    const { toggleCart } = useCart();
    const { logOut, isAuthenticated } = useAuth();

    return {
      onClick: (link: Link) => {
        ctx.emit("buttonClicked", link);
      },
      toggleCart,
      logOut,

      isAuthenticated,
    };
  },
});
</script>

<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}
h4 {
  color: white;
}
.links,
.title {
  padding: 20px;
}
</style>