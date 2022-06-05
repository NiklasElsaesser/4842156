<script>
export default {
  name: 'terms',
  data() {
    return {

    }
  }
}
</script>



<template>
  <div class="terms">
    <h1>Niklas bekommt eine gute Note ;)</h1>
    <br>
    <h3>Da ich in "Vue-Vite" programmiert und zu spät gemerkt habe dass die Multi-User Auth nur mit "Vue-Cli" funktioniert, findet keine registrierung statt.</h3>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.terms{
    text-align: center;
    padding-top: 15px;
}

h1 {
  font-weight: 500;
}
</style>