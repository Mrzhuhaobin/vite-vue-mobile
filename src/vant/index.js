import { Tabbar, TabbarItem, Button, Tab, Tabs, Image as VanImage, Lazyload } from 'vant';
import { createApp } from 'vue';
import App from '../App.vue';

export const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);
app.use(Tab);
app.use(Tabs);
app.use(VanImage);
app.use(Lazyload);
