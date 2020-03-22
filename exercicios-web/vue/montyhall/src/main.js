import Vue from "vue";
import App from "./App";

new Vue({
  render: h => h(App)
  /*
    el:'#app',
    render(createElement){
        return createElement(App)
    } */
}).$mount("#app");
/* $mount("#app") é equivalente a el:"#app" */
