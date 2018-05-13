import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Sort from '../components/Sort.vue'

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
      name: 'bubbleSort',
      component: Sort
    },
    {
      path: '/sort/insertion',
      name: 'insertionSort',
      component: Sort
    },
    {
      path: '/sort/merge',
      name: 'mergeSort',
      component: Sort
    },
    {
    path: '*',
    redirect: '/'
    }
  ]
})
