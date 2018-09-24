<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" toggleable="md" type="light" variant="light">

        <b-navbar-brand href="#" style="color: rgba(255,255,255,0.87)">AjlaC</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-bind:active="tab === 1" v-on:click="changeTab(1)">Home</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 2" v-on:click="changeTab(2)">About me</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 3" v-on:click="changeTab(3)">Portfolio</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 4" v-on:click="changeTab(4)">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container v-if="tab === 1" class="container-fluid" fluid>
      <div class="main row">
        <div class="left col-md-6">
          <b-jumbotron header="“" lead="Recognizing the need is the primary condition for design." class="quote">
            <p class="bold-p">
              - Charles Eames</p>
          </b-jumbotron>
        </div>
        <div class="col-md-6">
          <b-jumbotron class="landing-profile" header="Ajla" lead="Cano">
            <h4>UX Engineer</h4>
            <p>I'm Ajla Cano, a Gothenburg based UX Engineer. I'm design focused and process driven when it comes to powerful and elegant technology.
            </p>
            <div class="container">
              <a class="gradient-button" @click="tab = 4">
                <span>Contact</span>
              </a>
            </div>
          </b-jumbotron>
          <div class="social-group">
            <img @click="tab = 4" class="social-icon" src="https://image.flaticon.com/icons/svg/131/131155.svg" />
            <br>
            <a href="https://instagram.com/ajlacreations">
              <img class="social-icon" src="https://image.flaticon.com/icons/svg/1077/1077042.svg" />
              <br></a>
            <a href="https://www.linkedin.com/in/ajla-cano/">
              <img class="social-icon" src="https://image.flaticon.com/icons/svg/134/134046.svg" />
              <br></a>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 2" class="container-fluid" fluid>
      <div class="row">
        <div class="col-sm-6">
          <b-jumbotron header=" " lead="Timeline">
            <light-timeline :items='items'></light-timeline>
          </b-jumbotron>
        </div>
        <div class="col-sm-6 about">
          <img class="profile-pic" src="https://media.licdn.com/dms/image/C5603AQFcYINCf49DyA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=E4Bupq8ix0SeJzni8a4PZl8oL4SeIoxQL_zhc9kP5yY" />
          <div class="text">
            I'm a Gothenburg based UX engineer and Interaction designer who is passionate about solving real-life problems between people and technology, using interaction design as my main tool.
            <br>
            <br>My main goal when designing is to build a better understanding between the user and the product while at the same time creating engaging experiences. I constantly try to challenge my creativity around existing constraints in a project and
            see that as a opportunity to learn even more and grow as an interaction designer.
            <br>
            <br>During a design process, my favorite parts are the challenges that come with the problem solving. I’m a believer in finding the best solutions when getting out of your comfort zone. A feeling I enjoy is the eagerness to solve a problem which
            can then influence the user in a positive and productive way.
          </div>
          <div class="container">
            <a class="gradient-button" href="https://github.com/AjlaC/ajlac.github.io/raw/master/pdf/ajlacanoCV.pdf" download>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 3" class="container-fluid" fluid>
      <div class="row" style="justify-content: center;">

        <div class="col-md-4">
          <b-card title="Easy Cube" @click="show('easy-cube')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/easycube.png?raw=true" img-alt="Image" img-top tag="article" style="max-width: 20rem;">
            <p class="card-text">
              Design
            </p>
          </b-card>
          <modal :adaptive="true" name="easy-cube">
            <button class="button button--modal_close p-3" @click="hide()">
                                                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                                                        </button>
          </modal>
        </div>

        <div class="col-md-4">
          <b-card title="Lit!" @click="show('lit')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/LITTT.png?raw=true" img-alt="Image" img-top tag="article" style="max-width: 20rem;">
            <p class="card-text">
              Design
            </p>
          </b-card>
          <modal :adaptive="true" name="lit">
            <button class="button button--modal_close p-3" @click="hide()">
                                                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                                                        </button>
          </modal>
        </div>

        <div class="col-md-4">
          <b-card title="RC Intro" @click="show('rc-intro')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/RC-intro.png?raw=true" img-alt="Image" img-top tag="article" style="max-width: 20rem;">
            <p class="card-text">
              Design
            </p>
          </b-card>
          <modal :adaptive="true" name="rc-intro">
            <button class="button button--modal_close p-3" @click="hide()">
                                                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                                                        </button>
          </modal>
        </div>

        <div class="col-md-4">
          <b-card title="Status Table" @click="show('status-table')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/statustable.PNG?raw=true" img-alt="Image" img-top tag="article" style="max-width: 20rem;">
            <p class="card-text">
              Design
            </p>
          </b-card>
          <modal :adaptive="true" name="status-table">
            <button class="button button--modal_close p-3" @click="hide()">
                                                            <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                                                        </button>
          </modal>
        </div>

      </div>
    </b-container>

    <b-container v-if="tab === 4" class="container-fluid " fluid>
      <div class="row" style="justify-content: center;">
        <div class="col-md-6">
          <b-media class="m-4 p-5">
            <h3 class="mt-0 m-3">Contact</h3>
            <div class="contact-social-group">
              <img @click="tab = 4" class="social-icon" src="https://image.flaticon.com/icons/svg/131/131155.svg" />
              <a href="https://instagram.com/ajlacreations">
                <img class="social-icon" src="https://image.flaticon.com/icons/svg/1077/1077042.svg" />
              </a>
              <a href="https://www.linkedin.com/in/ajla-cano/">
                <img class="social-icon" src="https://image.flaticon.com/icons/svg/134/134046.svg" />
              </a>
            </div>
            <b-form>
              <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
                <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2" label="Topic:" label-for="exampleInput2">
                <b-form-input id="exampleInput2" type="text" v-model="form.topic" required placeholder="Enter topic"></b-form-input>
              </b-form-group>
              <b-form-textarea id="textarea1" v-model="form.text" placeholder="" :rows="3" :max-rows="6"></b-form-textarea>
              <div class="container">
                <a class="gradient-button" @click="sendEmail()">
                  <span>Submit</span>
                </a>
              </div>
            </b-form>
          </b-media>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
  require('vue2-animate/dist/vue2-animate.min.css')
  import * as api from '../api'

  export default {
    name: 'app',
    components: {},
    data() {
      return {
        tab: 1,
        currentModal: '',
        items: [{
          tag: '2017-2019',
          content: 'M.SC. Interaction Design and Technologies at Chalmers'
        }, {
          tag: '2014-2017',
          color: '#dcdcdc',
          type: 'circle',
          content: 'B.Sc. Computer Science and Engineering at Chalmers'
        }, {
          tag: '2013-2014',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Engineering Foundation Year at Chalmers'
        }, {
          tag: '2010-2013',
          color: '#dcdcdc',
          type: 'circle',
          content: 'Arts Programme in High School'
        }],
        form: {
          email: '',
          topic: '',
          text: ''
        }
      }
    },
    created() {},
    methods: {
      changeTab(num) {
        this.tab = num;
      },
      show(name) {
        this.currentModal = name;
        this
          .$modal
          .show(name);
      },
      hide() {
        this
          .$modal
          .hide(this.currentModal);
      },

      async sendEmail() {
        var response = await api.sendEmail(this.form.email, this.form.topic, 'Here you go madafaka, new interest!' + this.form.text)
        if (response.status === 200) {
          window
            .location
            .reload();
        }
      }
    }
  }
