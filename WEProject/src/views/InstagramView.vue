<script>
export default {
  name: 'logdhomescreen',
  data() {
    return {
    }
  }
}
</script>


<template>
  <div class="Menu">
        <p><i>Menu for Home</i></p>
    <div class="Profile">
      <router-link to="/profile">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
          <span>Profile</span>
        </a>
      </router-link>
    </div>

    <div class="Inbox">
      <router-link to="Inbox">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="far fa-bell"></i>
          </span>
          <span>Inbox</span>
        </a>
      </router-link>
    </div>

    <div class="NewProject">
      <router-link to="/newProject">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="fas fa-folder-plus"></i>
          </span>
          <span>NewProject</span>
        </a>
      </router-link>
    </div>

    <div class="MyProjects">
      <router-link to="/myProjects">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="fas fa-folder-open"></i>
          </span>
          <span>MyProjects</span>
        </a>
      </router-link>
    </div>

    <div class="Upcoming">
      <router-link to="/upcoming">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="fas fa-calendar-week"></i>
          </span>
          <span>Upcoming</span>
        </a>
      </router-link>
    </div>

    

    <div class="Settings">
      <router-link to="/settings">
        <a class="button is-white is-large">
          <span class="icon">
            <i class="fas fa-cogs"></i>
          </span>
          <span>Settings</span>
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
</template>

<style scoped>
.Menu {
    position: absolute;
    left: 43%;
    padding-top: 40px;
    text-align: left;
  }
  .Profile{
    
    padding-top: 30px;
    
  }
  .Inbox{
    
    padding-top: 15px;
  }
  .Upcoming{
    
    padding-top: 15px;
  }
  .NewProject{
    
    padding-top: 15px;
  }
  .MyProjects{
    
    padding-top: 15px;
  }
  .Settings{
    
    padding-top: 15px;
  }
  .SignOut{
    
    padding-top: 15px;
  }
  

</style>
