<template>
  <div id="app">
    <navbar />
    <nuxt-child />
    <b-container class="portfolio-container">
      <b-row class="m-4">
        <b-col>
          <h2 align="left">App/Web</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/share-it">
            <b-card title="Share-it" img-src="~assets/shareit-cover.png">
              <p class="card-text">
                UX/TUI Design<br />
                Interactive Game Exhibition
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/tork-easycube">
            <b-card title="Tork EasyCube" img-src="~assets/easycube-cover.png">
              <p class="card-text">
                UX/UI Design & Front-end dev<br />
                Information Visualization
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/remote-classroom">
            <b-card title="Remote Classroom" img-src="~assets/rc-cover.png">
              <p class="card-text">
                UX/TUI Design<br />
                Interactive Game Exhibition
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="0"> </b-col>
      </b-row>

      <b-row class="m-4">
        <b-col>
          <h2 align="left">AR/VR</h2>
        </b-col>
      </b-row>
      <b-row class="m-4">
        <b-col md="6" sm="12">
          <nuxt-link to="/portfolio/cybersketch">
            <b-card title="CyberSketch" img-src="~assets/cybersketch-cover.png">
              <p class="card-text">
                UX/TUI Design<br />
                Interactive Game Exhibition
              </p>
            </b-card>
          </nuxt-link>
        </b-col>
        <b-col md="6" sm="12"> </b-col>
      </b-row>

      <b-row class="m-4">
        <b-col>
          <h2 align="left">Physical Installations</h2>
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
                Interactive Game Exhibition
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
@import url('https://fonts.googleapis.com/css?family=Expletus+Sans');

@media (orientation: landscape) {
  width: 75vw;
  margin: 0 auto;
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

.special-font {
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Expletus Sans', cursive;
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
</style>
