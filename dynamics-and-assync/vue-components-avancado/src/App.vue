<template>
  <div id="app">
    <h1>Vue js</h1>
    <div>
      <Post>
        <h2>Usando slot</h2>
        <h1>Slot com H1</h1>
      </Post>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";

export default {
  components: {
    Post,
  },
};
</script>
