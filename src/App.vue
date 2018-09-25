<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato');

  body {
    // background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef 25%, #ffffff 50%);
    // background: url('https://github.com/AjlaC/portfolio/blob/master/ajlac2.png?raw=true');
    background-size: 100%;
    // background: linear-gradient(90deg, rgba(0,0,0,0.87) 50%, #F8F9FB 50%);
  }

  .gradient-button {
    background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef);
    border-radius: 100px;
    display: inline-block;
    padding: 1px;
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.87);
    transition: all ease-in 0.2s;
    &:hover {
      cursor: pointer;
    }
  }

  .gradient-button span {
    background: #fff;
    display: block;
    border-radius: 80px;
    padding: 0 30px;
    height: 38px;
    line-height: 38px;
    &:hover {
      background: rgba(255, 255, 255, 0.93)
    }
  }

  .container {
    text-align: center;
    a {
      &:hover {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.56);
      }
    }
  }

  #app {
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h1,
  h2 {
    font-weight: normal;
  }
</style>