<template>
  <div class="main-box">
    <materialList />
    <selected-forms />
  </div>
</template>

<script>
import materialList from "./material-list.vue";
import selectedForms from './selected-forms.vue';
export default {
  components: {
    materialList,
    selectedForms
  },
};
</script>

<style lang="scss" scoped>
</style>
