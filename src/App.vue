<template>
  <div id="app">
    <AddTodo/>
    <Carousel/>
    <Timer/> 
  </div>
</template>

<script>
import AddTodo from './components/AddTodo.vue'
import Carousel from './components/Carousel.vue'
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    AddTodo,
    Carousel,
    Timer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color: #4D4D4F;
  max-width: 80%;
  margin: auto;
}
</style>
