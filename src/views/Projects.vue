<template>
  <div id="pro" class="container">
    <h2>My Projects</h2>
    <div class="row">
        <!-- <div class="col-4"> -->
            <Projects/>
        <!-- </div> -->
    </div>
  </div>
</template>

<script>
 import Projects from '@/components/projects-card.vue'
export default {
    components: {Projects}
}
</script>

<style scoped>
  h2{
    color: #0c195d;
    text-decoration: underline;
  }

  
</style>