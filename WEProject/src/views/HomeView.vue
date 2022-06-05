<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <TheWelcome />

    <div class="Home">
      <div class="Wetter">
        <router-link to="/wetter">
          <a class="button is-white is-large">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Wetter</span>
          </a>
        </router-link>
      </div>

      <div class="terms">
        <router-link to="/terms">
          <a class="button is-white is-large">
            <span class="icon">
              <i class="fas fa-cogs"></i>
            </span>
            <span>Disclaimer</span>
          </a>
        </router-link>
      </div>

      <div class="SignOut">
        <router-link to="/">
          <a class="button is-white is-large">
            <span class="icon">
              <i class="fas fa-sign-out-alt"></i>
            </span>
            <span>SignOut</span>
          </a>
        </router-link>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media (max-width: 600px) {
  .Home {
    margin: auto;
    position: relative;
    text-align: center;
    padding-top: 15px;
    
  }
  .Wetter{
    
    padding-top: 30px;
    
  }
  .terms{
    padding-top: 15px;
  }
  .SignOut{
    padding-top: 15px;
  }
}
  @media only screen and (min-width: 600px) {
    .Home {
    position: absolute;
    left: 42%;
    padding-top: 40px;
    text-align: left;
  }
  .p1{
    text-align: left 42%;
  }
  .Wetter{
    padding-top: 30px;
    
  }
  .terms{
    
    padding-top: 15px;
  }
  .SignOut{
    
    padding-top: 15px;
  }
  }
  @media only screen and (min-width: 768px) {
    .Home {
    position: absolute;
    left: 20%;
    padding-top: 40px;
    text-align: center;
  }
  .p1{
    text-align: left 42%;
  }
  .Wetter{
    padding-top: 30px;
    
  }
  .terms{
    
    padding-top: 15px;
  }
  .SignOut{
    
    padding-top: 15px;
  }
  }
  @media only screen and (min-width: 1024px) {
    .Home {
    position: absolute;
    left: 42%;
    padding-top: 40px;
    text-align: left;
  }
  .p1{
    text-align: left 42%;
  }
  .Wetter{
    padding-top: 30px;
    
  }
  .terms{
    
    padding-top: 15px;
  }
  .SignOut{
    
    padding-top: 15px;
  }
  }
  @media only screen and (min-width: 1200px) {
    .Home {
    position: absolute;
    left: 42%;
    padding-top: 40px;
    text-align: left;
  }
  .p1{
    text-align: left 42%;
  }
  .Wetter{
    padding-top: 30px;
    
  }
  .terms{
    
    padding-top: 15px;
  }
  .SignOut{
    
    padding-top: 15px;
  }
  }
</style>
