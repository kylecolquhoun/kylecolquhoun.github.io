<template>
    <div class="banner">

        <h1 class="title">
            Eat. Sleep. Code. Repeat.
        </h1>
        <p class="banner-intro">You are invited to read through this Blog to discover and follow along on my journey through the crazy world of tech. From walkthroughs and guides to what I've been upto recently, join my side and lets grow together!</p>
    </div>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style scoped>
.banner{
width:100%;
  height:350px;
  background-color:#ccc;
  background-image:url("https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  background-position:0px 0px;
  background-size:cover;
  background-repeat:no-repeat;
  background-attachment:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;

}
.banner-intro{
  font-size:2em;
  color:#fff;
  padding:5px;
  width:80%;
  background-color:rgba(10, 10, 0, 0.5);
  text-align:center;
  margin:10px;
}
</style>