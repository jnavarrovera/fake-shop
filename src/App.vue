<template>
  <NavBar :title="'Fake Shop'" />
  <NavBarLinks :links="links"/>
  <router-view />
  <CartList v-show="isCartOpen" />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import NavBarLinks from "@/components/NavBarLinks.vue";
import useAuth from "./composables/useAuth";
import CartList from "./components/CartList.vue";
import { useCart } from "./composables/useCart";

export default defineComponent({
  components: {
    NavBar,
    NavBarLinks,
    CartList,
  },
  setup() {
    const { isCartOpen } = useCart();
    const { isAuthenticated } = useAuth();
    return {
      links: computed(() => {
        if (isAuthenticated) {
          return [
            { label: "Inicio", link: { name: "home" } },
            { label: "Productos", link: { name: "products" } },
            { label: "Perfil", link: { name: "profile" } },
          ];
        }
        return [];
      }),
      isCartOpen
    };
  },
});
</script>


<style>
</style>
