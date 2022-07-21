<template>
  <div id="resume" class="container">
    <h2 class="section-title text-center text-decoration-underline pt-4">
      Resumé
    </h2>
    <h6 class="text-center">My Journey</h6>
    <div class="row">
      <div
        class="col-md-6"
        v-bind:class="{ active: index }"
        v-for="(Resume, index) in Resume"
        :key="index"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          class="experience-container"
        >
          <h5 class="text-black">{{ Resume.name }}</h5>
          <h3>{{Resume.year}}</h3>
          <i>{{ Resume.info }}</i>
          <ul v-for="(skills, index) in Resume.skills" :key="index">
            <li>{{ skills }}</li>
            <!-- <li>Visual Studio</li>
                    <li>Codpen</li>
                    <li>Photoshop</li> -->
          </ul>
        </div>
        <!-- <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="experience-container"
                >
                  <h5 class="text-black">Work Experience</h5>
                  <h3 class="w-25 text-center" style="background-color: #f80d4f;">2017-2018 </h3>
                  <i
                    >Click Kenilworth Center , Shop Assistant Cashier for 6 months.</i
                  >
                  <ul>
                   
                  </ul>
                </div> -->
        <!-- </div>
              <div class="col-md-6">
                
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="experience-container"
                >
                  <h5 class="text-black">Tertiary Education</h5>
                  <h3 class="w-25 text-center" style="background-color:#f80d4f ;">2022</h3>
                  <i
                    >Currently at Life Choice Coding Acadamy.
                    Tools i use.</i
                  >
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Codpen</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="experience-container"
                >
                  <h3 class="w-25 text-center" style="background-color:  #f80d4f;" >2021</h3>
                  <i
                    >College Of Cape Town. Studied Microsoft IT Academy(MSETA) :Web Development 
                    tools I used</i
                  >
                  <ul>
                    <li>Visual Studio </li>
                    <li>Noepad ++</li>
                    <li>Photoshop</li>
                    
                  </ul>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  class="experience-container"
                >
                  <h5 class="text-black">Secondary Education</h5>
                  <h3 class="w-25 text-center " style="background-color: #f80d4f;">2012-2016</h3>
                  <i
                    >Matriculated Al-Azhar High School.</i
                  >
                  
                </div>
              </div>

            </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    Resume() {
      return this.$store.state.Resume;
    },
  },
};
</script>

<style scoped>
.experience-container {
  border-left: 3px solid #f80d4f;
  padding-left: 20px !important;
  position: relative !important;
}
.experience-container::before {
  position: absolute;
  left: -10px;
  top: 0;
  display: block;
  content: "";
  width: 20px;
  height: 20px;
  border: 3px solid black;
  border-radius: 50%;
  background: #0c195d !important;
  /* background-color: rgb(248, 249, 250); */
}

h2,
h5,
h6 {
  color: #0c195d !important;
  font-size: 2rem;
}

h3 {
  color: white;
  background: #f80d4f;
  /* margin-left: 250px; */
}
i,
li {
  color: #0c195d;
}

li {
  /* justify-content: left; */
  /* padding-right: 75% !important; */
}
ul li {
  text-align: left;
}
</style>