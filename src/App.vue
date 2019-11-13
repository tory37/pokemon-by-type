<template>
  <div id="app">
    <div id="nav"><router-link to="/">Home</router-link></div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
body {
  background-color: slategray;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: lightblue;
  text-decoration: none;
}
</style>
