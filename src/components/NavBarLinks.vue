<template>
  <nav>
    <ul v-if="links">
      <li v-for="(link, index) in links" :key="index">
        <router-link :to="link.link">{{ link.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Link } from "@/interfaces/link";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    links: {
      type: Array as PropType<Link[]>,
    }
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
nav {
  min-height: 50px;
  background-color: coral;
}

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

li {
  padding: 1rem;
  font-weight: bold;
}
a {
  color: white;
  text-decoration: none;
}
a:visited {
  color: white;
}
</style>
