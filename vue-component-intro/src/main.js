import Vue from "vue";

// GLOBALMENTE 

// Vue.component('rds-component', {
//   data: function () {
//     return data
//   },
//   methods: {
//     incrementar: function () {
//       this.contador++
//     }
//   },
//   template: `
//     <div>
//     <h1>  {{titulo}} </h1>
//     <button @click="incrementar">  Clicado {{ contador }} vezes!</button>
//     </div>
//   `
// })


const rdsComponent = {
  data: function () {
    return {
      titulo: 'Curso',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
    <div>
    <h1>  {{titulo}} </h1>
    <button @click="incrementar">  Clicado {{ contador }} vezes!</button>
    </div>
  `
}


new Vue({
  el: '#app1',
  components: {
    'rds-component': rdsComponent
  }
})
new Vue({
  el: '#app2'
})

