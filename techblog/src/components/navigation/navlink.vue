<template>
    <div class="link">
        <router-link :to="path">{{text}}</router-link>
    </div>
</template>

<script>
export default {
    props: ['path', 'text']

}
</script>

<style>
.link {

}
</style>