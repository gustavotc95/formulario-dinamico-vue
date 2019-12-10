<template>
  <div class="home">
    <div id="landing">
      <div class="container">
        <img src="../assets/images/logo.svg" alt="KetoCycle.Diet" class="regular-logo">

        <h1>
          Get your personalized 28-day Keto diet
        </h1>

        <div class="gender-description">
          Select your gender:
        </div>

        <div class="gender-buttons">
          <router-link to="/quiz/female" class="btn btn-female" data-gender="female">
            <span class="icon"><i class="female"></i></span>
              Female
            <i class="forward-female forward"></i>
          </router-link>
          <router-link to="/quiz/male"  class="btn btn-male" data-gender="male">
            <span class="icon"><i class="male"></i></span>
              Male
            <i class="forward-male forward"></i>
          </router-link >
        </div>

        <div class="row">
          <div class="col-xs-6 links col-lg-4">
            <a href="#">F.A.Q</a>
            <a href="#"><strong>Access my plan</strong></a>
            <a href="#">General conditions</a>
            <a href="#">Data protection policy</a>
            <a href="#">Contact us</a>
          </div>

          <div class="col-xs-6 col-lg-4">
            <img src="../assets/images/single-color-logo.svg" class="footer-logo">
          </div>

          <div class="col-xs-12 col-lg-4 copyright">
            2019 © All rights reserved
            <div class="disclaimer">
              DISCLAIMER: Results may vary from person to person
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
