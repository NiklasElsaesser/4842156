<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";

import Cover from "@/components/Cover.vue";
</script>

<template>
<header>


    <div class="wrapper">
      <Cover msg="" />

    </div>
  </header>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      <RouterLink  to="/Aktien" >Aktien</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>
      <RouterLink  to="/Wetter" >Wetter</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <RouterLink  to="/GC" >Group Chat</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    
    <template #heading>
      <RouterLink  to="/Instagram" >Instagram</RouterLink>
    </template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>
      <RouterLink  to="/Spotify" >Spotify</RouterLink>
    </template>
  </WelcomeItem>
</template>

<style scoped>
header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    background-color: lightcoral;
  }
</style>