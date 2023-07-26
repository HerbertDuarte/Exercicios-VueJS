<script setup>
</script>

<template>
  <h1>Computed</h1>
  <input v-model="user.firstname" type="text">
  <br>
  <input v-model="user.lastname" type="text">
  <p>{{ fullname }}</p>

  <hr>

  <h1>To Do List</h1>
  <div v-for="todo in todos" :key="todo.task">
    <input type="checkbox" v-model="todo.done" > {{ todo.task }}
  </div>

  <h2>Completed</h2>
  <p v-for="todo in completedTodos">
    {{todo.task}}
  </p>

  <h2>Uncompleted</h2>
  <p v-for="todo in unCompletedTodos">
    {{todo.task}}
  </p>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        firstname: 'Herbert',
        lastname: 'Duarte'
      },
      todos: [
        { task: "HTML I",done: true },
        { task: "CSS",done: true },
        { task: "Responsive design",done: true },
        { task: "Git",done: true },
        { task: "JavaScript I",done: true },
        { task: "JavaScript II",done: false }
      ]
    }
  },
  computed: {
    fullname() {
      return `${this.user.firstname} ${this.user.lastname}`
    },
    completedTodos (){
      return this.todos.filter(todo => todo.done)
    },
    unCompletedTodos (){
      return this.todos.filter(todo => !todo.done)
    }
  }
}
</script>