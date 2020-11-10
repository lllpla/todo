<template>
  <q-input
    dense
    outlined
    v-model="searchText"
    @input="commitSearchText"
    input-class="text-right"
    class="q-ml-md"
  >
    <template v-slot:append>
      <q-icon v-if="searchText === ''" name="search" />
      <q-icon
        v-else
        name="clear"
        class="cursor-pointer"
        @click="
          searchText = '';
          commitSearchText();
        "
      />
    </template>
  </q-input>
</template>
<script>
export default {
  name: "SearchBar",
  data() {
    return { searchText: "" };
  },
  methods: {
    commitSearchText() {
      this.$store.commit("setSearchText", { searchText: this.searchText });
    }
  }
};
</script>
