<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>


  <header>
    <router-link to="/">
      <img src="./assets/Images/AD2018_DHBW-Stuttgart.jpg"
      width="125"
      height="75"
      />
    </router-link>
  </header>

  

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;

  background-color: rgb(255, 255, 255);
}

a,
.green {
  text-decoration: none;
  color: rgb(0, 0, 0);
  transition: 0.4s;
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
    background-color: lightgrey;
  }

  header {
    display: flex;
    place-items: left;
    padding-right: calc(var(--section-gap) / 2);
    background-color: lightblue;
  }

  

  .logo {
    margin: 0 2rem 0 0;
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
