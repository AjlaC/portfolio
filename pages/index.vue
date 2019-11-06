<template>
  <div id="app">
    <navbar />
    <transition name="fadeLeftBig">
      <div class="body-background clip1"></div>
    </transition>
    <b-container key="2" class="container-fluid">
      <div class="main row">
        <div class="left col-md-6">
          <b-jumbotron
            v-if="window.width >= 767"
            header="“"
            lead="Recognizing the need is the primary condition for design."
            class="quote m-3 p-5"
          >
            <p class="bold-p">
              - Charles Eames
            </p>
          </b-jumbotron>
        </div>
        <div class="col-md-6">
          <b-jumbotron key="3" class="landing-profile m-5">
            <div class="row m-3">
              <div class="m-4">
                <span class="header">Ajla</span>
                <span class="lead">Cano</span>
              </div>
            </div>
            <p>
              I'm Ajla Cano, a Gothenburg based
              <span class="highlight-background">UX Engineer</span>. I'm design
              focused and process driven when it comes to powerful and elegant
              technology.
            </p>
          </b-jumbotron>
          <div v-if="window.width >= 767" class="social-group">
            <a href="mailto:ajla@email.com">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg"
              />
            </a>
            <br />
            <a href="https://instagram.com/ajlascreations">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg"/>
              <br
            /></a>

            <a href="https://www.linkedin.com/in/ajla-cano/">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg"/>
              <br
            /></a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  name: 'Index',
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
.modal-button {
  justify-content: flex-end !important;
}

.button {
  &.button--modal_close {
    background: none;
    outline: none;
    border: none;
    float: right;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0.87;
    img {
      width: 23px;
    }
    &:hover {
      opacity: 0.56;
    }
  }
}

.card {
  border: none;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: none;
  &:hover {
    opacity: 0.87;
  }
}

.navbar {
  background-color: transparent !important;
}

.media {
  background: white;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  .media-content {
    margin: 0 auto;
  }
  img {
    transition: all 0.2s ease-in-out;
    max-width: auto;
    max-height: 140px;
  }
}

.social-group {
  position: absolute;
  right: 0;
  top: 65vh;
  img {
    margin-right: 8px;
  }
}

.social-icon {
  width: 22px;
}

.social-icon,
.social-icon-large {
  opacity: 0.87;
  height: auto;
  margin-bottom: 24px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    opacity: 0.56;
    cursor: pointer;
  }
}

.social-icon-large {
  margin: 8px;
  width: 38px;
}

.back-icon {
  float: left;
  width: 18px;
}

.quote {
  width: 90%;
  color: rgba(255, 255, 255, 0.87);
  .lead {
    font-style: italic;
    font-size: 40px;
  }
}

.bold-p {
  font-weight: 500;
}

.landing-profile {
  .lead,
  .header {
    font-size: 72px;
    font-family: 'Expletus Sans', sans-serif;
  }
  .lead {
    font-weight: bold;
  }
}

.line-item {
  text-align: left;
}

.contact-social-group {
  .social-icon {
    margin: 30px 15px;
  }
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
</style>
