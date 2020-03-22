<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon large>event</v-icon>
        待办任务
      </div>
      <v-spacer></v-spacer>
      <v-row nogutter class="d-flex align-right">
        <v-col lg="2" sm="4" md="4" xs="6">
          <v-select
            class="body-2"
            :items="taskTypes"
            v-model="type"
            label="任务类型"
            :outlined="outlined"
            :disabled="thisDisabled"
            solo
            dense
            light
            flat
            hide-details
          ></v-select>
        </v-col>
        <v-col lg="10" sm="8" md="8" xs="6">
          <v-text-field
            class="body-2"
            placeholder="请输入任务内容"
            label="任务内容"
            :disabled="thisDisabled"
            :outlined="outlined"
            v-model="text"
            solo-inverted
            flat
            dense
            hide-details
          >
            <v-btn small slot="append" color="success" @click="addTask" icon>
              <v-icon>add_circle</v-icon>
            </v-btn>
          </v-text-field>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-content>
      <Main />
    </v-content>
  </v-app>
</template>

<script>
import Main from "./components/Main";
import uuidv1 from "uuid/v1";

export default {
  name: "App",

  components: {
    Main
  },

  data: () => ({
    taskTypes: ["工作", "学习", "生活"],
    todoList: [],
    type: "工作",
    text: ""
  }),
  methods: {
    addTask() {
      if (this.text === "") {
        this.snackbar = true;
        return;
      }
      const oneTask = {
        id: uuidv1(),
        type: this.type,
        text: this.text,
        date: new Date().toLocaleString(),
        state: "start"
      };
      let list = this.getTodoList();
      list.unshift(oneTask);
      this.setTodoList(list);
      this.type == "工作";
      this.text = "";
    },
    getTodoList() {
      if (localStorage.todoList) {
        return JSON.parse(localStorage.todoList);
      } else {
        return [];
      }
    },
    setTodoList(todoList) {
      localStorage.todoList = JSON.stringify(todoList);
      this.$bus.$emit("resetTodoList");
    }
  }
};
</script>
