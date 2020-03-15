<template>
  <div id="app" style="margin:0 auto">
    <el-row>
      <el-col
        :xs="{ span: 24, offset: 0 }"
        :sm="{ span: 16, offset: 4 }"
        :md="{ span: 16, offset: 4 }"
        :lg="{ span: 12, offset: 6 }"
        :xl="{ span: 12, offset: 6 }"
      >
        <el-container class="container">
          <el-header id="header">
            <el-row :gutter="10">
              <el-col :span="8">
                <h3>代办项列表</h3>
              </el-col>
              <el-col :span="16"
                ><el-input
                  style="margin-top:10px"
                  v-model="inputText"
                  placeholder="添加一个任务"
                >
                  <el-button
                    type="success"
                    icon="el-icon-plus"
                    @click="addTask()"
                    slot="append"
                  ></el-button> </el-input
              ></el-col>
            </el-row>
          </el-header>
          <el-main id="main">
            <div id="taskList">
              <OneTask
                v-for="item in todoList"
                :key="item.id"
                :title="item.title"
                :createTime="item.createTime"
                :state="item.state"
                :tag="item.tag"
                :id="item.id"
              ></OneTask>
            </div>
            <div></div>
          </el-main>
          <el-footer id="footer">
            <div style="float:right;margin-top:20px;font-size:smaller">
              <el-link type="success" href="https://github.com/lllpla/todo"
                >源码</el-link
              >
              powered by lllpla
            </div>
          </el-footer>
        </el-container>
      </el-col>
    </el-row>
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
        title: this.inputText,
        id: id,
        tag: "work",
        createTime: dateFormat(),
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
        this.todoList = this.todoList.filter(todo => {
          return todo.id != data.id;
        });
        this.$cookies.set("todoList", JSON.stringify(this.todoList), Infinity);
      } else {
        this.todoList.forEach(element => {
          if (element.id == data.id) {
            element = data;
          }
        });
        for (var index = 0; index < this.todoList.length; index++) {
          if (this.todoList[index].id == data.id) {
            this.todoList[index] = data;
          }
        }

        this.todoList = this.todoList.sort((a, b) => {
          if (a.state != b.state) {
            if (a.state == "active") {
              return -1;
            }
          } else {
            return b.id - a.id;
          }
        });
        this.$cookies.set("todoList", JSON.stringify(this.todoList), Infinity);
      }
    });
  }
};
</script>

<style>
.container {
  height: 98vh;
  width: 100%;
  background: mintcream;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 98vh;
}

#header {
  height: 5vh;
  background: lightslategrey;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
#main {
  height: 90vh;
  background: white;
}
#footer {
  height: 3vh;
  background: lightslategrey;
  color: white;
}
</style>
