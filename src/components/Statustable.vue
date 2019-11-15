<template>
  <div>
    <navbar />
    <div class="project">
      <div class="row m-4">
        <h2 class="special-font">Status Table</h2>
      </div>

      <div class="row m-3">
        <div class="col-12 col-sm-9">
          <b-img src="/static/images/statustable-header.png" thumbnail fluid />
          <div class="resp-container">
            <iframe
              class="resp-iframe"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/trOtyn_VjWI"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div class="row m-3">
        <div class="col-12 col-sm-9">
          <h3 align="right">
            / <span class="special-font">Ajla<b>Cano</b></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("vue2-animate/dist/vue2-animate.min.css");
import navbar from "../components/navbar.vue";

export default {
  name: "app",
  components: {
    navbar
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
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
    }
  }
};
</script>
