import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import NotFound from './views/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/header",component:Header},
    {path:"/footer",component:Footer},
    {path:"/*",component:NotFound}
  ]
})
