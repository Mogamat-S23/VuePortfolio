<template>
  <div  id="bgform" class="text-center text-white  py-5">
    <h2 class="pt-4" data-aos="fade-down" data-aos-duration="3000">
      Get in Touch
    </h2>
    <h6>Feel free to contact me</h6>

    <div  id="con" class="row justify-content-center">
      <div class="col-md-3 col-sm-6">
        <div class="contact">
          <i class="bi bi-geo-alt"></i>
          <h4>Address</h4>
          <p>Cape Town</p>
          <p>South Africa</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="contact">
          <i class="bi bi-phone"></i>
          <h4>Contact</h4>
          <p>My Contact</p>
          <p>+27 76 834 8979</p>
        </div>
      </div>
      <div class="col-md-3 col-sm-6">
        <div class="contact">
          <i class="bi bi-envelope"></i>
          <h4>Email</h4>
          <p>Drop me an Email</p>
          <p>saleemariefdien@gmail.com</p>
        </div>
      </div>
    </div>
    <br />

    <form
      id="form"
      class=" container mx-auto w-50"
      action="https://formspree.io/f/xknykjpb"
      method="post"
      target="_blank"
    >
      <div class="row pb-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="name"
            placeholder="First name"
            aria-label="First name"
            required
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="surname"
            placeholder="Last name"
            aria-label="Last name"
            required
          />
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="email"
            placeholder="Email"
            aria-label="Email"
            required
          />
        </div>
        <div class="col-md-6">
          <input
            type="text"
            class="form-control"
            name="subject"
            placeholder="Subject"
            aria-label="Subject"
            
          />
        </div>
      </div>
      <div class="row pb-5">
        <div class="col-md-12">
          <div class="form-floating">
            <textarea
              class="form-control"
              name="message"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
            ></textarea>
            <label class="text-dark" for="floatingTextarea2">How Can I Help ?</label>
          </div>
        </div>
      </div>

      <div class="row my-2">
        <label class="col-md-2 col-form-label-lg label-to-right"></label>
        <div class="col-md-8">
          <input
            type="submit"
            value="Submit"
            class="btn btn-outline-light "
            
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  /* padding: 0; */
  margin: 0;
}


.contact > i {
  background-color:#f80d4f;
  padding: 5px 10px 5px 10px;
  font-size: 3em;
  border-radius: 50%;
}
.contact > i:hover {
  background-color: #0c195d;
  border: 5px solid white;
  border-collapse: separate;
}

#bgform{
   background: #0c195d;

}

input[type=submit]:hover{
background-color: #f80d4f;
color: white;
}

#con{
  scroll-margin: 185px;
}
h2{
  text-decoration: underline;
}
/* @media screen and (max-width: 425px) {
  .label-to-right {
    margin-right: 50%;
  }
  #name {
    width: 300px;
  }
  #surname {
    width: 300px;
  }
  #email {
    width: 300px;
  }
  #subject {
    width: 300px;
  }

  #message {
    width: 90%;
  }
} */
</style>