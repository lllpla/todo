<template>
  <TaskList :taskType="'store'"></TaskList>
</template>
<script>
import TaskList from "./TaskList.vue";
export default {
  name: "finish",
  components: {
    TaskList: TaskList
  }
};
</script>
