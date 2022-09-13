<template >
  <NavBar />
  <home/> 
 
   <!-- <br> -->
   <about/>
   <br>
   <br>
   <br>
   <br>
   <resume/>
   <br>
   <br>
   <br>
   <br>
   <skills/>
<br>
   <br>
   <br>
   <br>

   <Projects/>
   <br>
   <br>
   <br>
   <br>
   <testimonials />
   <contact/>
  <footer1 />
</template>

<script>
import NavBar from "./components/Navbar.vue";
import footer1 from "./components/Footer.vue";
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Testimonials from './views/Testimonials.vue';
import Projects from './views/Projects.vue'
import Resume from './views/Resume.vue'
import Home from './views/Home.vue'
import Skills from './views/Skills.vue'

export default {
  components: { NavBar, footer1, About , Contact, Testimonials, Projects,Resume,Home, Skills},
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
  /* background-color: blue; */
  position: sticky !important;
}

nav a {
  font-weight: bold;
  color: white !important;
}

nav a.router-link-exact-active {
  color: #0c195d !important;

}

/* nav :hover {
  color: ;
} */

html {
  overflow-x: hidden;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* background-color: rgba(0, 255, 0, 0.3); */
}
</style>
