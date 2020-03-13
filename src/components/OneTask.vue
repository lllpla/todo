<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >删除</el-button
      >
    </div>
    <div>{{ createTime }}</div>
  </el-card>
</template>
<script>
export default {
  name: "OneTask",
  props: {
    title: String,
    createTime: String,
    id: Number
  }
};
</script>
