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
        <q-card class="col-lg-8 col-xl-8  col-md-8 col-xs-11">
          <q-input
            style="margin-left:10px;font-size:large;"
            v-model="title"
            hide-bottom-space
            dense
            borderless
            placeholder="添加记事..."
            @input="checkInput"
          >
          </q-input>
          <q-input
            v-show="textshow"
            style="margin-left:10px"
            v-model="text"
            placeholder="添加记事内容..."
            autogrow
            borderless
            type="textarea"
          />
          <q-card-actions align="right" v-show="textshow">
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
export default {
  name: "App",

  components: {},

  data() {
    return {
      left: true,
      mini: false,
      link: "now",
      textshow: false,
      title: "",
      text: "",
      searchText: ""
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
    checkInput() {
      if (this.title !== "") {
        this.textshow = true;
      } else {
        this.textshow = false;
      }
    },
    clearAll() {
      this.textshow = false;
      this.text = "";
      this.title = "";
    },
    addNote() {
      const note = {
        title: this.title,
        text: this.text,
        id: uuidv1(),
        state: "running"
      };
      this.todoList.push(note);
      this.$store.commit("SetTasks", this.todoList);
      this.clearAll();
    }
  },
  computed: {
    ...mapState({
      todoList: state => {
        return state.todoList;
      }
    })
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