</script>

<style lang="scss">
  .button {
    &.button--modal_close {
      background: none;
      outline: none;
      border: none;
      float: right;
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
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
    img {
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    }
    &:hover {
      opacity: 0.87;
    }
  }

  .navbar {
    background-color: transparent !important;
  }

  .jumbotron {
    background-color: transparent;
  }

  .profile-pic {
    border-radius: 50%;
    max-width: 150px;
    margin-bottom: 20px;
  }

  .media {
    background: white;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    .media-content {
      margin: 0 auto;
    }
    img {
      transition: all 0.2s ease-in-out;
      max-width: auto;
      max-height: 140px;
    }
  }

  // .media::after {
  //   position: absolute;
  //   top: -2px;
  //   bottom: -2px;
  //   left: -2px;
  //   right: -2px;
  //   background: linear-gradient(to right top, #c36ca1, #b882c0, #a997d8, #9aace7, #90beef);
  //   content: '';
  //   z-index: -1;
  //   border-radius: 10px;
  // }
  .social-group {
    position: absolute;
    right: 0;
    top: 65vh;
    img {
      margin-right: 8px;
    }
  }

  .social-icon {
    opacity: 0.87;
    height: auto;
    width: 22px;
    margin-bottom: 24px;
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      opacity: 0.56;
      cursor: pointer;
    }
  }

  .back-icon {
    float: left;
    width: 18px;
  }

  .quote {
    color: rgba(255, 255, 255, 0.87);
    width: 80%;
    .lead {
      font-style: italic;
      font-size: 40px;
    }
  }

  .bold-p {
    font-weight: 500;
  }

  .landing-profile {
    .display-3 {
      font-size: 48px;
      font-weight: 600;
    }
    .lead {
      font-size: 84px;
      margin-bottom: 40px;
    }
  }

  .about {
    .text {
      margin: 0 auto;
      width: 80%;
    }
  }

  .line-item {
    padding: 2.5rem !important;
  }

  .contact-social-group {
    .social-icon {
      margin: 30px 15px;
    }
  }
</style>