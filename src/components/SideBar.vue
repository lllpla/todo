<template>
  <q-drawer
    v-model="left"
    side="left"
    :width="200"
    :breakpoint="500"
    show-if-above
    :mini="mini"
  >
    <!-- drawer content -->
    <q-list class="rounded-borders text-black" style="margin-top:100px">
      <q-item
        to="/now"
        clickable
        v-ripple
        :active="link === 'now'"
        @click="link = 'now'"
        class="menu-node"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon rounded name="alarm"></q-icon>
        </q-item-section>
        <q-item-section>
          进行中
        </q-item-section>
      </q-item>
      <q-item
        to="/finish"
        clickable
        v-ripple
        :active="link === 'finish'"
        @click="link = 'finish'"
        class="menu-node"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon rounded name="beenhere"></q-icon>
        </q-item-section>
        <q-item-section>
          已完成
        </q-item-section>
      </q-item>
      <q-item
        to="/store"
        clickable
        v-ripple
        :active="link === 'store'"
        @click="link = 'store'"
        class="menu-node"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon rounded name="archive"></q-icon>
        </q-item-section>
        <q-item-section>
          已归档
        </q-item-section>
      </q-item>
      <q-item
        to="/setting"
        clickable
        v-ripple
        :active="link === 'setting'"
        @click="link = 'setting'"
        class="menu-node"
        active-class="my-menu-link"
      >
        <q-item-section avatar>
          <q-icon rounded name="settings"></q-icon>
        </q-item-section>
        <q-item-section>
          设置
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      link: "now",
      mini: false,
      left: true
    };
  },
  methods: {
    showMenu() {
      if (this.left) {
        this.mini = !this.mini;
      } else {
        this.left = !this.left;
      }
    }
  }
};
</script>
<style lang="sass">
.my-menu-link
  color: white
  background: #feefc3
  font-size: 0.875em
.menu-node
  font-size: 0.875em
  border-radius: 0 25px 25px 0;
</style>
