<template>
  <NavBar />
  <router-view />
  <footer1 />
</template>

<script>
import NavBar from "./components/Navbar.vue";
import footer1 from "./components/Footer.vue";

export default {
  components: { NavBar, footer1 },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
  background-color: blue;
}

nav a {
  font-weight: bold;
  color: white;
}

nav a.router-link-exact-active {
  color: #42b983;
}

nav :hover {
  color: black;
}
</style>
