<template>
  <div class="LogIn">
      <div class="loginform">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
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
            <input class="input" type="password" placeholder="Password">
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
      <div class="su">
        <h1>You don´t have an account yet?</h1>
          <div class="su-item">
            <router-link to="/register">
              <a class="button is-white is-large">
                <span class="icon">
                  <i class="fas fa-user-plus"></i>
                </span>
                <span class="test">Register here!</span>
              </a>
            </router-link>
          </div>
      </div>
  </div>    
</template>

<script>
export default {
  name: 'homeScreen',
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  
   @media only screen and (max-width: 600px) {
    .Login {
      position: relative;
      text-align: center;
      padding-top: 15px;
    }
    .filler {
      position: relative;
      padding-top: 10px;
      text-align: center;
    }
    .loginform {
      position: relative;
      text-align: center;
      width: 80%;
      margin-left: 10%;
    }
    .field {
      position: relative;
      text-align: center;
    }
    .su {
    padding-top: 40px;
    text-align: center;
    }
    .su-item {
      position: relative;
      padding-top: 15px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 600px) {
    .Login {
      position: relative;
      text-align: center;
      padding-top: 15px;
    }
    .filler {
      position: relative;
      padding-top: 10px;
      text-align: center;
    }
    .loginform {
      position: relative;
      text-align: center;
      width: 90%;
      margin-left: 5%;
    }
    .field {
      position: relative;
      text-align: center;
    }
    .su {
    padding-top: 40px;
    text-align: center;
    }
    .su-item {
      position: relative;
      padding-top: 15px;
      text-align: center;
    }
  }
  @media only screen and (min-width: 768px) {
    .Login {
      position: relative;
      text-align: center;
      padding-top: 15px;
    }
    .filler {
      position: relative;
      padding-top: 5px;
      text-align: center;
    }
    .loginform {
      position: relative;
      text-align: center;
      width: 80%;
      margin-left: 10%;
    }
    .field {
      position: relative;
      text-align: center;
    }
    .su {
    padding-top: 5px;
    text-align: center;
    }
    .su-item {
      position: relative;
      padding-top: 5px;
      text-align: center;
    }
  } 
  @media only screen and (min-width: 1024px) {
    .Login {
      position: relative;
      text-align: center;
      padding-top: 15px;
    }
    .loginform{

    }
    .filler {
      position: relative;
      padding-top: 30px;
      text-align: center;
    }
    .loginform {
      position: relative;
      text-align: center;
      width: 80%;
      margin-left: 10%;
    }
    .field {
      position: relative;
      text-align: center;
    }
    .su {
    padding-top: 40px;
    text-align: center;
    }
    .su-item {
      position: relative;
      padding-top: 15px;
      text-align: center;
    }
  } 
  @media only screen and (min-width: 1200px) {
    .Login {
      position: relative;
      text-align: center;
      padding-top: 15px;
    }
    .filler {
      position: relative;
      padding-top: 50px;
      text-align: center;
    }
    .loginform {
      position: relative;
      text-align: center;
      width: 80%;
      margin-left: 10%;
      padding-top: 30px;
    }
    .field {
      position: relative;
      text-align: center;
    }
    .su {
    padding-top: 40px;
    text-align: center;
    }
    .su-item {
      position: relative;
      padding-top: 15px;
      text-align: center;
    }
  }  
  
</style>
