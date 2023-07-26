<script setup lang="ts">
</script>

<template>
  <h1>
    Olá
  </h1>

  <h2>Sem watch</h2>
  <p>USUÁRIO : {{ `${user.firstname} ${user.lastname}` }}</p>

  <h2>Com watch</h2>
  <p>USUÁRIO : {{ `${user.firstname} ${user.lastname}` }}</p>
  <input v-model="name" type="text">
  <p>{{ name }}</p>
  </template>

<script>
export default {
  data(){
    return {
      user :{
        firstname : 'Herbert',
        lastname : 'Duarte'
      },
      name :'Herbert'
    }
  },

  watch :{
    name(value, oldValue) {
      console.log(value, oldValue)
      console.log('response para o servidor')
    }
  }
}
</script>
<style scoped>
</style>
