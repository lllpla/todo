<template>
  <div class="col-6">
    <q-card style="margin-left:10px;">
      <q-card-section>
        <div class="text-h6">应用设置</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="text-subtitle2 text-warning">
          注意：
          本程序的所有数据只会保存在您设置的代码仓库中，以下设置信息只会保存在您当前的浏览器localStorage中，不会进行上传
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <span>代码仓库:</span>
        <q-radio
          keep-color
          v-model="gitType"
          val="github"
          label="github"
          color="blue"
          @input="apiUrl = 'https://api.github.com'"
        />
        <q-radio
          keep-color
          v-model="gitType"
          val="gitee"
          label="gitee"
          color="orange"
          @input="apiUrl = 'https://gitee.com/api/v5'"
        />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="token" label="token" />
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="apiUrl" disabled label="apiUrl" />
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
      repo: "",
      gitType: "github"
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
    this.gitType = this.settings.gitType;
  },
  methods: {
    saveSettings() {
      const settings = {
        token: this.token,
        apiUrl: this.apiUrl,
        user: this.user,
        repo: this.repo,
        gitType: this.gitType
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
