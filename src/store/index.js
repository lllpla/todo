import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    SetTasks(state, todoList) {
      state.todoList = todoList;
      localStorage.setItem("lee_todolist", JSON.stringify(todoList));
    },
    initTasks(state) {
      state.todoList = JSON.parse(localStorage.getItem("lee_todolist"));
    }
  },
  actions: {},
  modules: {}
});
