import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Eventbus plugin
import eventbus from './plugins/eventbus.js'

Vue.config.productionTip = false

/**
 * Make $bus avaible to all components
 */
Vue.use(eventbus)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
