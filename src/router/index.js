import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import Quiz from '../views/Quiz.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: About
  },
  {
    path: '/quiz/:gId',
    name: 'Quiz',
    component: Quiz
  },
  { 
    path: "*", 
    component: Page404 
  }

]

const router = new VueRouter({
  routes
})

export default router
