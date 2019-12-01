import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import fehchapter1 from '@/components/blogs/frontendHeroChapter1'
import fehchapter2 from '@/components/blogs/frontendHeroChapter2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      props: true,
    },
    {
      path: '/frontendhero/chapter1',
      name: 'Chapter 1',
      component: fehchapter1,
      props: true
    },
    {
      path: '/frontendhero/chapter2',
      name: 'Chapter 2',
      component: fehchapter2,
      props: true
    }
  ]
})
