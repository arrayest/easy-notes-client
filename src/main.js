import Vue from 'vue'
import antd from 'ant-design-vue';
import { Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import App from './App.vue'
import router from "./router"
import {postRequest} from "./utils/request"
import {postKeyValueRequest} from "./utils/request"
import {putRequest} from "./utils/request"
import {deleteRequest} from "./utils/request"
import {getRequest} from "./utils/request"
import db from "./utils/sessionStorage"
import * as common from "./utils/common"

Vue.config.productionTip = false

Vue.prototype.db = db
Vue.prototype.common = common
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false;
Vue.use(antd);

// 图标库
import iconFront from './assets/iconfonts/iconfont.js'
const myIcon = Icon.createFromIconfontCN({
  scriptUrl: iconFront
})
Vue.component('my-icon', myIcon)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')