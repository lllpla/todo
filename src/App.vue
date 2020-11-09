<template>
  <q-layout view="hHh Lpr lff" style="overflow: hidden;">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="showMenu()" />
        <q-avatar>
          <img src="./assets/keep_48dp.png" />
        </q-avatar>
        <q-toolbar-title> 待办事项 v{{ version }} </q-toolbar-title>
        <q-circular-progress
          indeterminate
          v-if="postState === 'waiting'"
          size="30px"
          :thickness="0.33"
          color="lime"
          track-color="grey-3"
        />
        <q-space />
        <q-input
          dense
          outlined
          v-model="searchText"
          @input="commitSearchText"
          input-class="text-right"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="searchText === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="
                searchText = '';
                commitSearchText();
              "
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <SideBar ref="sideBar"></SideBar>
    <q-page-container>
      <div
        style="margin-top:20px;"
        class="fit row wrap float-left on-right"
      >
        <q-card
          :class="'col-lg-8 col-xl-8  col-md-8 col-xs-11 bg-' + pickColor"
        >
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
      <div class="fit row justify-center" style="margin-top:20px">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapState } from "vuex";
import uuidv1 from "uuid/v1";
import { date } from "quasar";
import config from "../package.json";
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",

  components: { SideBar: SideBar },

  data() {
    return {
      textsMorph: "notdisplay",
      githubData: null,
      left: true,
      mini: false,
      textshow: false,
      colorPickerShow: false,
      title: "",
      pickColor: "white",
      text: "",
      version: config.version,
      searchText: "",
      colors: [
        "indigo-2",
        "indigo-11",
        "purple-2",
        "grey",
        "cyan-1",
        "teal-1",
        "green-1",
        "yellow-1"
      ]
    };
  },
  methods: {
    commitSearchText() {
      this.$store.commit("setSearchText", { searchText: this.searchText });
    },
    editerTab() {
      // 光标的偏移位置
      const item = "	";
      const input = this.$refs.noteDetail.$refs.input;
      const startPos = input.selectionStart; // input 第0个字符到选中的字符
      const endPos = input.selectionEnd; // 选中的字符到最后的字符

      if (startPos === undefined || endPos === undefined) return;
      const txt = input.value;
      // 将表情添加到选中的光标位置
      const result = txt.substring(0, startPos) + item + txt.substring(endPos);
      input.value = result; // 赋值给input的value
      // 重新定义光标位置
      input.focus();
      input.selectionStart = startPos + item.length;
      input.selectionEnd = startPos + item.length;
      this.dialog.text = result; // 赋值给表单中的的字段
    },
    showMenu() {
      this.$refs.sideBar.showMenu();
    },
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
      },
      postState: state => {
        return state.postState;
      }
    })
  },
  mounted() {
    if (this.$q.localStorage.has("lee-todo-settings")) {
      let settings = this.$q.localStorage.getItem("lee-todo-settings");
      console.log(settings);
      this.$store.commit("initSettings", { settings: settings });
    } else {
      this.$router.push({
        path: "/setting"
      });
    }
    if (this.todoList.length === 0) {
      this.$store.dispatch("init");
    }
  }
};
</script>
