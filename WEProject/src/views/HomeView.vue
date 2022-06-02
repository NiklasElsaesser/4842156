<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />
    <button id="1" class="button is-link is-inverted is-medium " ><RouterLink  to="/Wetter" >Wetter</RouterLink></button>
    <button id="2" class="button is-link is-inverted is-medium "><RouterLink  to="/test" >Testing</RouterLink></button>
    <button id="2" class="button is-link is-inverted is-medium "><RouterLink  to="/GC" >Group Chat</RouterLink></button>
  </main>
</template>
