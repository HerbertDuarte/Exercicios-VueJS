<script setup>
</script>

<template>
  <h1>Menu</h1>
  <h2>classe dinâmica</h2>
  <button @click="openMenu">
    {{textButton}}
  </button>
  <ul :class="{ 'close' : !isOpen }">
    <li>Home</li>
    <li>Products</li>
    <li>Cart</li>
    <li>About</li>
  </ul>

  <h2>style dinâmico</h2>
  <button @click="openMenuOther">
    {{textButtonOther}}
  </button>
  <ul :style="isOpenOther ? {'display' : 'block'} :{'display' : 'none'}">
    <li>Home</li>
    <li>Products</li>
    <li>Cart</li>
    <li>About</li>
  </ul>

</template>

<script>
export default {
  data(){
    return{
      isOpen : true,
      isOpenOther : true
    }
  },
  methods: {
    openMenu(){
      this.isOpen = !this.isOpen
      console.log(this.isOpen)
    },
    openMenuOther(){
      this.isOpenOther = !this.isOpenOther
      console.log(this.isOpenOther)
    }
  },
  computed : {
    textButton(){
      if(this.isOpen){
        return 'Fechar'
      }else{
        return 'Abrir'
      }
    },
    textButtonOther(){
      if(this.isOpenOther){
        return 'Fechar'
      }else{
        return 'Abrir'
      }
    }
  }
}
</script>

<style>
.open{
  display: block;
}

.close{
  display: none;
}
</style>