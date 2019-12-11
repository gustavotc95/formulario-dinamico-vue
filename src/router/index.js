import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import Quiz from '../views/Quiz.vue'
import Results from '../views/Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/quiz/female',
    name: 'Quiz Female',
    component: Quiz
  },
  {
    path: '/quiz/male',
    name: 'Quiz Male',
    component: Quiz
  },
  {
    path: '/results',
    name: 'Get your plan',
    component: Results,
    props: true
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
