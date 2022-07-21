<template>
  <div  v-for="test in projects" class="card py-3 m-3 mx-auto">
    <div class="row">
      <div class="col-6 mx-auto">
        <img class="img-fluid" :src="test.img" alt="" id="image" />
        </div>
        <div class="col-6 my-auto text-start">
        <h2 style="color:#0c195d;">{{ test.name }}</h2>
        <h4>~ {{test.category}}</h4>
        <a class="btn" target="_blank" :href="test.github"
          ><i class="bi bi-github"></i
        ></a>
        <a class="btn" target="_blank" :href="test.live"
          ><i class="bi bi-link"></i
        ></a>

        <br />
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style scoped>
.card {
  width: 550px;
  display: flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
     border-top-right-radius: 15%;
    border-bottom-left-radius: 15%;
    border: 2px solid #0c195d ;
    min-height: 250px;
    align-items: center;
}

.card:hover {
    border: #f80d4f 3px solid;
    background-color: #0c195d;
    transition: all 1s ease;
    
}


#image {
  width: 200px;
}

.btn {
  background-color: #f80d4f;
  padding: 7px 10px 7px 10px;
  font-size: 1em;
  border-radius: 10%;
  
  margin: 10%;
}
.btn:hover {
  background-color: #0c195d;
  border: 5px solid white;
  border-collapse: separate;
}


h4{
    color: #f80d4f;
}

h2 :hover{
    transition:  all 1s ease;
    color: white; 
}


</style>