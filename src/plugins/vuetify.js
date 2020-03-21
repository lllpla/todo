import Vue from "vue";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  }
});
