<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" toggleable="md" type="light" variant="light">

        <b-navbar-brand href="#">AjlaC</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-bind:active="tab === 1" v-on:click="tab = 1" href="#">Home</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 2" v-on:click="tab = 2" href="#">About me</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 3" v-on:click="tab = 3" href="#">Portfolio</b-nav-item>
            <b-nav-item class="button" v-bind:active="tab === 4" v-on:click="tab = 4" href="#">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container v-if="tab === 1" class="container-fluid" fluid>
      <div class="row">
        <div class="col-md-6">
          <b-jumbotron header="“" lead="Recognizing the need is the primary condition for design." class="quote">
            <p class="bold-p"> - Charles Eames</p>
          </b-jumbotron>
        </div>
        <div class="col-md-6">
          <b-jumbotron class="landing-profile" header="Ajla" lead="Cano">
            <p>UX Engineer</p>
            <div class="container">
              <a class="gradient-button" @click="tab = 4"><span>Contact</span></a>
            </div>
          </b-jumbotron>
          <div class="social-group">
            <img @click="tab = 4" class="social-icon" src="https://image.flaticon.com/icons/svg/131/131155.svg" /><br>
            <a href="https://instagram.com/ajlacreations">
              <img class="social-icon" src="https://image.flaticon.com/icons/svg/1077/1077042.svg" /><br>
            </a>
            <a href="https://www.linkedin.com/in/ajla-cano/">
              <img class="social-icon" src="https://image.flaticon.com/icons/svg/134/134046.svg" /><br>
            </a>
          </div>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 2" class="container-fluid" fluid>
      <div class="row">
        <div class="col-sm-6">
          <img class="profile-pic" src="https://media.licdn.com/dms/image/C5603AQFcYINCf49DyA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=E4Bupq8ix0SeJzni8a4PZl8oL4SeIoxQL_zhc9kP5yY" />
          <div>
            I'm a Gothenburg based UX engineer and Interaction designer who is passionate about solving real-life problems between people and technology, using interaction design as my main tool.
            <br><br>My main goal when designing is to build a better understanding between the user and the product while at the same time creating engaging experiences. I constantly try to challenge my creativity around existing constraints in a project
            and see that as a opportunity to learn even more and grow as an interaction designer.
            <br><br>During a design process, my favorite parts are the challenges that come with the problem solving. I’m a believer in finding the best solutions when getting out of your comfort zone. A feeling I enjoy is the eagerness to solve a problem
            which can then influence the user in a positive and productive way.
          </div>
          <div>
            <div class="container">
              <a class="gradient-button" href="https://github.com/AjlaC/ajlac.github.io/raw/master/pdf/ajlacanoCV.pdf" download><span>Download</span></a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <b-jumbotron header=" " lead="Timeline">
            <light-timeline :items='items'></light-timeline>
          </b-jumbotron>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 3" class="container-fluid" fluid>
      <div class="row" style="justify-content: center;">
        <b-media v-if="showAll" class="col-md-8 m-4 p-3" @click="showFirst = true; showAll = false">
          <b-img slot="aside" alt="placeholder" fluid src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/easycube.png?raw=true" />
          <h5 class="mt-0">Tork EasyCube Dashboard</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media v-if="showAll" class="col-md-8 m-4 p-3" @click="showSecond = true; showAll = false">
          <b-img slot="aside" alt="placeholder" fluid src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/statustable.PNG?raw=true" />
          <h5 class="mt-0">Status table</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media v-if="showAll" class="col-md-8 m-4 p-3" @click="showThird = true; showAll = false">
          <b-img slot="aside" alt="placeholder" fluid src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/LITTT.png?raw=true" />
          <h5 class="mt-0">Lit!</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>

        <b-media v-if="showAll" class="col-md-8 m-4 p-3" @click="showFourth = true; showAll = false">
          <b-img slot="aside" alt="placeholder" fluid src="https://github.com/AjlaC/ajlac.github.io/blob/master/images/RC-intro.png?raw=true" />
          <h5 class="mt-0">Remote classroom</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </b-media>
      </div>

      <div class="row" v-if="showFirst">
        <div class="col-md-12">
          <img class="back-icon" @click="showFirst = false; showAll = true" src="https://image.flaticon.com/icons/svg/118/118739.svg">
          <h2> Tork EasyCube Dashboard </h2>
        </div>
      </div>

      <div class="row" v-if="showSecond">
        <div class="col-md-12">
          <img class="back-icon" @click="showSecond = false; showAll = true" src="https://image.flaticon.com/icons/svg/118/118739.svg">
          <h2> Status table </h2>
        </div>
      </div>

      <div class="row" v-if="showThird">
        <div class="col-md-12">
          <img class="back-icon" @click="showThird = false; showAll = true" src="https://image.flaticon.com/icons/svg/118/118739.svg">
          <h2> Lit! </h2>
        </div>
      </div>

      <div class="row" v-if="showFourth">
        <div class="col-md-12">
          <img class="back-icon" @click="showFourth = false; showAll = true" src="https://image.flaticon.com/icons/svg/118/118739.svg">
          <h2> Remote classroom </h2>
        </div>
      </div>
    </b-container>

    <b-container v-if="tab === 4" class="container-fluid" fluid>
      <div class="row" style="justify-content: center;">
        <div class="col-md-4">
          <b-form>
            <b-form-group id="exampleInputGroup1" label="Email address:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="email" v-model="form.email" required placeholder="Enter email">
              </b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2" label="Topic:" label-for="exampleInput2">
              <b-form-input id="exampleInput2" type="text" v-model="form.topic" required placeholder="Enter topic">
              </b-form-input>
            </b-form-group>
            <b-form-textarea id="textarea1" v-model="form.text" placeholder="" :rows="3" :max-rows="6">
            </b-form-textarea>
            <div class="container">
              <a class="gradient-button" @click="sendEmail()"><span>Submit</span></a>
            </div>
          </b-form>
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
        showAll: true,
        showFirst: false,
        showSecond: false,
        showThird: false,
        showFourth: false,
        items: [{
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
        ],
        form: {
          email: '',
          topic: '',
          text: ''
        },
      }
    },
    created() {},
    methods: {
       async sendEmail() {
        var response = await api.sendEmail(this.form.email, this.form.topic, 'Here you go madafaka, new interest!' + this.form.text)
        if (response.status === 200) {
          window.location.reload();
        }
      }
    }
  }
</script>

<style lang="scss">
  .container-fluid {
    padding: 36px;
  }

  .navbar {
    background-color: transparent !important;
  }

  .jumbotron {
    background-color: transparent;
  }

  .profile-pic {
    border-radius: 50%;
    max-width: 225px;
    margin-bottom: 20px;
  }

  .media {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
    &:hover {
      box-shadow: 0 3px 9px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.11);
    }
    border: 2px solid transparent;
    img {
      max-width: auto;
      max-height: 180px;
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
    }
  }
</style>
