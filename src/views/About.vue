<template>
  <div class="about">
    
    <div id="about" class="card mb-3" style="max-width: 100%;" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../assets/Saleem.jpg" id="me" class="img-fluid rounded-start" alt="me" style="max-height: 100%;">
    </div>
    <div class="col-md-8" id="personal" >
      <div class="card-body" >
        <h2 class="card-title" id="heading">About Me</h2>
        <p class="card-text">I am a person who works hard. I am a patient and trustworthy person. I enjoy meeting new people even though I am a bit nervous when I do so. I love driving around and seeing the scenery. I am a person who likes to help others where I can. I enjoy coding websites and want to be a web developer one day.</p>
     
      </div>
      <div class="col-md-12">
      <div class="card-body" >
        <h2 class="card-title" id="heading">Personal Details</h2>
        <p class="card-text"><ul  style="list-style: none;">
                       <li>Full name: Mogamat Saleem Ariedien</li>
                      <li>
                        Date of birth: 18/03/1998</li>
                      <li>Gender: Male</li>
                      <li>Location: Maneburge</li>
                      <li>Cell Phone number: 0768348979</li>
                      <li>Email Address: saleemariefdien@gmail.com</li>
                      <li>Drivers licence: Yes</li>
                      <li>Willing to Relocate: No</li>
                      <li>GitHub: https://github.com/Mogamat-S23</li>
                      <li>LinkedIn: linkedin.com/in/mogamat-saleem-ariefdien-808966196</li>
                     </ul></p>
     
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-6">
        <h2 id="heading">Technical Skills</h2>
        <ul style="list-style: none;">
          <li>HTML</li>
          <li>CSS</li>
          <li>Photoshop</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div class="col-6">
        <h2 id="heading">Soft Skills</h2>
        <ul style="list-style: none;">
          <li>Communication</li>
          <li>trustworthy</li>
          <li>Team Work</li>
          <li>helpful</li>
          <li>Honesty</li>
        </ul>
      </div>


    </div>

    <div class="row" id="bar">
      <div class="col-10">
        <div>
                    <p class="d-flex justify-content-between">
                      HTML <span>87%</span>
                    </p>
                    <div  class="progress">
                      <div
                        class="progress-bar progress-bar-animated progress-bar-striped " id="progress"
                        role="progressbar"
                        style="width: 87%"
                        aria-valuenow="87"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p class="d-flex justify-content-between">
                      CSS 3 <span>89%</span>
                    </p>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-animated progress-bar-striped" id="progress"
                        role="progressbar"
                        style="width: 90% "
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p class="d-flex justify-content-between">
                      Bootstrap <span>70%</span>
                    </p>
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-animated progress-bar-striped" id="progress"
                        role="progressbar"
                        style="width: 70%"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div>
                    <p class="d-flex justify-content-between">
                      Photoshop <span>91%</span>
                    </p>
                    <div class="progress" >
                      <div
                        class="progress-bar progress-bar-animated progress-bar-striped " id="progress"
                        role="progressbar"
                        style="width: 91%"
                        aria-valuenow="91"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
      </div>
    </div>
    </div>

    
  </div>
</div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}

#progress{
   background-color: #f80d4f; 
    
}

#bar{
  margin-left: 15%;
}

#about{
  border-color: blue;
}



#heading {
  text-decoration: underline !important;
  color: white !important;
}

#personal{
  /* background-image: url(../assets/theview.jpg); */
  /* object-fit: cover; */
  background-repeat: no-repeat !important;
  background-size: cover;
  padding: 5px !important;
  color: white !important;
  
  
}

#about{
  background-image: url(../assets/High.jpg);
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;
}


</style>
