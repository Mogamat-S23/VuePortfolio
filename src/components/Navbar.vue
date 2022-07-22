<template>
  <!-- <nav>
    <div>
    <router-link >Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/Resume"></router-link> |
    <router-link to="/services">Services</router-link> |
    <router-link to="/projects">Projects</router-link> |
    <router-link to="/testimonials"></router-link> |
    <router-link to="/contact">contact</router-link> |



    
    </div>
  </nav> -->
  <nav class="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm bg-light sticky-top" id="navbar">
  <div class="container-fluid">
    <router-link to="/Home" class="navbar-brand" href="#">Mogamat Saleem Ariefdien</router-link>
    <button class="navbar-toggler" type="button"  
      aria-label="Toggle navigation" @click="toggler">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end"  :class="{show:opened}" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a key="#landing" href="#landing" class="nav-link active"> <i class="bi bi-house"></i>Home</a>
        </li>
        <li class="nav-item">
           <a href="#about" class="nav-link active"><i class="bi bi-person-badge"></i>About</a>
        </li>
        <li class="nav-item">
           <a href="#resume" class="nav-link active"><i class="bi bi-person-lines-fill"></i>Resumé</a>
        </li>
        <li class="nav-item">
           <a  href="#skills" class="nav-link active"><i class="bi bi-card-text"></i>Service</a>
        </li>
        <li class="nav-item">
           <a href="#pro" class="nav-link active"><i class="bi bi-image"></i>Projects</a>
        </li>
        <li class="nav-item">
           <a href="#test" class="nav-link active"><i class="bi bi-card-text"></i>Testimonials</a>
        </li>
         <li class="nav-item">
           <a href="#con" class="nav-link active"><i class="bi bi-telephone-forward"></i>contacts</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  data(){
    return{
       opened:false,
    }
   
  },
  methods:{
    toggler(){
      this.opened = !this.opened
    },
    togglerClose(){
      this.opened = this.opened
    }
  }
}
</script>

<style scoped>
 #navbar{
  background-color: #f80d4f !important;
  /* position: sticky !important; */
  /* justify-content: end; */


 }

 #navbar :hover {
  color: #0c195d !important;
 }

 #navbar a :active{
  color:white !important ;
 }
</style>