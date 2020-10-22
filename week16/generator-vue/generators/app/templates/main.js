import Vue from "vue";
import App from "./HelloWorld.vue";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  }
});