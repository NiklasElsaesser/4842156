<script setup>
import WelcomeItem from "./WelcomeItem.vue";

import Cover from "@/components/Cover.vue";
</script>

<template>
<header>


    <div class="wrapper">
      <Cover msg="" />

    </div>
  </header>
<!--
  <WelcomeItem>
    <template #heading>
      <RouterLink  to="/Wetter" >Wetter</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>
      <RouterLink  to="/GC" >Group Chat</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>
      <RouterLink  to="/test" >Testing</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #heading>
      <RouterLink  to="/Wetter" >Wetter</RouterLink>
    </template>
  </WelcomeItem>
-->
  
</template>




<style scoped>
header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    background-color: lightcoral;
    padding-left: 30%;
  }
</style>