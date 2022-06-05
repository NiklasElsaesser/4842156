<script>
export default {
  name: 'layout',
  data() {
    return {

    }
  }
}
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
</script>
<template>
  <nav class="navbar is-transparent">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="@/assets/Images/AD2018_DHBW-Stuttgart.jpg" alt="DHBW-Logo" width="125" height="10">
    </a>
    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/2">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <router-link to="/register" class="button is-link">
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