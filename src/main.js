import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import Layout from './components/Layout.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
    router,
  components:{ Layout },
    template: '<Layout/>',
  render: h => h(Layout)
});
