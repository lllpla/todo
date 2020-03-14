<template>
  <div id="app" style="width:800px;margin:0 auto">
    <el-container>
      <el-header>
        <h1>代办项列表</h1>
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
          :state="item.state"
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
      inputText: ""
    };
  },

  methods: {
    addTask() {
      if (this.inputText == "") {
        this.$message.error("任务内容不能为空");
        return;
      }

      const id = this.todoList.length == 0 ? 0 : this.todoList[0].id + 1;
      const todo = {
        text: this.inputText,
        id: id,
        time: dateFormat(),
        state: "active"
      };
      this.todoList.unshift(todo);
      this.inputText = "";
      this.$cookies.set("todoList", JSON.stringify(this.todoList), Infinity);
    }
  },
  mounted() {
    const todoList = this.$cookies.get("todoList");
    if (todoList) {
      this.todoList = JSON.parse(todoList);
    }
  },
  created() {
    this.$bus.$on("changeState", data => {
      if (data.state == "delete") {
        this.todoList = this.todoList.filter(todo => todo.id != data.id);
      } else {
        let thisTodo = this.todoList.filter(todo => todo.id == data.id);
        if (thisTodo.length == 1) {
          thisTodo[0].state = data.state;
          this.todoList = this.todoList.sort((a, b) => {
            if (a.state != b.state) {
              if (a.state == "active") {
                return -1;
              }
            } else {
              return b.id - a.id;
            }
          });
        }
        this.$cookies.set("todoList", JSON.stringify(this.todoList), Infinity);
      }
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  background: whitesmoke;
}
</style>
