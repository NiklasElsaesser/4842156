<script setup>
import Cover from "@/components/Cover.vue";
</script>

<template>
<header>


    <div class="wrapper">
      <Cover class="cover" msg="" />

    </div>
  </header>
  
</template>




<style scoped>
header .wrapper {
    display: flex;
    place-items: flex-start;
    align-content: center;
    padding-left:10%;
  }
.cover{
  margin: auto;
  padding-top: 15px;
  width: 50%;
  text-align: center;
}
</style>