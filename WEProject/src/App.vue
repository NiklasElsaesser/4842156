<script>
import { RouterLink, RouterView } from "vue-router";
import Layout from "@/components/layout.vue";
export default {
  name: 'app',
  components: { Layout }
}
</script>

<template>
<div id="app">
    <Layout />
    <router-view></router-view>
  </div>
</template>

<style>

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;

  background-color: rgb(255, 255, 255);
}

@media (min-width: 1024px) {
  /*body {
    display: flex;
    place-items: center;
  }
  */

  #app {
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
