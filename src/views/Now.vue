<template>
  <TaskList :taskType="'running'"></TaskList>
</template>
<script>
import TaskList from "./TaskList.vue";
export default {
  name: "now",
  components: {
    TaskList: TaskList
  }
};
</script>
