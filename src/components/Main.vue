<template>
  <div id="app">
    <navbar />
    <transition name="fadeLeftBig">
      <div class="body-background clip1"></div>
    </transition>

    <b-container key="2" class="container-fluid" fluid>
      <div class="main row">
        <div class="left col-md-6">
          <b-jumbotron
            v-if="window.width >= 767"
            header="“"
            lead="Recognizing the need is the primary condition for design."
            class="quote m-3 p-5"
          >
            <p class="bold-p">- Charles Eames</p>
          </b-jumbotron>
        </div>
        <div class="col-md-6">
          <b-jumbotron class="landing-profile m-5" key="3">
            <div class="row m-3">
              <div class="m-4">
                <span class="header">Ajla</span>
                <span class="lead">Cano</span>
              </div>
            </div>
            <p>
              I'm Ajla Cano, a Gothenburg based
              <span class="highlight-background"
                >Product Owner and UX Engineer</span
              >. I'm design focused and process driven when it comes to powerful
              and elegant technology.
            </p>
          </b-jumbotron>
          <div class="social-group" v-if="window.width >= 767">
            <a href="mailto:cano.ajla@gmail.com">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg"
              />
            </a>
            <br />
            <a href="https://instagram.com/ajlascreations">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg" />
              <br
            /></a>

            <a href="https://www.linkedin.com/in/ajla-cano/">
              <img
                class="social-icon"
                src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg" />
              <br
            /></a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
require("vue2-animate/dist/vue2-animate.min.css");

import navbar from "../components/navbar.vue";

export default {
  name: "app",
  components: {
    navbar,
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
  },
};
</script>

<style lang="scss"></style>
