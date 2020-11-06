<template>
  <div id="app">
    <Header/>
    <Picker/>
    <Timer/> 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Picker from './components/Picker.vue'
import Timer from './components/Timer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Picker,
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
