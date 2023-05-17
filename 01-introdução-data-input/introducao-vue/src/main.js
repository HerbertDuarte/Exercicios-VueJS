const { createApp } = Vue

const App = {
  data(){
    return{
      name: '',
      myName : 'Herbert',
      age : 18,
      input_name : '',
      message : 'Hello Vue'
    }
  },
    methods : {
    changeName(e){

      e.preventDefault()
      this.name = this.input_name
      
    }
  }
}
createApp(App).mount('#app')