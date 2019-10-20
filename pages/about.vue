<template>
  <div id="app">
    <navbar />
    <transition name="fadeRightBig">
      <div class="body-background clip2"></div>
    </transition>
    <b-container key="3" class="container-fluid" fluid>
      <h1>About me</h1>
      <div class="row">
        <div class="col-sm-6">
          <b-img
            class="profile-pic img-thumbnail"
            src="~assets/photoofme.png"
          ></b-img>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 about">
          <div class="text">
            I'm a Gothenburg based UX engineer and Interaction designer who is
            passionate about solving real-life problems between people and
            technology, using interaction design as my main tool.
            <br />
            <br />My main goal when designing is to build a better understanding
            between the user and the product while at the same time creating
            engaging experiences. I constantly try to challenge my creativity
            around existing constraints in a project and see that as a
            opportunity to learn even more and grow as an interaction designer.
            <br />
            <br />During a design process, my favorite parts are the challenges
            that come with the problem solving. I’m a believer in finding the
            best solutions when getting out of your comfort zone. A feeling I
            enjoy is the eagerness to solve a problem which can then influence
            the user in a positive and productive way.
          </div>
        </div>
        <div class="col-sm-6">
          <b-jumbotron header=" " lead="My journey into Interaction Design">
            <light-timeline :items="items"></light-timeline>
          </b-jumbotron>
          <p class="small-italic">
            For more detailed information:
          </p>
          <div class="container">
            <a
              class="gradient-button"
              target="_blank"
              href="/static/pdf/Ajla-CV-v19.pdf"
            >
              <span>Open Resume</span>
            </a>
          </div>
          <br /><br />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  name: 'about',
  components: { navbar },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      items: [
        {
          tag: '2017-2019',
          content: 'M.SC. Interaction Design and Technologies at Chalmers'
        },
        {
          tag: '2014-2017',
          color: '#dcdcdc',
          type: 'circle',
          content: 'B.Sc. Computer Science and Engineering at Chalmers'
        },
        {
          tag: '2013-2014',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Engineering Foundation Year at Chalmers'
        },
        {
          tag: '2010-2013',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Arts Programme in High School'
        }
      ]
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
  @media (orientation: portrait) {
    background-color: white;
  }
  background-clip: content-box;
  @media (orientation: landscape) {
    background: url('https://github.com/AjlaC/portfolio/blob/master/background_ajla_full.png?raw=true')
      no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

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
