<template>
  <div>
    <div class="row m-4">
      <h2 class="special-font">Muffin or Chihuahua?</h2>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="~assets/muffin-header.png" thumbnail fluid />
        <h2>About</h2>
        <div>
          Muffin or Chihuahua is an interactive installation created with the
          purpose of inspiring the younger generation to purpose an engineering
          career by introducing technologies such as machine learning.
        </div>
        <div>
          The installation was displayed at Universeum, a science museum in
          Gothenburg. The experience was received well by both the audience and
          Universeum and we were invited back for another exhibition which was a
          starting point for further developement.
        </div>
        <br />
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
        <br />
        <div>
          Read more about the exhibition on the project's website.
          <a target="_blank" href="http://idxpo.se/2018/muffinorchihuahua/">
            Project's website.
          </a>
        </div>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h2>Concept</h2>
        <div>
          The installation, which physically consists of a table, screen and
          interactive buttons and knobs, is divided into three smaller
          experiences.
        </div>
        <br />
        <h4>Experience One</h4>
        <div>
          An entertaining game which challenges the user to guess what picture
          they see in front of them by quickly tapping the correspoding buttons.
        </div>
        <b-img src="~assets/guessing-game.gif" thumbnail fluid />
        <br />
        <br />
        <h4>Experience Two</h4>
        <div>
          An informative video where and engineer explains the concept of
          machine learning and neural networks as well as shows in what way it
          is used in today's technologies and social media. This video acted
          like a transition between the first and third experience.
        </div>
        <b-img src="~assets/explanation-video.gif" thumbnail fluid />
        <br />
        <br />
        <h4>Experience Three</h4>
        <div>
          A more challenging game where the users are asked to "train" the
          computer to differentiate a muffin from a chihuahua by adjusting the
          "relevant" values of the nodes which in this game are values such as
          roudness, fluffiness, and color.
        </div>
        <b-img src="~assets/tuning-game.gif" thumbnail fluid />
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h2>Process and role</h2>
        <div>
          The project was carried out in a team of five designers whose combined
          experience seamlessly covered all parts of the design process.
        </div>
        <div>
          In the project, my main resposibility was the equivalent to a project
          manager's where project planning, deadlines, and resources were my
          focus. Apart from the shared tasks such as ideation, and structure of
          installation, and in addition to project management I also focused on
          the prototyping, video shooting, installation construction, and
          evaluation of the experience.
        </div>
      </div>
    </div>
    <div class="row m-3">
      <div class="col">
        <b-img src="~assets/process-lofi.png" thumbnail fluid />
      </div>
      <div class="col">
        <b-img src="~assets/process-paperprototype.png" thumbnail fluid />
      </div>
      <div class="col">
        <b-img src="~assets/process-coding.png" thumbnail fluid />
      </div>
    </div>
    <div class="row m-3">
      <div class="col">
        <b-img src="~assets/process-filming.png" thumbnail fluid />
      </div>
      <div class="col">
        <b-img src="~assets/process-editing.png" thumbnail fluid />
      </div>
      <div class="col">
        <b-img src="~assets/process-usertesting.png" thumbnail fluid />
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h2>Exhibition and outcome</h2>
        <div>
          The installation was displayed at Universeum the 26th and 27th of
          October 2018 where our target users, younger generation, could
          familiarize with our installation as well as the concept of machine
          learning.
        </div>
        <br />
        <div>
          Our client invited us on the 8th of February 2019 to exhibit the
          installation again for the opening of "The Hub" at Universeum.
        </div>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="~assets/universeum.png" thumbnail fluid />
        <h3 style="text-align: center;">
          "Very ambitious and professional looking exhibition that tackles a
          hard to explain subject. We are super impressed with your scope and
          finish."
        </h3>
        <div style="text-align: right;">- Universeum representative</div>
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
