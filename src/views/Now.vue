<template>
  <div
    class="home fit row wrap justify-start items-start content-start"
    style="width:90%"
  >
    <q-intersection
      v-for="todo in todoList.filter(todo => todo.state == 'running')"
      :key="todo.id"
      transition="rotate"
    >
      <q-card
        style="margin-top:20px;margin-left:10px;margin-right:10px"
        @mouseover="hoverStyle($event)"
        @mouseleave="leaveStyle($event)"
      >
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col text-h6">
              <div>{{ todo.title }}</div>
            </div>
            <div class="col-auto">
              <q-btn color="grey-7" round flat icon="more_vert">
                <q-menu cover auto-close>
                  <q-list>
                    <q-item clickable>
                      <q-item-section @click="deleteTask(todo.id)"
                        >删除</q-item-section
                      >
                    </q-item>
                    <q-item clickable @click="changeState(todo.id, 'store')">
                      <q-item-section>归档</q-item-section>
                    </q-item>
                    <q-item clickable @click="changeState(todo.id, 'finished')">
                      <q-item-section>完成</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <div>{{ todo.text }}</div>
        </q-card-section>
      </q-card>
    </q-intersection>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    changeState(id, state) {
      if (this.todoList) {
        const todo = this.todoList.find(todo => todo.id === id);
        todo.state = state;
        this.$store.commit("SetTasks", this.todoList);
      }
    },
    deleteTask(id) {
      this.todoList = this.todoList.filter(todo => todo.id !== id);
      this.$store.commit("SetTasks", this.todoList);
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
<style></style>
