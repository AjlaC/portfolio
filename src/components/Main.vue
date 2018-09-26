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

    <transition name="fadeLeftBig">
      <div v-if="tab === 1" class="body-background">
        <img src="https://github.com/AjlaC/portfolio/blob/master/ajlac2.png?raw=true" />
      </div>
    </transition>

      <b-container v-if="tab === 1" class="container-fluid" fluid>
        <div class="main row">
          <div class="left col-md-6">
            <b-jumbotron v-if="window.width >= 767" header="“" lead="Recognizing the need is the primary condition for design." class="quote">
              <p class="bold-p">
                - Charles Eames</p>
            </b-jumbotron>
          </div>
          <div class="col-md-6">
            <b-jumbotron class="landing-profile">
              <div class="row">
                <div class="">
                  <p class="header">Ajla</p>
                  <p class="lead"> Cano</p>
                </div>
              </div>
              <p>I'm Ajla Cano, a Gothenburg based <span class="highlight-background">UX Engineer</span>. I'm design focused and process driven when it comes to powerful and elegant technology.
              </p>
              <div class="container">
                <a class="gradient-button" @click="tab = 4">
                  <span>Contact</span>
                </a>
              </div>
            </b-jumbotron>
            <div class="social-group">
              <img @click="tab = 4" class="social-icon" src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg" />
              <br>
              <a href="https://instagram.com/ajlacreations">
                <img class="social-icon" src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg" />
                <br></a>
              <a href="https://www.linkedin.com/in/ajla-cano/">
                <img class="social-icon" src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg" />
                <br></a>
            </div>
          </div>
        </div>
      </b-container>

    <b-container v-if="tab === 2" class="container-fluid" fluid>
      <h1>About me</h1>
      <div class="row">
        <div class="col-sm-6">
          <img class="profile-pic img-thumbnail" src="https://media.licdn.com/dms/image/C5603AQFcYINCf49DyA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=E4Bupq8ix0SeJzni8a4PZl8oL4SeIoxQL_zhc9kP5yY" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 about">
          <div class="text">
            I'm a Gothenburg based UX engineer and Interaction designer who is passionate about solving real-life problems between people and technology, using interaction design as my main tool.
            <br>
            <br>My main goal when designing is to build a better understanding between the user and the product while at the same time creating engaging experiences. I constantly try to challenge my creativity around existing constraints in a project and
            see that as a opportunity to learn even more and grow as an interaction designer.
            <br>
            <br>During a design process, my favorite parts are the challenges that come with the problem solving. I’m a believer in finding the best solutions when getting out of your comfort zone. A feeling I enjoy is the eagerness to solve a problem which
            can then influence the user in a positive and productive way.
          </div>
        </div>
        <div class="col-sm-6">
          <b-jumbotron header=" " lead="My journey into Interaction Design">
            <light-timeline :items='items'></light-timeline>
          </b-jumbotron>
          <p class="small-italic">
            For more detailed information download CV:
          </p>
          <div class="container">
            <a class="gradient-button" href="https://github.com/AjlaC/ajlac.github.io/raw/master/pdf/ajlacanoCV.pdf" download>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 3" class="container-fluid" fluid>
      <h1>Portfolio</h1>
      <div class="row">
        <swiper :options="swiperOption" class="col-12 col-sm-12 col-md-12 col-lg-12">
          <div class="swiper-pagination" slot="pagination"></div>
          <swiper-slide>
            <b-card @click="show('easy-cube')" title="Easy Cube" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/easycube.png?raw=true" img-alt="Image" img-top tag="article">
              <p class="card-text">
                Design
              </p>
            </b-card>
          </swiper-slide>
          <swiper-slide>
            <b-card title="Lit!" @click="show('lit')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/LITTT.png?raw=true" img-alt="Image" img-top tag="article">
              <p class="card-text">
                Design
              </p>
            </b-card>
          </swiper-slide>

          <swiper-slide>
            <b-card title="RC Intro" @click="show('rc-intro')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/RC-intro.png?raw=true" img-alt="Image" img-top tag="article">
              <p class="card-text">
                Design
              </p>
            </b-card>
          </swiper-slide>

          <swiper-slide>
            <b-card title="Status Table" @click="show('status-table')" class="m-3" img-src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/statustable.PNG?raw=true" img-alt="Image" img-top tag="article">
              <p class="card-text">
                Design
              </p>
            </b-card>
          </swiper-slide>

        </swiper>


        <modal :adaptive="true" name="easy-cube">
          <button class="button button--modal_close p-3" @click="hide()">
                        <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                      </button>
        </modal>

        <modal :adaptive="true" name="lit">
          <button class="button button--modal_close p-3" @click="hide()">
                        <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                      </button>
        </modal>

        <modal :adaptive="true" name="rc-intro">
          <button class="button button--modal_close p-3" @click="hide()">
                        <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                      </button>
        </modal>

        <modal :adaptive="true" name="status-table">
          <button class="button button--modal_close p-3" @click="hide()">
                        <img src="https://image.flaticon.com/icons/svg/127/127936.svg"/>
                      </button>
        </modal>
      </div>
    </b-container>

    <b-container v-if="tab === 4" class="container-fluid " fluid>
      <h1>Contact</h1>
      <div class="row">
        <div class="col-md-6">
          <b-media>
            <div class="contact-social-group m-4">
              <img @click="tab = 4" class="social-icon-large" src="https://cdn.rawgit.com/emilundg/a59d3d681244a46d8a3444cb3a5960e7/raw/73d3baf271553073fbaa560a9c261aeca0b318c8/Mail.svg" />
              <a href="https://instagram.com/ajlacreations">
                <img class="social-icon-large" src="https://cdn.rawgit.com/emilundg/7d2df0d4f97fa81e52486093e2decc94/raw/f7e5664b835dc1038630760bed94959ba678da8d/instagram.svg" />
              </a>
              <a href="https://www.linkedin.com/in/ajla-cano/">
                <img class="social-icon-large" src="https://cdn.rawgit.com/emilundg/cbbfd2b1fb856cb680eea5d19460e45e/raw/f98cb8c2aeaf448e13372d23b7643e363c8a59f4/Linkedin.svg" />
              </a>
            </div>
            <h3>Or send me a message!</h3>
            <b-form class="m-4">
              <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
                <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email"></b-form-input>
              </b-form-group>
              <b-form-group id="exampleInputGroup2" label="Topic:" label-for="exampleInput2">
                <b-form-input id="exampleInput2" type="text" v-model="form.topic" required placeholder="Enter topic"></b-form-input>
              </b-form-group>
              <b-form-textarea id="textarea1" v-model="form.text" placeholder="" :rows="3" :max-rows="6"></b-form-textarea>
              <div class="container mt-4">
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

  import 'swiper/dist/css/swiper.css'
  import {
    swiper,
    swiperSlide
  } from 'vue-awesome-swiper'


  export default {
    name: 'app',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        window: {
          width: 0,
          height: 0
        },
        swiperOption: {
          slidesPerView: '2',
          speed: 400,
          mousewheel: true,
          centeredSlides: true,
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true
          }
        },
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
    created() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      show(name) {
        this.currentModal = name;
        this.$modal.show(name);
      },
      hide() {
        this.$modal.hide(this.currentModal);
      },
      changeTab(num) {
        this.tab = num;
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
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      opacity: 0.87;
    }
  }

  .navbar {
    background-color: transparent !important;
  }

  .jumbotron {
    padding: 0px;
    background-color: transparent;
  }

  .profile-pic {
    border-radius: 50%;
    max-width: 200px;
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
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
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
    .lead {
      float: left;
      font-size: 72px;
      font-weight: bold;
    }
    .header {
      float: left;
      font-size: 72px;
    }
  }

  .about {
    .text {
      text-align: left;
      margin: 0 auto;
      width: 80%;
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
    position: absolute;
    z-index: 0;
    img {
      width: 100vw;
      height: 100vh;
    }
  }
</style>