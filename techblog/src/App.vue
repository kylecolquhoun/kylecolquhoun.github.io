<template>
  <div id="app">
    <header/>
    <router-view/>
    <footer/>
  </div>
</template>

<script>
import Header from './components/static/Header.vue'
import Footer from './components/static/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
