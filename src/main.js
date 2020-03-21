import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from "vue-cookies";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.use(Vuex);
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
