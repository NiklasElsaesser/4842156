<template>
  <div class="regform">

    <input type="text" name="fieldName" v-validate="'required'" placeholder="name">
    <span>{{ errors.first('fieldName') }}</span>
    <br/>
    <input v-validate="'required|email'" name="email" type="text" placeholder="email">
    <span>{{ errors.first('email') }}</span>
    <br/>
    <input v-validate="'required'" name="password" type="password" :class="{'is-danger': errors.has('password')}" placeholder="Password" ref="password">
    <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
    <br/>
    <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" :class="{'is-danger': errors.has('password_confirmation')}" placeholder="Password, Again" data-vv-as="password">
    <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
    
  </div>
</template>

<script>


  export default {
    name: 'registerScreen',
    data() {
      return {

      }
    }
  }

</script>

<style>
  .regform {
    position: relative;
    padding-top: 40px;
    text-align: center;
  }
</style>
