// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// render: h => h(App)== template: '<App/>' 两者是等价的，使用template的方式需要使用vue的full版本（包括compiler），而用render函数的方式，只需要用vue的runtime版本，也就是说，如果你的输出文件想要小一点，可以用后一种方式。
