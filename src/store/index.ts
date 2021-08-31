import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTheme: "light",
  },
  mutations: {
    SET_CURRENT_THEME(state, payload) {
      state.currentTheme = payload;
    },
  },
  actions: {
    CHANGE_SITE_THEME({ commit }, payload) {
      commit("SET_CURRENT_THEME", payload);
    },
  },
  getters: {
    currentTheme(state) {
      return state.currentTheme;
    },
  },
});
