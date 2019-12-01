<template>
  <div>
<div class="banner">
      
        <h1 class="title">
            Eat. Sleep. Code. Repeat.
        </h1>
     <p class="banner-intro">You are invited to read through this Blog to discover and follow along on my journey through the crazy world of tech. From walkthroughs and guides to what I've been upto recently, join my side and lets grow together!</p>
    </div>
    <div class="content-main-blog-landing">
        <article-component authors="Kyle Colquhoun" title="Front-end Hero" path="chapter1"/>
        <article-component authors="Kyle Colquhoun" title="Hello world" path="helloworld"/>
        

</div>
  </div>
</template>

<script>
import articleComponent from './ui/article'
export default {
    components: {
        articleComponent
    }

}
</script>

<style>

</style>