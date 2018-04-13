// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

require('swiper/dist/css/swiper.css')

Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
