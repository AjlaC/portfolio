<template>
  <div>
    <div class="row m-4">
      <h2 class="special-font">Muffin or Chihuahua?</h2>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="~assets/muffin-header.png" thumbnail fluid />
        <div>Muffin or Chihuahua</div>
        <div class="resp-container">
          <iframe
            class="resp-iframe"
            src="https://player.vimeo.com/video/323536599"
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
        <p>
          <a href="https://vimeo.com/323536599">
            Muffin or Chihuahua&mdash;Educative Museum Experience about Machine
            Learning
          </a>
          from
          <a href="https://vimeo.com/user3478076">Daniel Roeven</a> on
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h3 align="right">
          /
          <span class="special-font">
            Ajla
            <b>Cano</b>
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  scrollToTop: true,
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
