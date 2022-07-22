<template>
<div id="skill">
    <div class="container">
            <h2 class="text-decoration-underline">Services</h2>
            <h6>My Capabilities</h6>
            <div  class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col ">
                <div id="skills" class="card">
                  <img id="image" src="../assets/typing.png" class="card-img-top mx-auto " alt="development image">
                  <div class="card-body">
                    <h3 class="card-title">Development</h3>
                    <p class="card-text">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).Web development can range from developing a simple single static page of plain text to complex web applications and social network services Web developers, do this by using a variety of coding languages.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div id="skills" class="card">
                  <img id="image2" src="../assets/animat-paintbrush-color.gif" class="card-img-top mx-auto rounded-circle" alt="designer image">
                  <div class="card-body">
                    <h3 class="card-title">Design</h3>
                    <p class="card-text">Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization.</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div id="skills" class="card">
                    <div>
                  <img id="image2" src="../assets/fully-responsive.gif" class="card-img-top mx-auto rounded-circle" alt="...">
                  <div class="card-body">
                    <h3 class="card-title">Responsiveness</h3>
                    <p class="card-text">Responsive web design or responsive design is an approach to web design that aims to make web pages render well on a variety of devices and window or screen sizes from minimum to maximum display size to ensure usability and satisfaction.Responsive web design became more important as users of mobile devices.

                    </p>
                  </div>
                </div>
                </div>
                
              </div>
              
            </div>
        </div>

</div>
   
</template>

<script>
export default {

}
</script>

<style scoped>
p{
    color: #f80d4f;
}

h3{
    color:#0c195d;
}

#skills{
    border-top-right-radius: 15%;
    border-bottom-left-radius: 15%;
    border: 2px solid #f80d4f;
    scroll-margin: 130px;
    
}

#skill{
    background-image: url(../assets/High.jpg);
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    
}

#image{
    margin: 12.5%; 
    /* padding-bottom: 2%; */
    padding-right: 5%;
}
#image2{
    /* margin: 12.5%; */
    padding-bottom: 1%;
    padding-right: 5%;
}

h2,h6{
    color: white;
}
</style>