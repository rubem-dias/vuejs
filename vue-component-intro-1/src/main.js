import Vue from 'vue';

import App from './components/App.vue';
import AppCounter from './components/AppCounter.vue';
import ShowName from './components/ShowName.vue';

Vue.component('app-counter', AppCounter)
Vue.component('app-name', ShowName)

new Vue({
  el: "#app",
  render: h => h(App)
})
