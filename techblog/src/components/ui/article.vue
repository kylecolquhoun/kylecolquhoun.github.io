<template>
    <div class="article">
        <img src="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" class="article-image" />
        <div class="article-content">
            <h3><span>{{title}}</span></h3>
            <span>Author(s) - {{authors}}
                <navlink :path="path" text="Click here"/>
            </span>
        </div>
        <div class="article-buttons">
            <div class="buttons" id="like-button"><i class="far fa-heart"></i></div>
            <div class="buttons"><i class="far fa-comment"></i></div>
            <div class="buttons"><i class="far fa-share-square"></i></div>
        </div>
    </div>
</template>

<script>
import navlink from '../navigation/navlink'
export default {
    props: ['authors', 'title', 'path'],
    components: {
        navlink
    },
    beforeMount() {
        console.log(1)
    }

}
</script>

<style>

</style>