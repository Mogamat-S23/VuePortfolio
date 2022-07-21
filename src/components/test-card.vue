<template>
  <!-- <div v-if="testimonials" class="container"> -->
  <div v-for="test in testimonials" class="card py-3 m-3 mx-auto">
    <div class="row">
      <div class="col-6 mx-auto">
        <img class="img-fluid" :src="test.image" alt="" id="image" />
      </div>
      <div class="col-6 my-auto text-start">
        <h2>{{ test.name }} {{ test.surname }}</h2>
        <p>{{ test.about }}</p>
        <br />
        <h4>~ {{ test.title }}</h4>
      </div>
    </div>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
};
</script>

<style scoped>
.card {
  width: 550px;
    border-top-right-radius: 15%;
    border-bottom-left-radius: 15%;
    border: 2px solid #0c195d ;
    
}
#image {
  width: 200px;
  
}

p{
  color: #0c195d !important;
    
}

h2,h4{
   color:  #f80d4f;
}
</style>