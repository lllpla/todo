<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <div v-if="cardState == 'active'">
        <span class="title-active">{{ title }}</span>
        <el-tooltip
          content="标记完成"
          placement="bottom"
          effect="light"
          :open-delay="200"
        >
          <el-button
            class="title-button"
            icon="el-icon-check"
            @click="handleFinish()"
            circle
          ></el-button>
        </el-tooltip>
      </div>
      <div v-if="cardState == 'finish'">
        <span class="title-finish">{{ title }}</span>
        <el-tooltip
          content="恢复任务"
          placement="bottom"
          effect="light"
          :open-delay="200"
        >
          <el-button
            class="title-button"
            icon="el-icon-refresh"
            @click="handleActive()"
            circle
          ></el-button>
        </el-tooltip>
        <el-tooltip
          content="删除任务"
          placement="bottom"
          effect="light"
          :open-delay="200"
        >
          <el-button
            class="title-button"
            type="danger"
            icon="el-icon-delete"
            @click="handleDelete()"
            circle
          ></el-button>
        </el-tooltip>
      </div>
    </div>
    <el-row>
      <el-col :span="8">{{ id }}</el-col>
      <el-col :span="16" class="timezone">{{ createTime }}</el-col>
    </el-row>
  </el-card>
</template>
<script>
export default {
  name: "OneTask",
  props: {
    title: String,
    createTime: String,
    id: Number,
    state: {
      type: String,
      default: "active"
    }
  },
  data() {
    return {
      cardState: this.state
    };
  },
  methods: {
    handleFinish() {
      this.cardState = "finish";
      this.$bus.$emit("changeState", { id: this.id, state: this.cardState });
    },
    handleActive() {
      this.cardState = "active";
      this.$bus.$emit("changeState", { id: this.id, state: this.cardState });
    },
    handleDelete() {
      this.cardState = "delete";
      this.$bus.$emit("changeState", { id: this.id, state: this.cardState });
    }
  },
  beforeDestroy() {
    //this.$root.$bus.$off("changeState");
  }
};
</script>
<style>
.title-button {
  float: right;
}

.timezone {
  text-align: right;
}
.title-active {
  text-align: left;
  font-size: large;
  color: black;
}
.title-finish {
  text-align: left;
  font-size: large;
  color: darkgray;
  text-decoration: line-through;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
