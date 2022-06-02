<script setup>
import { RouterLink, RouterView } from "vue-router";
//import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>


  <header>

    <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="./assets/Images/AD2018_DHBW-Stuttgart.jpg" alt="DHBW-Logo" width="125" height="10">
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="/register">
              <span>Register</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
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

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
