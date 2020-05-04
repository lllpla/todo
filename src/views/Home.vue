<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  mounted() {
    this.$router.push({ name: "now" });
  }
};
</script>
