<template>
  <div>
    <h2>Clicado {{ counter }} vezes!</h2>
    <button @click="increment">Increment here!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  }
}
</script>
