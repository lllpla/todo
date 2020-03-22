<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col lg="8" sm="12" md="12" xs="12">
        <v-card id="addCard">
          <Task :taskTypes="taskTypes" :isNew="true"></Task>
          <v-item-group>
            <v-item v-for="todo in todoList" :key="todo.id">
              <Task
                :taskTypes="taskTypes"
                :task="todo"
                :outlined="true"
                :solo="false"
              ></Task>
            </v-item>
          </v-item-group>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Task from "./Task";
export default {
  name: "Main",
  components: { Task: Task },
  data: () => ({
    taskTypes: ["工作", "学习", "生活"],
    todoList: []
  }),
  methods: {
    syncTodoList() {
      this.todoList = JSON.parse(localStorage.todoList);
    }
  },
  mounted() {
    this.syncTodoList();
    const _this = this;
    this.$bus.$on("resetTodoList", function() {
      _this.syncTodoList();
    });
  }
};
</script>
