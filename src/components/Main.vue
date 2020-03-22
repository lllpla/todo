<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col lg="8" sm="12" md="12" xs="12">
        <v-card>
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
    <v-footer class="text-center" app height="50">
      <v-chip-group
        v-model="amenities"
        style="margin-left:10px"
        active-class="primary--text"
        column
        multiple
      >
        <v-chip
          small
          filter
          outlined
          v-for="chip in chips"
          :key="chip"
          :value="chip"
          >{{ chip }}</v-chip
        >
      </v-chip-group>
    </v-footer>
  </v-container>
</template>

<script>
import Task from "./Task";

export default {
  name: "Main",
  components: { Task: Task },
  data: () => ({
    taskTypes: ["工作", "学习", "生活"],
    todoList: [],
    amenities: ["工作", "学习", "生活", "已完成", "进行中"],
    chips: ["工作", "学习", "生活", "进行中", "已完成"]
  }),
  methods: {
    syncTodoList() {
      this.todoList = JSON.parse(localStorage.todoList);
    },
    getTodoList() {
      let list = this.todoList;
      if (this.amenities.indexOf("已完成") === -1) {
        list = list.filter(todo => todo.state !== "finish");
      }
      if (this.amenities.indexOf("进行中") === -1) {
        list = list.filter(todo => todo.state !== "start");
      }
      this.taskTypes.forEach(oneType => {
        if (this.amenities.indexOf(oneType) === -1) {
          list = list.filter(todo => todo.type !== oneType);
        }
      });

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
