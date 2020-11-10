import Vue from "vue";

import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/line-awesome/line-awesome.css";
import { Quasar, Notify, LocalStorage, QEditor, Morph, QIcon } from "quasar";

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
    QEditor,
    QIcon
  },
  directives: {
    Morph
  },
  extras: ["fontawesome-v5", "line-awesome"],
  plugins: { Notify, LocalStorage }
});
