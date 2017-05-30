import Vue from 'vue'
import router from './router'
import app from './app.vue'

import store from './store'

new Vue({
  	el: '#app',
  	store,
  	render: h => h(app),
  	router
})