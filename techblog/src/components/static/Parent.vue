<template>
  <div class="container">
    <header></header>
        <router-view/>
    <footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>