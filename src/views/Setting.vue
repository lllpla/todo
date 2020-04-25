<template>
  <div class="col-6">
    <q-card style="margin-left:10px;">
      <q-card-section>
        <div class="text-h6">应用设置</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-input outlined v-model="settings.token" label="token" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="settings.apiUrl" label="apiUrl" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="settings.user" label="user" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="settings.repo" label="repo" />
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
  computed: {
    ...mapState({
      settings: state => {
        return state.settings;
      }
    })
  },
  methods: {
    saveSettings() {
      const settings = {
        token: settings.token,
        apiUrl: settings.apiUrl,
        user: settings.user,
        repo: settings.repo
      };
      this.$q.localStorage.set("lee-todo-settings", settings);
      this.$store.commit("initSettings", { settings: settings });
      this.$router.push({
        path: "/now"
      });
    }
  }
};
</script>
