<template>
  <div class="inline-block p-3 rounded-md border-2 border-slate-500 mx-4">

    <h1 class="text-4xl">
      Conversor de moedas
    </h1>
    
    <p class="text-xl">{{moedaA }} para {{ moedaB }}</p>
    <form class="m-3 flex flex-col gap-2 justify-center items-center">
    <input class="bg-slate-500 p-1 rounded text-white/80 focus:outline-none" v-bind:placeholder="moedaA" type="number" name="brl-usd" id="brl-usd">
    <input class="bg-blue-500 p-2 rounded text-white/80 cursor-pointer" type="submit" value="Calcular">
  </form>
  
  <p>result</p>
  
</div>
</template>

<script>
// taiwindcss
import '../index.css'

  export default {
    name : 'Conversor',
    props : [
      'moedaA', 'moedaB'
    ]
  }
</script>
