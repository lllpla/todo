<template>
  <q-layout view="hHh Lpr lff" style="overflow: hidden;">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="showMenu()" />
        <q-avatar>
          <img src="./assets/keep_48dp.png" />
        </q-avatar>
        <q-toolbar-title>
          待办事项
        </q-toolbar-title>
        <q-circular-progress
          indeterminate
          v-if="postState == 'waiting'"
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
          input-class="text-right"
          class="q-ml-md"
        >
          <template v-slot:append>
            <q-icon v-if="searchText === ''" name="search" />
            <q-icon
              v-else
              name="clear"
              class="cursor-pointer"
              @click="searchText = ''"
            />
          </template>
        </q-input>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="left"
      side="left"
      :width="200"
      :breakpoint="500"
      show-if-above
      :mini="mini"
    >
      <!-- drawer content -->
      <q-list class="rounded-borders text-black" style="margin-top:100px">
        <q-item
          to="/now"
          clickable
          v-ripple
          :active="link === 'now'"
          @click="link = 'now'"
          class="menu-node"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon rounded name="alarm"></q-icon>
          </q-item-section>
          <q-item-section>
            进行中
          </q-item-section>
        </q-item>
        <q-item
          to="/finish"
          clickable
          v-ripple
          :active="link === 'finish'"
          @click="link = 'finish'"
          class="menu-node"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon rounded name="beenhere"></q-icon>
          </q-item-section>
          <q-item-section>
            已完成
          </q-item-section>
        </q-item>
        <q-item
          to="/store"
          clickable
          v-ripple
          :active="link === 'store'"
          @click="link = 'store'"
          class="menu-node"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon rounded name="archive"></q-icon>
          </q-item-section>
          <q-item-section>
            已归档
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <div
        style="margin-top:20px;margin-left:10px"
        class="fit row wrap justify-center"
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

          <template v-if="title !== ''">
            <q-input
              style="margin-left:10px"
              v-model="text"
              dense
              hide-bottom-space
              placeholder="添加记事内容..."
              autogrow
              borderless
              type="textarea"
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
          </template>
        </q-card>
      </div>
      <div style="margin-top:20px">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapState } from "vuex";
import uuidv1 from "uuid/v1";
import { date } from "quasar";

export default {
  name: "App",

  components: {},

  data() {
    return {
      githubData: null,
      left: true,
      mini: false,
      link: "now",
      textshow: false,
      colorPickerShow: false,
      title: "",
      pickColor: "white",
      text: "",
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
    showMenu() {
      if (this.left) {
        this.mini = !this.mini;
      } else {
        this.left = !this.left;
      }
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
        text: (this.text + "").replace(/\n/g, "<br/>"),
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
        return state.todoList;
      },
      postState: state => {
        return state.postState;
      }
    })
  },
  mounted() {
    if (this.todoList.length == 0) {
      this.$store.dispatch("init");
    }
  }
};
</script>
<style lang="sass">
.my-menu-link
  color: white
  background: #feefc3
  font-size: 0.875em
.menu-node
  font-size: 0.875em
  border-radius: 0 25px 25px 0;
</style>
