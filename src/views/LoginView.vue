<template>
  <div class="container">
    <div class="grid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-4">
          <div class="card mt-5">
            <h4 class="card-title text-center text-bg-primary p-2">
              Inicie sesión
            </h4>
            <div class="card-body">
              <form
                novalidate
                class="needs-validation"
                @submit.prevent="submit"
              >
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="email@email.com"
                    v-model="email"
                    required
                  />
                  <div class="invalid-feedback">Introduzca email</div>
                </div>

                <div class="mb-3">
                  <label for="password" class="form-label">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    v-model="password"
                    required
                  />
                  <div class="invalid-feedback">Introduzca email</div>
                </div>

                <button type="submit" class="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";
import useAuth from "@/composables/useAuth";
export default {
  setup() {
    const { login } = useAuth();
    const email = ref<string>();
    const password = ref<string>();

    return {
      email,
      password,
      submit: (event: Event) => {
        const form = event.target as HTMLFormElement;

        if (form.classList.contains("needs-validation")) {
          if (form.checkValidity()) {
            login({ email: email.value ?? "", password: password.value ?? "" });
          } else {
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        }
      },
    };
  },
};
</script>

<style scoped>
</style>