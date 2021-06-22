import Vue from 'vue';
import Vuex from 'vuex';
import { ACTION_TYPES, MUTATION_TYPES } from '@/constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* Initial State */
    productList: [
      { id: 1, name: 'Book', price: 80, isSelected: false },
      { id: 2, name: 'Pencil', price: 15, isSelected: false },
      { id: 3, name: 'Pen', price: 20, isSelected: false },
    ],
  },
  mutations: {
    [MUTATION_TYPES.ADD_PRODUCT](state: any, product: any) {
      /* ES6-feature - Spread Operator */
      state.productList = [...state.productList, product];
    },
  },
  getters: {
    /* ES6-feature - Arrow Function */
    getProductList: (state: any) => state.productList,
  },
  actions: {
    [ACTION_TYPES.ADD_PRODUCT]({ commit }, product) {
      commit(MUTATION_TYPES.ADD_PRODUCT, product);
    },
  },
});
