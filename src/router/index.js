import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import BubbleSort from '../components/BubbleSort.vue'
import InsertionSort from '../components/InsertionSort.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sort/bubble',
      component: BubbleSort
    },
    {
      path: '/sort/insertion',
      component: InsertionSort
    },
    {
    path: '*',
    redirect: '/'
    }
  ]
})
