import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    materialMap: new Map(),
    selectedFormList: []
  },
  mutations: {
    setSelectedFormList(state,list){
       state.selectedFormList = list;
    }
  },
  actions: {},
  modules: {},
});
