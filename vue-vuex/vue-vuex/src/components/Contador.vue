<template>
  <div>
    <h2 class="h2.font-weight-light">Contador: {{ contador }}</h2>
    <h4 class="h2.font-weight-light">
      Contador Alias: {{ contadorAlias }} {{ nome }}
    </h4>
    <button class="btn btn-lg btn-danger" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
/**/
import { mapState } from "vuex";

export default {
  //computed: mapState(["contador"]),
  computed: {
    ...mapState({
      contador: (estado) => estado.contador,
      nome: (estado) => estado.name,
      contadorAlias: "contador",
    }),
  },
  methods: {
    decrementar() {
      this.$store.state.contador--;
    },
    incrementar() {
      this.$store.state.contador++;
    },
  },
};
</script>