<script>
export default {
  name: 'homeScreen',
  data() {
    return {
    }
  }
}
</script>


<template>
   <div style="width: 100%;height: 100%" class="columns">
      <div class="column left">
        <p><i>Menu for LogIn</i></p>
      </div>
      <div class="column right">
        
      </div>
    </div>
</template>

<style scoped>
.left {
    height: 100%;
    text-align: center;
}
.right {
    height: 100%;
    text-align: center;
}
.vertline {
  border-left: 6px solid green;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
}
.first-row{font-size:30px}
.second-row{font-size:30px}
div.pos {width:49%; text-align:center; border:2px solid #00f;}
div#abs {position:absolute; bottom:0; left:0;}
div#fix {position:fixed; bottom:0; right:0;}

</style>
