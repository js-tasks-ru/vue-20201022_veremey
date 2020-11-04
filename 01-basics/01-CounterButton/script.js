import Vue from './vue.esm.browser.js';

const app = new Vue({
  el: '#app',
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    valueUp: function () {
      this.value = this.value + 1;
    },
  },
});
// Рекомендуется использовать МЕТОД в качестве обработчика события

