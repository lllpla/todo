<template>
  <div style="margin-top:20px;" class="fit row wrap float-left on-right">
    <q-card :class="'col-lg-8 col-xl-8  col-md-8 col-xs-11 bg-' + pickColor">
      <q-input
        style="margin-left:10px;font-size:large;"
        v-model="title"
        hide-bottom-space
        dense
        borderless
        placeholder="添加记事..."
      >
      </q-input>
      <q-slide-transition>
        <div v-show="title !== ''">
          <q-editor
            dense
            flat
            v-model="text"
            ref="noteDetail"
            min-height="5rem"
          />
          <q-card-actions align="right">
            <q-btn flat round color="primary" icon="colorize">
              <q-popup-proxy v-model="colorPickerShow">
                <q-banner>
                  <q-btn
                    round
                    v-for="(color, index) in colors"
                    :key="index"
                    :color="color"
                    @click="
                      pickColor = color;
                      colorPickerShow = !colorPickerShow;
                    "
                    size="xs"
                  ></q-btn>
                </q-banner>
              </q-popup-proxy>
            </q-btn>
            <q-btn
              flat
              round
              color="red"
              icon="clear"
              @click="clearAll"
            ></q-btn>
            <q-btn
              flat
              round
              color="primary"
              icon="add"
              @click="addNote"
            ></q-btn>
          </q-card-actions>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>
<script>
import config from "../../package.json";
import { date } from "quasar";
import uuidv1 from "uuid/v1";
import {mapState} from "vuex";

export default {
  name: "NewNote",
  data() {
    return {
      colorPickerShow: false,
      title: "",
      pickColor: "white",
      text: "",
      colors: config.colors
    };
  },
  methods: {
    clearAll() {
      this.textshow = false;
      this.pickColor = "white";
      this.text = "";
      this.title = "";
    },
    addNote() {
      const note = {
        title: this.title,
        text: this.text + "",
        id: uuidv1(),
        state: "running",
        active: false,
        color: this.pickColor,
        time: date.formatDate(new Date(), "YYYY-MM-DD HH:mm:ss")
      };
      this.todoList.push(note);
      this.$store.dispatch("saveTask", {
        todoList: this.todoList
      });
      this.clearAll();
    }
  },
  computed: {
    ...mapState({
      todoList: state => {
        return state.todoList.reverse();
      }
    })
  }
};
</script>
