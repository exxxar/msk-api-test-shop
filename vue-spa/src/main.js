import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import Price from './components/Price.vue'
import Product from './components/Product.vue'


Vue.use(Router)

Vue.use(require('vue-resource'));

const router = new Router({
  routes: [
    {
      path: '/',
      name:'main',
      component: Main,
    },
    {
      path: '/price/:nr',
      name:'price',
      component: Price,
      props:true
    },
    {
      path: '/product/:key',
      name:'product',
      component: Product,
      props:true
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})


