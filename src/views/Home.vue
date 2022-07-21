<template>
     <div id="landing">
        <h1 class="front"> Mogamat Saleem</h1>
    <!-- <h2 class="front1"> Aspiring Web Developer</h2> --> 
    <span v-for="(text, idx) in message" :key="idx" :style="`--i: ${idx};`" class="text">{{text}}</span>
     
     </div>
     
    
        
    
</template>

<script>
// @ is an alias to /src
export default {
   data() {
    return {
      message: 'Aspiring Web Developer', 
      
    };
  },

}
</script>

<style scoped>

#landing {
  color: white;
  background-image: url(../assets/retro1.jpg);
  width: 100%;
  /* object-fit: contain; */
   background-size: cover; 
  height: 750px;
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center;
  /* background: 
    linear-gradient(rgba(0, 0, 0, 0.7),black), */
  
  
  
}

 .front {
  padding-top: 16%;
  font-size: 66px;
  font-family: fantasy;
}
/* .front1 {
  
  font-size: 50px;
}  */
.text {
  display: inline-flex; 
  min-width: 20px;
  margin: 0 5px;
  animation: animateText 4s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
  font-family: fantasy;
  font-size: 65px;
  margin-top: 3%;
}

@keyframes animateText {
  0% {
    transform: translateY(0px);
  }
  10% {
    transform: translateY(-100%);
  }
  30% {
    transform: translateY(100%);
  }
  50%, 100% {
    transform: translateY(0px);
  }
}







</style>
