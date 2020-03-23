<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col lg="8" sm="12" md="12" xs="12">
        <v-card>
          <v-tabs grow background-color="white" color="deep-purple accent-4">
            <v-tab>
              <v-icon left>access_alarm</v-icon>
              进行中
            </v-tab>
            <v-tab>
              <v-icon left>style</v-icon>
              已完成
            </v-tab>
            <v-tab-item>
              <v-card
                flat
                height="80vh"
                style="overflow-y:auto;overflow-x:hidden;"
              >
                <v-item-group>
                  <v-item v-for="todo in getTodoList('start')" :key="todo.id">
                    <Task
                      :taskTypes="taskTypes"
                      :task="todo"
                      :outlined="true"
                      :solo="false"
                    ></Task>
                  </v-item>
                </v-item-group>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card
                flat
                height="80vh"
                style="overflow-y:auto;overflow-x:hidden;"
                ><v-item-group>
                  <v-item v-for="todo in getTodoList('finish')" :key="todo.id">
                    <Task
                      :taskTypes="taskTypes"
                      :task="todo"
                      :outlined="true"
                      :solo="false"
                    ></Task>
                  </v-item>
                </v-item-group>
              </v-card>
            </v-tab-item>
          </v-tabs>
          <v-item-group>
            <v-item v-for="todo in getTodoList()" :key="todo.id">
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
    },
    getTodoList(state) {
      let list = this.todoList.filter(todo => todo.state === state);
      return list;
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
