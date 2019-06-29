<template>
  <section id="main">
    <div class="logo">
      <img src="logo.png">
    </div>

    <h1>Административная панель</h1>
    <h2>(управление товарами)</h2>

    <div class="center">
      <router-view></router-view>
    </div>


  </section>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style lang="scss">
  #main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .logo {
      width:100%;
    }
    h1 {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
    .center {
      width: 1200px;
      max-width: 1200px;
      @media (max-width: 1200px) {
        & {
          width:100%;
        }
      }
    }
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
