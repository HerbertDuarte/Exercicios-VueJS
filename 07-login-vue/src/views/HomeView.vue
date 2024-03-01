<script setup lang="ts">
import {useAuthStore} from "@/stores/auth";
const auth = useAuthStore()
</script>

<template>
  <main>
    <h1>Home</h1>
    <RouterLink to="/about">
      About
    </RouterLink>
    <button @click="auth.logout">Logout</button>
  </main>
</template>
