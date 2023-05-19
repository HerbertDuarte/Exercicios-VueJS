<template>
  <div class="inline-block p-3 rounded-md border-2 border-sky-950/60 mx-4 my-3 w-[90%] sm:w-[40%] md:w-[30%]">
    
    <p class="text-xl">{{moedaA }} para {{ moedaB }}</p>

    <form v-on:submit="fetchData" class="m-3 flex flex-col justify-center items-center gap-2">
      <input step="0.01" v-model="moedaA_value" class="bg-slate-200/80 focus:bg-slate-200 py-1 px-2 rounded text-black/80 focus:outline-none placeholder:text-black/60 w-11/12" v-bind:placeholder="moedaA" type="number" name="brl-usd" id="brl-usd">
    </form>
  
  <p>{{ moedaB }} {{((this.cotacao * Number(this.moedaA_value)).toFixed(2)).toString().replace('.', ",")}}</p>
  
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
        cotacao : null
      }
    },
    methods : {
      fetchData(){
        const url = 'https://economia.awesomeapi.com.br/last/' + this.moedaA + '-' + this.moedaB
        const de_para = `${this.moedaA}${this.moedaB}`

        fetch(url)
          .then(data => data.json()
          .then(json => {
            this.cotacao = (json[de_para].ask)
          }))
      },
    },
    mounted() {
      this.fetchData()
    }
  }
</script>
