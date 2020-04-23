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
    }
  },
  actions: {},
  modules: {}
});
