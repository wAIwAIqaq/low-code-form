<template>
  <div class="marterial-box">
    <el-form class="material-form">
      <draggable
        :list="materialList"
        :group="{ name: 'materails', pull: 'clone', put: false }"
        :clone="handleCloneDog"
      >
        <!-- <m-text />
        <m-radio /> -->
        <component
          v-for="(item, index) in materialList"
          :key="index"
          :is="item.name"
        ></component>
      </draggable>
    </el-form>
  </div>
</template>

<script>
// import { materialList } from "./shared";
import draggable from "vuedraggable";
import MText from "./materials/text/index.vue";
import MRadio from "./materials/radio/index.vue";
export default {
  components: {
    MText,
    MRadio,
    draggable,
  },
  data() {
    return {
      materialList: [
        {
          id: Math.random(),
          name: "m-text",
        },
        {
          id: Math.random(),
          name: "m-radio",
        },
      ]
    };
  },
  methods: {
    handleCloneDog(item) {
      console.log(item);
      return {
        ...item,
        id: Math.random(),
      };
    },
  },
};
</script>

<style scoped>
::v-deep .material-form .el-form-item {
  border: 1px dashed #c0c4cc;
  padding: 1rem;
  border-radius: 0.25rem;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 0 5rem 1fr 0;
}
::v-deep.material-form .el-form-item:hover {
  background-color: #f2f5fe;
  border-color: #409eff;
  transition: all 0.3s ease-in-out;
}
</style>
