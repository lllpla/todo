import Vue from "vue";

import "./styles/quasar.sass";
import "@quasar/extras/material-icons/material-icons.css";
import { Quasar, Notify, LocalStorage, QEditor, Morph} from "quasar";

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
    QEditor
  },
  directives: {
    Morph
  },
  plugins: { Notify, LocalStorage }
});
