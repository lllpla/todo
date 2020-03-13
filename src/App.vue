<template>
  <div id="app" style="width:800px;margin:0 auto">
    <el-container>
      <el-header>
        <h1>任务测试</h1>
      </el-header>
      <el-main>
        <el-input v-model="inputText" placeholder="添加一个任务">
          <el-button
            type="primary"
            icon="el-icon-plus"
            @click="addTask()"
            slot="append"
          ></el-button>
        </el-input>
        <OneTask
          v-for="item in todoList"
          :key="item.id"
          :title="item.text"
          :createTime="item.time"
          :id="item.id"
        ></OneTask>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { dateFormat } from "./utils/utils";
import OneTask from "./components/OneTask.vue";

export default {
  name: "app",
  components: {
    OneTask: OneTask
  },
  data() {
    return {
      todoList: [],
      inputText: "",
      nowId: 0
    };
  },

  methods: {
    addTask() {
      const todo = {
        text: this.inputText,
        id: this.nowId++,
        time: dateFormat()
      };
      this.todoList.push(todo);
      this.inputText = "";
      this.$cookies.set("todoList", JSON.stringify(this.todoList), Infinity);
    }
  },
  mounted() {
    const todoList = this.$cookies.get("todoList");
    if (todoList) {
      this.todoList = JSON.parse(todoList);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
