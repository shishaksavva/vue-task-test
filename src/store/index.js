import api from '../../api/products.js';
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    currency: "VGTB",
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    cartPrice(state) {
      return state.cart.reduce((sum, item) => sum + (item.price * item.amount), 0);
    },
    currency(state) {
      return state.currency;
    }
  },
  mutations: {
    addToCart(state, {product, amount}) {
      if(amount != 0) state.cart.push({...product, amount});
    },
  },
  actions: {
    // Этот можно сделать и на  месте использования (компонент List.vue)
    getProductsList(ctx, data) {
      return api.getProductsList();
    },
  },
  modules: {
  }
})
