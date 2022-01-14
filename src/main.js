import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import onProfileStateChange from "./onProfileStateChange";

Vue.config.productionTip = false;

onProfileStateChange(router => {
  console.log("new Vue", router, new Date());

  new Vue({
    store,
    router,
    render: h => h(App),
  }).$mount("#app");
});
