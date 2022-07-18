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
  <nav class="navbar navbar-expand-lg bg-light" id="navbar">
  <div class="container-fluid">
    <router-link to="/Home" class="navbar-brand" href="#">Navbar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/Home" class="nav-link active"> <i class="bi bi-house"></i>Home</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/About" class="nav-link active"><i class="bi bi-person-badge"></i>About</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Resume" class="nav-link active"><i class="bi bi-person-lines-fill"></i>Resumé</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Services" class="nav-link active"><i class="bi bi-card-text"></i>Service</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Services" class="nav-link active"><i class="bi bi-image"></i>Projects</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/Testimonials" class="nav-link active"><i class="bi bi-card-text"></i>Testimonials</router-link>
        </li>
         <li class="nav-item">
           <router-link to="/Contacts" class="nav-link active"><i class="bi bi-telephone-forward"></i>contacts</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
 #navbar{
  background-color: blue !important; 
 }

 #navbar :hover {
  color: white;
 }

 #navbar a :active{
  color: white;
 }
</style>