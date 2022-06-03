<script>
export default {
  name: 'layout',
  data() {
    return {

    }
  }
}

</script>
<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="@/assets/Images/AD2018_DHBW-Stuttgart.jpg" alt="DHBW-Logo" width="125" height="10">
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
            <router-link to="/2" class="button is-link">
              Register
            </router-link>
          </p>
          <div class="control">
            <router-link to="/login" class="button is-light">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>



<style>
  .button {
    color: #3273dc;
  }
  
</style>