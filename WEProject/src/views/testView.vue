<template>
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button interaction animation</title>
  <!-- Remix icons -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
  <!-- Link to your stylesheet -->
  <link rel="stylesheet" href="./styles.css">
</head>

<body>

  <button class="button">
    <span class="text">Submit</span>
    <i class="ri-check-line icon"></i>
  </button>
  
</body>
</template>

<script>
export default {
  data () {
    return {}
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: #e2e9fb;
    display: grid;
    place-content: center;
    height: 100vh;
    padding: 55px;
    color: #fff;
}

/* ======================== */

.button {
    position: relative;
    width: 70px;
    height: 30px;
    background-color: #202231;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: width .5s,
        border-radius .5s;
}

.button * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity .25s;
}

.icon {
    opacity: 0;
}

.button:focus {
    width: 30px;
    background-color: #44c08a;
    border-radius: 50%;
}

.button:focus .text {
    opacity: 0;
}

.button:focus .icon {
    opacity: 1;
    transition-delay: .5s;
}
</style>
