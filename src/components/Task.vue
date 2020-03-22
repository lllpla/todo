<template>
  <v-form ref="form" style="margin-left:10px;margin-right:10px">
    <v-row>
      <v-col lg="2" md="4" sm="4">
        <v-select
          :items="taskTypes"
          v-model="type"
          label="任务类型"
          :solo="solo"
          dense
          :outlined="outlined"
          :disabled="thisDisabled"
        ></v-select>
      </v-col>
      <v-col lg="8" md="6" sm="6">
        <v-text-field
          placeholder="请输入任务内容"
          :solo="solo"
          label="任务内容"
          dense
          :disabled="thisDisabled"
          :outlined="outlined"
          v-model="text"
        >
          <v-btn slot="append" v-if="isNew == true" @click="addTask" icon>
            <v-icon>add_circle</v-icon>
          </v-btn>
        </v-text-field>
      </v-col>
      <v-col lg="2" md="2" sm="2">
        <v-btn
          v-if="isNew == false && state == 'start'"
          @click="finishTask"
          icon
          color="green"
        >
          <v-icon>done</v-icon>
        </v-btn>
        <v-btn
          v-if="state == 'finish'"
          color="primary"
          @click="restoreTask"
          icon
        >
          <v-icon>restore</v-icon>
        </v-btn>
        <v-btn v-if="state == 'finish'" color="error" @click="deleteTask" icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <p class="text-right" style="font-size:smaller" v-if="date != ''">
      {{ date }}
    </p>
    <v-divider></v-divider>
    <v-snackbar v-model="snackbar" :timeout="1000" top color="error">
      任务不能为空
    </v-snackbar>
  </v-form>
</template>
<script>
import uuidv1 from "uuid/v1";
export default {
  name: "Task",
  data() {
    return {
      snackbar: false,
      id: "",
      type: "",
      text: "",
      state: "",
      date: "",
      thisDisabled: false
    };
  },
  props: {
    isNew: {
      Type: Boolean,
      default: false
    },
    task: {
      type: Object,
      default: function() {
        return { type: "工作", text: "", state: "" };
      }
    },
    taskTypes: Array,
    disabled: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    solo: {
      type: Boolean,
      default: true
    }
  },
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
    finishTask() {
      this.thisDisabled = true;
      let list = this.getTodoList();
      let task = list.filter(todo => {
        return todo.id == this.id;
      })[0];
      task.state = "finish";
      this.setTodoList(list);
      this.state = "finish";
    },
    restoreTask() {
      this.thisDisabled = false;
      let list = this.getTodoList();
      let task = list.filter(todo => {
        return todo.id == this.id;
      })[0];
      task.state = "start";
      this.setTodoList(list);
      this.state = "start";
    },
    deleteTask() {
      let list = this.getTodoList();
      list = list.filter(todo => todo.id != this.id);
      this.setTodoList(list);
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
  },
  mounted() {
    this.id = this.task.id;
    this.type = this.task.type;
    this.text = this.task.text;
    this.state = this.task.state;
    this.thisDisabled = this.disabled;
    this.date = this.task.date;
  }
};
</script>
