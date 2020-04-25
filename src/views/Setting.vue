<template>
  <div class="col-6">
    <q-card style="margin-left:10px;">
      <q-card-section>
        <div class="text-h6">应用设置</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-input outlined v-model="token" label="token" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="apiUrl" label="apiUrl" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="user" label="user" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="repo" label="repo" />
      </q-card-section>
      <q-card-section>
        <q-btn class="full-width" @click="saveSettings" color="primary"
          >确定</q-btn
        >
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "now",
  data() {
    return {
      apiUrl: "",
      token: "",
      user: "",
      repo: ""
    };
  },
  computed: {
    ...mapState({
      settings: state => {
        return state.settings;
      }
    })
  },
  mounted() {
    this.apiUrl = this.settings.apiUrl;
    this.token = this.settings.token;
    this.user = this.settings.user;
    this.repo = this.settings.repo;
  },
  methods: {
    saveSettings() {
      const settings = {
        token: this.token,
        apiUrl: this.apiUrl,
        user: this.user,
        repo: this.repo
      };
      this.$q.localStorage.set("lee-todo-settings", settings);
      this.$store.commit("initSettings", { settings: settings });
      this.$store.dispatch("init");
      this.$router.push({
        path: "/now"
      });
    }
  }
};
</script>
