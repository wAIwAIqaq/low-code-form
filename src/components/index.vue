<template>
  <div>
    <div class="header">生成表单</div>
    <div class="main">
      <main-box></main-box>
    </div>
  </div>
</template>

<script>
// import Content from "./content.vue";
import MainBox from './main.vue';
export default {
  components: {
    MainBox
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    toggleDrawer() {
      this.$refs["drawer"].toggleDrawer();
    },
  },
};
</script>

<style lang="scss" scoped></style>
