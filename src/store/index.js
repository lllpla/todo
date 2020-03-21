import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    add(state, oneTodo) {
      state.todoList.unshift(oneTodo);
    }
  },
  actions: {},
  modules: {}
});
