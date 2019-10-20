<template>
  <div>
    <div class="row m-4">
      <h2 class="special-font">Status Table</h2>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="~assets/statustable-header.png" thumbnail fluid />
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
</template>

<script>
export default {
  name: 'formLoupe',
  components: {},
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

<style lang="scss"></style>
