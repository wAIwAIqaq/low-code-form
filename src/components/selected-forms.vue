<template>
  <draggable
    class="selected-forms-box"
    :list="selectedFormList"
    :group="'materails'"
  >
    <el-form>
      <component
        :is="name"
        v-for="({ name, id }, index) in selectedFormList"
        :key="id"
      ></component>
    </el-form>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import MText from "./materials/text/index.vue";
import MRadio from "./materials/radio/index.vue";
export default {
  components: {
    draggable,
    MText,
    MRadio,
  },
  data() {
    return {
      selectedFormList: [],
    };
  },
  methods: {
    handleAddCom({ index, on = {}, props = { materitalObj: { name: "", id: 0 } } }) {
      const {
        materitalObj: { id, name },
      } = props;
      this.$nextTick(() => {
        selectedFormList.push(materitalObj);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
