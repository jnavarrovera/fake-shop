<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="card">
        <img alt="Vue logo" src="../assets/logo.png" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">Bienvenida a la Fake Shop!</h4>
          <p class="card-text">
            Esta es la solución propuesta para la práctica del módulo de
            Typescript y Vue. Presta especial atención a cómo se ha organizado
            el store y los diferentes archivos. También es importante la forma
            de interactuar unos componentes con otros. Mucha suerte y espero que
            te sirva de referencia futura.
          </p>
          <p class="card-text">Jaime Navarro</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
