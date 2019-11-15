<template>
  <div>
    <navbar />

    <transition name="fadeLeftBig">
      <div class="body-background clip3"></div>
    </transition>

    <b-container class="portfolio-container">
      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">App/Web</h2>
        </b-col>
      </b-row>
      <b-row class="mx-4">
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/share-it">
            <b-card title="Share-it" img-src="static/images/shareit-cover.png">
              <p class="card-text">
                UX/UI Design<br />
                Mobile Interface Design
              </p>
            </b-card>
          </b-link>
        </b-col>
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/tork-easycube">
            <b-card
              title="Tork EasyCube"
              img-src="static/images/easycube-cover.png"
            >
              <p class="card-text">
                UX/UI Design & Front-end dev<br />
                Dashboard Information Visualization
              </p>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
      <!-- <b-row class="m-4"> -->
      <!--   <b-col md="6" sm="12"> -->
      <!--     <b-link to="/portfolio/100-days-of-ui"> -->
      <!--       <b-card title="100 Days of UI" img-src="static/images/100-cover.png"> -->
      <!--         <p class="card-text"> -->
      <!--           UX/TUI Design<br /> -->
      <!--           Interactive Game Exhibition -->
      <!--         </p> -->
      <!--       </b-card> -->
      <!--     </b-link> -->
      <!--   </b-col> -->
      <!--   <b-col md="6" sm="0"> </b-col> -->
      <!-- </b-row> -->

      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">AR/VR</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/formloupe">
            <b-card
              title="FormLoupe"
              img-src="static/images/formloupe2-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                Mixed Reality Retail Experience
              </p>
            </b-card>
          </b-link>
        </b-col>
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/cybersketch">
            <b-card
              title="CyberSketch"
              img-src="static/images/cybersketch-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                3D Sketching tool in VR
              </p>
            </b-card>
          </b-link>
        </b-col>
      </b-row>

      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">Physical Installations</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/muffin-or-chihuahua">
            <b-card
              title="Muffin or Chihuahua?"
              img-src="static/images/muffin-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                Interactive Game Exhibition
              </p>
            </b-card>
          </b-link>
        </b-col>
        <b-col md="6" sm="12" class="mb-4">
          <b-link to="/portfolio/statustable">
            <b-card
              title="Status Table"
              img-src="static/images/statustable-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                Tangible Office Planner
              </p>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
require("vue2-animate/dist/vue2-animate.min.css");
import navbar from "../components/navbar.vue";

export default {
  name: "app",
  components: {
    navbar
  }
};
</script>

<style>
.card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: white;
  min-height: 330px;
  border: none;
}

.card-body {
  background-color: white;
}
</style>
