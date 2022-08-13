<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
import MainPage from "./components/index.vue";

export default {
  name: "app",
  components: {
    MainPage,
  },
};
</script>

<style>
@import url(./assets/myUI.scss);
</style>
