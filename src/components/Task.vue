<template>
  <v-form style="margin-left:10px;margin-right:10px">
    <v-row>
      <v-col lg="2" md="4" sm="4" xs="4">
        <v-select
          :items="taskTypes"
          v-model="type"
          label="任务类型"
          :solo="solo"
          dense
          :outlined="outlined"
          :disabled="disabled"
        ></v-select>
      </v-col>
      <v-col lg="10" md="8" sm="8" xs="8">
        <v-text-field
          placeholder="请输入任务内容"
          :solo="solo"
          label="任务内容"
          dense
          :disabled="disabled"
          :outlined="outlined"
          v-model="text"
        >
          <v-btn slot="append" v-if="isNew == true" @click="addTask" icon>
            <v-icon>add_circle</v-icon>
          </v-btn>
          <v-btn slot="append" v-if="isNew == false" @click="finishTask" icon>
            <v-icon>done</v-icon>
          </v-btn>
        </v-text-field>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  name: "Task",
  data() {
    return {
      type: "",
      text: ""
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
        return { type: "工作", text: "" };
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
      const oneTask = {
        type: this.type,
        text: this.text
      };
      this.$store.commit("add", oneTask);
    },
    finishTask() {
      this.disabled = true;
    }
  },
  mounted() {
    this.type = this.task.type;
    this.text = this.task.text;
  }
};
</script>
