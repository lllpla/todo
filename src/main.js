import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./quasar";
import VueResource from "vue-resource";
import GitHubAPI from "vue-github-api";
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(GitHubAPI, { token: "20515ba9539acf799b907dc2d95312ed0e9226fd" });
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
