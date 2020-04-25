import Vue from "vue";
import Vuex from "vuex";
import { getDataFile, saveDataFile } from "../utils/github";
import { Base64 } from "js-base64";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    sha: null,
    postState: "idle",
    settings: {
      token: "",
      apiUrl: "https://api.github.com",
      user: "",
      repo: ""
    }
  },
  mutations: {
    SetTasks(state, payload) {
      state.todoList = payload.todoList;
      state.sha = payload.sha;
    },
    initTasks(state, payload) {
      state.todoList = payload.todoList;
      state.sha = payload.sha;
    },
    posting(state, payload) {
      state.postState = payload.postState;
    },
    initSettings(state, payload) {
      state.settings = payload.settings;
    }
  },
  actions: {
    init({ commit, state }) {
      if (state.settings.token == "") {
        return;
      }
      commit("posting", { postState: "waiting" });
      getDataFile("todoList.json", state.settings).then(res => {
        commit("posting", { postState: "idle" });
        if (res.status == 404) {
          return;
        }

        commit("initTasks", {
          todoList: JSON.parse(Base64.decode(res.body.content)),
          sha: res.body.sha
        });
      });
    },
    saveTask({ commit, state }, payload) {
      if (state.settings.token == "") {
        return;
      }
      commit("posting", { postState: "waiting" });
      const todoList = payload.todoList;
      const sha = state.sha;
      saveDataFile(
        "todoList.json",
        JSON.stringify(todoList),
        sha,
        state.settings
      ).then(res => {
        commit("posting", { postState: "idle" });
        if (res.body.content.sha) {
          commit("initTasks", {
            todoList: todoList,
            sha: res.body.content.sha
          });
        }
      });
    }
  },
  modules: {}
});
