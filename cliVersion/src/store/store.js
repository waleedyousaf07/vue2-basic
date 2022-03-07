import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Apple', price: 200 },
      { name: 'Mango', price: 300 },
      { name: 'Banana', price: 120 },
      { name: 'Orange', price: 180 },
    ],
  },
  getters: {
    saleProducts: (state) => {
      return state.products.map((product) => ({ name: '**' + product.name + '**', price: product.price / 2 }));
    },
  },
});
