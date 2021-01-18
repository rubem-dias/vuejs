<template>
  <div>
    <h2>Nome atualizado: {{ name }}</h2>
    <input type="text" @keyup.enter="updateName" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Rubem",
      age: 21,
    };
  },
  methods: {
    updateName(e) {
      this.name = e.target.value;
    },
  },
};
</script>
