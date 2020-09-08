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
    }
}
</script>

<style scoped>

.article{
    width:100%;
    height:150px;
    background-color:#fefefe;
    display:flex;
    margin-bottom:10px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.article-image{
   object-fit: cover;
  width:25%;
  height:100%;
  background-color:#333;
/*   background-image:url("https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"); */
  background-size:cover;
/*   background-attachment:fixed; */
/* background-repeat:no-repeat; */
}
.article-content{
  width:55%;
  margin:10px;

}
.article-buttons{
  width:20%;
  background-color:#333;
  display:flex;
}

</style>