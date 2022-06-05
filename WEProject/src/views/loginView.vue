<script>
export default {
  name: 'login',
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="LogIn">
    <div class="LIform">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
          <input class="input" v-model="email" type="text" placeholder="E-Mail">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input" v-model="password" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <router-link to="/2" class="button is-link">
              Login
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>



<style>

@media only screen and (max-width: 600px) {
  .filler {
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .LIform {
    position: relative;
    padding-top: 40px;
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 600px) {
  .filler {
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .LIform {
    position: relative;
    padding-top: 40px;
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 768px) {
  .filler {
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .LIform {
    position: relative;
    padding-top: 40px;
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 992px) {
  .filler {
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .LIform {
    position: relative;
    padding-top: 40px;
    left: 20%;
    width: 60%;
  }
}
@media only screen and (min-width: 1200px) {
  .filler {
    position: relative;
    padding-top: 30px;
    text-align: center;
  }
  .LIform {
    position: relative;
    padding-top: 40px;
    left: 20%;
    width: 60%;
  }
}
</style>
