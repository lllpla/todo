<template>
  <div
    class="home fit row wrap justify-start items-start content-start"
    style="width:90%"
  >
    <q-intersection
      v-for="todo in todoList.filter(todo => todo.state == taskType)"
      :key="todo.id"
      transition="scale"
    >
      <q-card
        style="margin-top:20px;margin-left:10px;margin-right:10px"
        :class="getClass(todo)"
        @mouseover="todo.active = true"
        @mouseleave="todo.active = false"
        @click="showDialog($event, todo)"
      >
        <q-card-section>
          <div class="row items-center no-wrap" style="height:40px">
            <div class="col">
              <div>{{ todo.title }}</div>
            </div>
            <div class="col-auto">
              <q-btn
                dense
                color="grey-7"
                round
                flat
                icon="more_vert"
                @click.stop
              >
                <q-menu>
                  <q-list>
                    <q-item
                      v-if="taskType != 'running'"
                      clickable
                      @click="changeState(todo.id, 'running')"
                    >
                      <q-item-section>还原</q-item-section>
                    </q-item>
                    <q-item
                      v-if="taskType != 'store'"
                      clickable
                      @click="changeState(todo.id, 'store')"
                    >
                      <q-item-section>归档</q-item-section>
                    </q-item>
                    <q-item
                      v-if="taskType != 'finished'"
                      clickable
                      @click="changeState(todo.id, 'finished')"
                    >
                      <q-item-section>完成</q-item-section>
                    </q-item>
                    <q-item class="text-red" clickable>
                      <q-item-section @click="deleteTask(todo)"
                        >删除</q-item-section
                      >
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <pre style="fontSize:smaller">{{ todo.text }}</pre>
        </q-card-section>
        <q-separator />
        <q-card-section class="fit row  justify-end">
          <q-chip dense class="text-caption">
            {{ todo.time }}
          </q-chip>
        </q-card-section>
      </q-card>
    </q-intersection>
    <q-dialog v-model="dialog.show">
      <q-card :class="getClass(dialog)" style="width: 600px; max-width: 80vw;">
        <q-card-section>
          <q-input
            class="text-h5"
            label="标题"
            ref="dialogTitle"
            borderless
            v-model="dialog.title"
            :rules="[val => !!val || '请输入标题']"
          ></q-input>
        </q-card-section>
        <q-card-section>
          <q-input
            label="内容"
            borderless
            type="textarea"
            autofocus
            autogrow
            ref="dialogDetial"
            v-model="dialog.text"
            v-on:keydown.tab.prevent="editerTab"
          ></q-input>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="取消" color="primary" v-close-popup />
          <q-btn flat label="确定" color="primary" @click="submitModify()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "TaskList",
  components: {},
  props: {
    taskType: {
      type: String,
      default: "running"
    }
  },
  data() {
    return {
      dialog: {
        show: false,
        title: "",
        id: "",
        text: "",
        color: ""
      }
    };
  },
  methods: {
    editerTab() {
      // 光标的偏移位置
      const item = "	";
      const input = this.$refs.dialogDetial.$refs.input;
      var startPos = input.selectionStart; // input 第0个字符到选中的字符
      var endPos = input.selectionEnd; // 选中的字符到最后的字符
      if (startPos === undefined || endPos === undefined) return;
      var txt = input.value;
      // 将表情添加到选中的光标位置
      var result = txt.substring(0, startPos) + item + txt.substring(endPos);
      input.value = result; // 赋值给input的value
      // 重新定义光标位置
      input.focus();
      input.selectionStart = startPos + item.length;
      input.selectionEnd = startPos + item.length;
      this.dialog.text = result; // 赋值给表单中的的字段
    },
    showDialog($event, todo) {
      this.dialog.show = true;
      this.dialog.title = todo.title;
      this.dialog.text = todo.text + "";
      this.dialog.color = todo.color;
      this.dialog.id = todo.id;
    },
    submitModify() {
      this.$refs.dialogTitle.validate();
      if (this.$refs.dialogTitle.hasError) {
        return;
      }
      const todo = this.todoList.find(one => one.id == this.dialog.id);
      todo.title = this.dialog.title;
      todo.text = this.dialog.text + "";
      todo.active = false;
      this.$store.dispatch("saveTask", {
        todoList: this.todoList
      });
      this.dialog.show = false;
    },
    changeState(id, state) {
      if (this.todoList) {
        const todo = this.todoList.find(todo => todo.id === id);
        todo.active = false;
        todo.state = state;
        this.$store.dispatch("saveTask", {
          todoList: this.todoList
        });
      }
    },
    getClass(todo) {
      if (todo.active == undefined || todo.active) {
        return "shadow-8 bg-" + todo.color;
      }
      return "bg-" + todo.color;
    },
    deleteTask(this_todo) {
      const del_List = this.todoList.filter(todo => todo.id !== this_todo.id);
      this.$store.dispatch("saveTask", {
        todoList: del_List
      });
      this.$q.notify({
        message: "当前笔记[" + this_todo.title + "]已删除",
        progress: true,
        timeout: 5000,
        actions: [
          {
            label: "撤销",
            color: "yellow",
            handler: () => {
              del_List.push(this_todo);
              this.$store.dispatch("saveTask", {
                todoList: del_List
              });
              this.$q.notify("删除已撤销");
            }
          }
        ]
      });
    },
    hoverStyle($event) {
      $event.currentTarget.className = "q-card shadow-8";
    },
    leaveStyle($event) {
      $event.currentTarget.className = "q-card";
    }
  },
  computed: {
    ...mapState({
      todoList: state => {
        return state.todoList;
      }
    })
  }
};
</script>
<style>
.notify_process {
  color: grey;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>