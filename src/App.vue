<template>
  <div id="app">
    <github-card />
  </div>
</template>

<script>
import GithubCard from '@/components/github-card.vue';

export default {
  components: {
    GithubCard,
  },
  data() {
    return {
      message: 'Hello World',
    };
  },
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  color: blue;
}
</style>