<script>
export default {
  name: 'regisgter',
  data() {
    return {

    }
  }
}
</script>



<template>
  <div class="rg">
    <div style="width: 100%;height: 100%">
    <div class="BulmaRegForm">
      <div class="field">
        <label class="label">Name</label>
        <div class="control has-icons-left">
            <input class="input" v-model="name" type="text" placeholder="Name input">
            <span class="icon is-small is-left">
              <i class="fas fa-signature"></i>
            </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" v-model="email" type="text" placeholder="Email input">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
                <i class="fas fa-exclamation-triangle"></i>
              </span>
          </div>
            <!--<p class="help is-danger">This email is invalid</p>-->
      </div>

      <div class="field">
        <label class="label">Password</label>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input i" v-model="password" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
            </p>
          </div>  
      </div>

      <div class="field">
        <label class="label">Confim Password</label>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" v-model="cpassword" type="password" placeholder="Password">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"></i>
                </span>
            </p>
          </div>  
      </div>

      <div class="field">
        <label class="label">Birthday</label>
        <div class="control">
          <div class="select">
            <select v-model="birthday">
              <option>Select</option>
              <option>2001</option>
              <option>2000</option>
              <option>1999</option>
              <option>1998</option>
              <option>1997</option>
              <option>1996</option>
              <option>1995</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox">
              I agree to the <a href="/terms">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">´<router-link to="/2" class="button is-link">
            Submit
          </router-link>´
        </div>
        <div class="control">
          <router-link to="/" class="button is-light">
            Cancel
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>