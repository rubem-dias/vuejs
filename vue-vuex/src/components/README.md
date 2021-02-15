## Configurando store.

* npm i vuex.
* crio o arquivo store, digo que quero usar o vuex para gerenciar o estado atraves de Vue.use(Vuex).
* no main.js eu importo o store e a partir disso todos os componentes tem acesso ao store.
* atraves do metodo $store posso acessar.

## Computed

Dentro de computed tem o contador. Lembrando que computed é apenas um getter, ou seja, ele apenas "lê" o que esta sendo definido no escopo.

*   computed: {
        contador() {
        return this.$store.state.contador;
    }


## mapState

Usando mapState dentro da computed pra usar se caso houver muitas propriedades a serem lidas do store.

* Preciso importar o mapState do pacote vuex.

* Chamo o mapState como uma function, dentro dos parametros apenas chamo um array, e dentro do array o nome do state desejado dentro da store.

* posso usar sendo:
    computed: mapState(["contador"]) ou,
    ---------------------------------------
    computed: mapState({
    contador: (state) => state.contador,
  })

  o nome do parametro nao precisa ser igual o state dentro da store

* posso criar um alias atribuindo o nome da propriedade contador dentro do nome que eu quiser.