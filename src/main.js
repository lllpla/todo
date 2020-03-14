import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import VueCookies from "vue-cookies";
import Vuex from "vuex";
Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(Vuex);
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
