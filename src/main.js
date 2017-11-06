import Vue from "vue";
import router from "./router/index"
import App from "./app.vue"
require("./assets/css/reset.css");
require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import axios from "axios";

import ElementUI from "element-ui";
import "../node_modules/element-ui/lib/theme-default/index.css";
Vue.use(ElementUI);


new Vue({
    el:"#app",
    router,
    render:(h)=>h(App),
})
