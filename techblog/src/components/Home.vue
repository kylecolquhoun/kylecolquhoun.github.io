<template>
  <div>
    <div class="content-main-blog-landing">
        <div v-for="(blog,index) in blogs" :key="index">
            <article-component :authors="blog.authors" :title="blog.title" :path="blog.path"/>    
        </div>
    </div>
  </div>
</template>

<script>
import articleComponent from './ui/article'
export default {
    components: {
        articleComponent
    },
    data() {
        return {
            blogs: [{
                authors: 'Kyle Colquhoun',
                title: 'Frontend Hero',
                path: '/frontendhero/chapter1'
            },{
                authors: 'Kyle Colquhoun',
                title: 'Python',
                path: 'python/chapter1'
            },]
        }
    }

}
</script>

<style>

</style>