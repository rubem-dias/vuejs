import Vue from 'vue'

import App from './App.vue'
import AppCounter from './AppCounter.vue'

Vue.component('app-counter', AppCounter)

new Vue({
    el: '#app',
    render: h => h(App)
})