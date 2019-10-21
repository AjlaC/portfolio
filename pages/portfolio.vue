<template>
  <div>
    <navbar />
    <nuxt-child class="project" />
    <b-container class="portfolio-container">
      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">App/Web</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/share-it">
            <b-card title="Share-it" img-src="~assets/shareit-cover.png">
              <p class="card-text">
                UX/UI Design<br />
                Mobile Interface Design
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/tork-easycube">
            <b-card title="Tork EasyCube" img-src="~assets/easycube-cover.png">
              <p class="card-text">
                UX/UI Design & Front-end dev<br />
                Dashboard Information Visualization
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
      <!-- <b-row class="m-4"> -->
      <!--   <b-col md="6" sm="12"> -->
      <!--     <nuxt-link to="/portfolio/100-days-of-ui"> -->
      <!--       <b-card title="100 Days of UI" img-src="~assets/100-cover.png"> -->
      <!--         <p class="card-text"> -->
      <!--           UX/TUI Design<br /> -->
      <!--           Interactive Game Exhibition -->
      <!--         </p> -->
      <!--       </b-card> -->
      <!--     </nuxt-link> -->
      <!--   </b-col> -->
      <!--   <b-col md="6" sm="0"> </b-col> -->
      <!-- </b-row> -->

      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">AR/VR</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/formloupe">
            <b-card title="FormLoupe" img-src="~assets/formloupe2-cover.png">
              <p class="card-text">
                UX/TUI Design<br />
                Mixed Reality Retail Experience
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/cybersketch">
            <b-card title="CyberSketch" img-src="~assets/cybersketch-cover.png">
              <p class="card-text">
                UX/TUI Design<br />
                3D Sketching tool in VR
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>

      <b-row class="m-4">
        <b-col>
          <h2 class="special-font" align="left">Physical Installations</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/muffin-or-chihuahua">
            <b-card
              title="Muffin or Chihuahua?"
              img-src="~assets/muffin-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                Interactive Game Exhibition
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/statustable">
            <b-card
              title="Status Table"
              img-src="~assets/statustable-cover.png"
            >
              <p class="card-text">
                UX/TUI Design<br />
                Tangible Office Planner
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  name: 'App',
  components: { navbar },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  }
}
</script>

<style lang="scss">
@media (orientation: landscape) {
}

@media (orientation: portrait) {
}

#back-button {
  border: 1px solid black;
  align-self: center;
}

#back-button:after {
  content: 'Back to portfolio';
}

.navbar {
  background-color: transparent !important;
}

.bold-p {
  font-weight: 500;
}

.small-italic {
  font-size: 13px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.56);
}

.row {
  justify-content: center;
}

.highlight-background {
  background-color: rgba(195, 109, 160, 0.36);
}

.col-form-label {
  float: left;
}

.portfolio-container {
  @media (orientation: landscape) {
    width: 75vw;
  }
  a {
    color: rgba(0, 0, 0, 0.87);
  }
}

.card {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.project {
  text-align: left;
  margin: 0 auto;
  width: 80%;
}
</style>
