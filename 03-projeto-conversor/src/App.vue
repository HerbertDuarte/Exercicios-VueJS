<template>
    <h1 class="text-4xl py-4">
      Conversor de moedas
    </h1>
    <span>
        <img class="h-16 md:h-20 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg" />
    </span>

  <div class="m-auto max-w-[1080px]">
    <Conversor moeda-a="BRL" moeda-b="USD"/>
    <Conversor moeda-a="USD" moeda-b="BRL"/>
    <Conversor moeda-a="BRL" moeda-b="EUR"/>
    <Conversor moeda-a="EUR" moeda-b="BRL"/>
    <Conversor moeda-a="BRL" moeda-b="CAD"/>
    <Conversor moeda-a="CAD" moeda-b="BRL"/>
  </div>
  
</template>

<script>
  // taiwindcss
  import './index.css'

  import Conversor from './components/Conversor.vue';

  export default {
  name: "App",
  components: {
    Conversor
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
