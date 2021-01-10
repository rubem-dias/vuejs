Usando "data" como function.

## Globalmente usando o component.

Chamo o metodo, dou um nome qualquer entre () na primeira posicao, e na segunda eu passo os parametros vuejs. Usando o "-" entre a nomenclartura, é necessario
usar aspas envolvendo o nome do componente.

Vue.component('rds-component', {
    data() = {
        return {
            nome: 'Rubem',
            idade: 21,
            contador: 0;
        }
    },
    methods: {
        increment: () = {
            this.contador ++
        }
    },
    template: `
        <div>
        <h1> {{ nome }} </h1>
        <button @click=increment> Clicado {{ contador }} vezes! </button>
        </div>
    `
})

new Vue({
  el: '#app2'
})

## Criando localmente


onst rdsComponent = {
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

