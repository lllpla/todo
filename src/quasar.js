import Vue from "vue";

import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Notify, LocalStorage } from "quasar";

Vue.use(Quasar, {
  config: {
    notify: {
      color: "black",
      textColor: "white",
      position: "left",
      timeout: 2000
    }
  },
  components: {
    /* not needed if importStrategy is not 'manual' */
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: { Notify, LocalStorage }
});
