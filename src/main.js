import { app } from './vant'
import router from './router'
import 'vant/lib/index.css';
import VueWechatTitle from 'vue-wechat-title'
import '@/config/rem.js';
// import '@/style/index.scss'


app.use(router).use(VueWechatTitle).mount('#app');
