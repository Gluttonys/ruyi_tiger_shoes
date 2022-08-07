import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import antd from 'ant-design-vue'
import './style/index.less'

const app = createApp(App);

app
  .use(antd)
  .use(createPinia())
  .mount('#app');
