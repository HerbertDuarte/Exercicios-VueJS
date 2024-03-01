<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { type ILogin } from "@/stores/auth";
import { ref } from "vue";
const auth = useAuthStore();

const form= ref< ILogin >({
  email: "",
  password: "",
});

function handleSubmit(e: Event) {
  e.preventDefault();
  auth.login(form.value);
}
</script>
<template>
  <main>
    <h1>Login</h1>
    <form @submit="handleSubmit">
      <input v-model="form.email" placeholder="digite seu email" type="email" />
      <input
        v-model="form.password"
        placeholder="digite sua senha"
        type="password"
      />
      <button>Login</button>
    </form>
  </main>
</template>
