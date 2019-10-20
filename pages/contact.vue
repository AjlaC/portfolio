<template>
  <div id="app">
    <navbar />
    <transition name="fadeRightBig">
      <div class="body-background clip4"></div>
    </transition>
    <b-container class="container-fluid " fluid>
      <h1>Contact</h1>
      <div class="row">
        <div class="col-md-6">
          <b-media>
            <div class="contact-social-group m-4">
              <a href="mailto:cano.ajla@gmail.com">
                <img
                  class="social-icon-large"
                  src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg"
                />
              </a>
              <a href="https://instagram.com/ajlascreations">
                <img
                  class="social-icon-large"
                  src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg"
                />
              </a>
              <a href="https://www.linkedin.com/in/ajla-cano/">
                <img
                  class="social-icon-large"
                  src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg"
                />
              </a>
            </div>
          </b-media>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  name: 'contact',
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

.body-background {
  background-clip: content-box;
  background: url('https://github.com/AjlaC/portfolio/blob/master/background_ajla_full.png?raw=true')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100%;
  min-width: 1024px;
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

.special-font {
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Expletus Sans', cursive;
}
</style>
