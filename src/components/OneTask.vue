<template>
  <el-card :class="objectData.tag" shadow="hover">
    <div slot="header" class="clearfix">
      <el-form :inline="true" v-if="objectData.state == 'active'">
        <el-col :span="4">
          <el-form-item size="small">
            <el-select
              v-model="objectData.tag"
              @change="handleChange()"
              default-first-option
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item size="small">
            <span class="title-active">{{ objectData.title }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="4">
          <el-form-item size="small" class="button-group">
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
          </el-form-item>
        </el-col>
      </el-form>
      <div v-if="objectData.state == 'finish'">
        <el-form>
          <el-col :span="4">
            <el-form-item size="small">
              <el-select v-model="objectData.tag" :disabled="true">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item size="small">
              <span class="title-finish">{{ objectData.title }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item size="small" class="button-group">
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
            </el-form-item>
          </el-col>
        </el-form>
      </div>
    </div>
    <el-row>
      <el-col :span="8">{{ id }}</el-col>
      <el-col :span="16" class="timezone">{{ objectData.createTime }}</el-col>
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
    tag: {
      type: String,
      default: "work"
    },
    state: {
      type: String,
      default: "active"
    }
  },
  data() {
    return {
      objectData: {
        createTime: this.createTime,
        tag: this.tag,
        title: this.title,
        id: this.id,
        state: this.state
      },
      options: [
        { value: "work", label: "工作" },
        { value: "study", label: "学习" },
        { value: "life", label: "生活" }
      ]
    };
  },
  methods: {
    handleChange() {
      this.$bus.$emit("changeState", this.objectData);
    },
    handleFinish() {
      this.objectData.state = "finish";
      this.$bus.$emit("changeState", this.objectData);
    },
    handleActive() {
      this.objectData.state = "active";
      this.$bus.$emit("changeState", this.objectData);
    },
    handleDelete() {
      this.objectData.state = "delete";
      this.$bus.$emit("changeState", this.objectData);
    }
  },
  beforeDestroy() {
    //this.$root.$bus.$off("changeState");
  }
};
</script>
<style>
.life {
  margin-top: 10px;
  color: blueviolet !important;
}
.work {
  margin-top: 10px;
  color: saddlebrown !important;
}
.study {
  margin-top: 10px;
  color: olivedrab !important;
}

.button-group {
  float: right;
}
.title-button {
  float: right;
}

.timezone {
  text-align: right;
}
.title-active {
  text-align: left;
  font-size: large;
}
.title-finish {
  text-align: left;
  font-size: large;
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
