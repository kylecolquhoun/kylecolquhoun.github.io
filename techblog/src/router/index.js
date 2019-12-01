import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import chapter1 from '@/components/blogs//frontendHero'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true
    },
    {
      path: '/chapter1',
      name: 'Chapter 1',
      component: chapter1,
      props: true
    }
  ]
})
