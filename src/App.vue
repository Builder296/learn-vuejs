<template>
  <div id="app">
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">Home</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
