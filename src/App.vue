<template>
  <q-layout view="hHh Lpr lff" style="overflow: hidden;">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="showMenu()" />
        <q-avatar>
          <img src="./assets/keep_48dp.png" alt="" />
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
        <SearchBar />
      </q-toolbar>
    </q-header>
    <SideBar ref="sideBar"></SideBar>
    <q-page-container>
      <NewNote v-if="this.$route.name !== 'setting'" ref="newNoteComponent" />
      <div class="fit row justify-center" style="margin-top:20px">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { mapState } from "vuex";
import config from "../package.json";
import SideBar from "@/components/SideBar";
import SearchBar from "@/components/SearchBar";
import NewNote from "@/components/NewNote";

export default {
  name: "App",

  components: {
    SideBar: SideBar,
    SearchBar: SearchBar,
    NewNote: NewNote
  },

  data() {
    return {
      githubData: null,
      left: true,
      mini: false,
      textshow: false,
      version: config.version
    };
  },
  methods: {
    showMenu() {
      this.$refs.sideBar.showMenu();
    }
  },
  computed: {
    ...mapState({
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
    if (this.$refs.newNoteComponent.todoList.length === 0) {
      this.$store.dispatch("init");
    }
  }
};
</script>
