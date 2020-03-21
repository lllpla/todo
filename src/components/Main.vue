<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col lg="8" sm="12" md="12" xs="12">
        <v-card id="addCard">
          <Task :taskTypes="taskTypes" :isNew="true"></Task>
          <v-item v-for="(todo, i) in todoList" :key="i">
            <Task
              :taskTypes="taskTypes"
              :task="todo"
              :outlined="true"
              :solo="false"
            ></Task>
          </v-item>
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
    taskTypes: ["工作", "学习", "生活"]
  }),
  methods: {},
  computed: {
    todoList() {
      return this.$store.state.todoList;
    }
  }
};
</script>
