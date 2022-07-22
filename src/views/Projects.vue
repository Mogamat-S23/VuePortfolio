<template>
  <div id="pro" class="container">
    <h2>My Projects</h2>
    <div class="row">
        <!-- <div class="col-4"> -->
            <Projects/>
        <!-- </div> -->
        <Card2 />
    </div>
  </div>
</template>

<script>
 import Projects from '@/components/projects-card.vue'
import Card2 from '@/components/card2.vue'
export default {
    components: {Projects, Card2}
}
</script>

<style scoped>
  h2{
    color: #0c195d;
    text-decoration: underline;
  }

#pro{
    scroll-margin: 100px;
}
  
</style>