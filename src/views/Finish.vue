<template>
  <div
    class="home fit row wrap justify-start items-start content-start"
    style="width:90%"
  >
    <q-card
      class="offset-1 col-3"
      style="margin-top:20px"
      v-for="todo in todoList.filter(todo => todo.state == 'finished')"
      :key="todo.id"
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
                    <q-item-section>删除</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>归档</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>还原</q-item-section>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {},
  computed: {
    ...mapState({
      todoList: state => {
        return state.todoList;
      }
    })
  }
};
</script>
