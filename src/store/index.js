import Vue from "vue";
import Vuex from "vuex";
import { getDataFile, saveDataFile } from "@/utils/github";
import {
  getDataFileGitee,
  saveDataFileGitee,
  newFileGitee
} from "@/utils/gitee";
import { Base64 } from "js-base64";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [],
    sha: null,
    postState: "idle",
    searchText: "",
    settings: {
      token: "",
      apiUrl: "https://api.github.com",
      user: "",
      repo: "",
      gitType: "github"
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
    },
    setSearchText(state, payload) {
      state.searchText = payload.searchText;
    }
  },
  actions: {
    init({ commit, state }) {
      if (state.settings.token === "") {
        return;
      }
      commit("posting", { postState: "waiting" });
      let getDatafunction = null;
      if (state.settings.gitType === "github") {
        getDatafunction = getDataFile;
      }
      if (state.settings.gitType === "gitee") {
        getDatafunction = getDataFileGitee;
      }

      getDatafunction("todoList.json", state.settings)
        .then(res => {
          commit("posting", { postState: "idle" });
          if (res.status == 404) {
            return;
          }

          commit("initTasks", {
            todoList: JSON.parse(Base64.decode(res.body.content)),
            sha: res.body.sha
          });
        })
        .catch(error => {
          commit("posting", { postState: "idle" });
          console.log(error);
          if (error.status === 404 && state.settings.gitType === "gitee") {
            let oneTodoList = [];
            console.log("需要新建文件");
            newFileGitee(
              "todoList.json",
              JSON.stringify(oneTodoList),
              state.settings
            ).then(res => {
              if (res.body.content.sha) {
                commit("initTasks", {
                  todoList: oneTodoList,
                  sha: res.body.content.sha
                });
              }
            });
          }
        });
    },
    saveTask({ commit, state }, payload) {
      if (state.settings.token === "") {
        return;
      }
      commit("posting", { postState: "waiting" });
      const todoList = payload.todoList;
      const sha = state.sha;
      let saveDatafunction = null;
      if (state.settings.gitType === "github") {
        saveDatafunction = saveDataFile;
      }
      if (state.settings.gitType === "gitee") {
        saveDatafunction = saveDataFileGitee;
      }

      saveDatafunction(
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
