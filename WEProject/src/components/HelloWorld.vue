<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <!-- <h1 class="green">{{ msg }}</h1> -->
    <h1>
      Web Engineering Projekt
    </h1>
    <h2>
      Klausurarbeit
    </h2>
    <h3>
      von
    </h3>
    <h2>
      Niklas Elsässer
    </h2>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h2{
  font-weight: bold;
  text-align: center;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
