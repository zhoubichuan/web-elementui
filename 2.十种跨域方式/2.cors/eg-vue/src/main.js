import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import Qs from "qs";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
Vue.prototype.axios = axios;
Vue.prototype.qs = Qs;

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
