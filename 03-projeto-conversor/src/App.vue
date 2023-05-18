<template>
  <Conversor moeda-a="BRL" moeda-b="USD"/>
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

  const ask = fetch('https://economia.awesomeapi.com.br/last/BRL-USD')
  .then((data)=> data.json()
  .then((json) => {
    console.log(json.BRLUSD.ask)
    return (json.BRLUSD.ask)
  })
  )
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
