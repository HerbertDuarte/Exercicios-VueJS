<template>
  <div class="inline-block p-3 rounded-md border-2 border-slate-500/60 mx-4 my-3 ">
    
    <p class="text-xl">{{moedaA }} para {{ moedaB }}</p>

    <form v-on:submit="converter" class="m-3 flex flex-col justify-center items-center gap-2">
      <input step="0.01" v-model="moedaA_value" class="bg-slate-200 p-1 rounded text-black/80 focus:outline-none placeholder:text-white" v-bind:placeholder="moedaA" type="number" name="brl-usd" id="brl-usd">
      <input class="bg-blue-500 p-2 rounded text-white cursor-pointer" type="submit" value="Calcular">
    </form>
  
  <p>{{ moedaB }} {{moedaB_value}}</p>
  
</div>
</template>

<script>
// taiwindcss
import '../index.css'

  export default {
    name : 'Conversor',
    props : [
      'moedaA', 'moedaB'
    ],
    data(){
      return {
        moedaA_value : '',
        moedaB_value : 0
      }
    },
    methods : {
      converter(e){
        e.preventDefault()

        const url = 'https://economia.awesomeapi.com.br/last/' + this.moedaA + '-' + this.moedaB
        const de_para = `${this.moedaA}${this.moedaB}`

        fetch(url)
          .then(data => data.json()
          .then(json => {
            const cotacao = (json[de_para].ask)
            this.moedaB_value = ((cotacao * Number(this.moedaA_value)).toFixed(2)).toString().replace('.', ",")
          }))

      }
    }
  }
</script>
