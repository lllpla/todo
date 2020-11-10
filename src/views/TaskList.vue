<template>
  <div
    class="home fit row wrap justify-start items-start content-start"
    style="width:90%"
  >
    <q-banner
      rounded
      dense
      class="bg-orange text-white justify-center on-right"
      style="width: 97%;margin-top: 5px"
      v-if="searchText !== ''"
    >
      结果已筛选，关键字'<b class="text-light-blue-1">{{ this.searchText }}</b
      >'
    </q-banner>
    <q-intersection
      v-for="todo in todoList
        .filter(todo => todo.state === taskType)
        .filter(
          todo =>
            this.searchText === '' ||
            todo.title.includes(this.searchText) ||
            todo.text
              .replace(/(\n)/g, '')
              .replace(/(\t)/g, '')
              .replace(/(\r)/g, '')
              .replace(/<\/?[^>]*>/g, '')
              .replace(/\s*/g, '')
              .includes(this.searchText)
        )"
      once
      :key="todo.id"
      transition="flip-up"
    >
      <q-card
        style="margin-top:10px;margin-left:10px;margin-right:10px"
        :class="'todo-card ' + getClass(todo)"
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
                      v-if="taskType !== 'running'"
                      clickable
                      @click="changeState(todo.id, 'running')"
                    >
                      <q-item-section>还原</q-item-section>
                    </q-item>
                    <q-item
                      v-if="taskType !== 'store'"
                      clickable
                      @click="changeState(todo.id, 'store')"
                    >
                      <q-item-section>归档</q-item-section>
                    </q-item>
                    <q-item
                      v-if="taskType !== 'finished'"
                      clickable
                      @click="changeState(todo.id, 'finished')"
                    >
                      <q-item-section>完成</q-item-section>
                    </q-item>
                    <q-item class="text-red" clickable>
                      <q-item-section @click="deleteTask(todo)"
                        >删除
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-card-section v-html="todo.text"></q-card-section>
        <q-separator />
        <q-card-section class="fit row  justify-end">
          <q-chip dense class="text-caption bg-light-blue text-white">
            {{ getDisplayDate(todo.time) }}
          </q-chip>
        </q-card-section>
      </q-card>
    </q-intersection>
    <q-dialog v-model="dialog.show">
      <q-card :class="getClass(dialog)" style="width: 600px; max-width: 80vw;">
        <q-bar :class="'items-center' + ' bg-' + dialog.color">
          <div class="text-center text-accent" style="font-size: xx-small">
            内容编辑
          </div>
          <q-space />
          <q-btn
            flat
            dense
            round
            icon="las la-times"
            color="negative"
            v-close-popup
          />
        </q-bar>
        <q-card-section>
          <q-input
            dense
            ref="dialogTitle"
            borderless
            v-model="dialog.title"
            :rules="[val => !!val || '请输入标题']"
          />
          <q-editor
            dense
            flat
            :toolbar="[
              ['bold', 'italic', 'strike', 'underline'],
              [
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7'
                  ]
                }
              ]
            ]"
            v-model="dialog.text"
            :content-class="'bg-' + dialog.color"
            :toolbar-bg="dialog.color"
            min-height="5rem"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat round color="info" icon="las la-palette">
            <q-popup-proxy v-model="colorPickerShow">
              <q-banner>
                <q-btn
                  round
                  v-for="(color, index) in colors"
                  :key="index"
                  :color="color"
                  @click="
                    dialog.color = color;
                    colorPickerShow = !colorPickerShow;
                  "
                  size="xs"
                ></q-btn>
              </q-banner>
            </q-popup-proxy>
          </q-btn>

          <q-btn
            flat
            round
            icon="las la-check-circle"
            color="positive"
            @click="submitModify()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { date } from "quasar";
import config from "../../package.json";

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
      colors: config.colors,
      colorPickerShow: false,
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
    getDisplayDate(dateStr) {
      const notedate = date.extractDate(dateStr, "YYYY-MM-DD HH:mm:ss");
      if (date.isSameDate(notedate, new Date(), "day")) {
        return "today";
      } else if (
        date.isSameDate(
          date.addToDate(notedate, { days: 1 }),
          new Date(),
          "day"
        )
      ) {
        return "yesterday";
      } else {
        return date.formatDate(notedate, "YYYY/MM/DD");
      }
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
      const todo = this.todoList.find(one => one.id === this.dialog.id);
      todo.title = this.dialog.title;
      todo.text = this.dialog.text + "";
      todo.color = this.dialog.color;
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
      if (todo.active === undefined || todo.active) {
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
      },
      searchText: state => {
        return state.searchText;
      }
    })
  }
};
</script>
<style>
@media only screen and (max-width: 768px) {
  .todo-card {
    width: 95vw;
  }
}

.notify_process {
  color: grey;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
