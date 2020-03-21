<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-icon large>event</v-icon>
        待办任务列表
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <Main />
    </v-content>
  </v-app>
</template>

<script>
import Main from "./components/Main";

export default {
  name: "App",

  components: {
    Main
  },

  data: () => ({
    //
  })
};
</script>
