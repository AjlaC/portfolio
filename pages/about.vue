<template>
  <div>
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
              href="https://github.com/AjlaC/portfolio/raw/master/static/pdf/Ajla-CV-v19.pdf"
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
