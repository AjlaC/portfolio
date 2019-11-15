<template>
  <div id="app">
    <navbar />
    <div class="row m-4">
      <h2 class="special-font">Share It</h2>
    </div>
    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="/static/images/shareit-header.png" thumbnail fluid />
        <h4>About</h4>
        The challenge during this project was to design a mobile user interface
        while following the
        <a href="https://material.io/design/" target="_blank">
          Android design guidelines</a
        >. The project was performed during a week, full-time. The task was to
        design an app that families with children can use to rent things from
        each other according to given requirements.
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>Process and Guidelines</h4>
        The most important part of this project was to challenge myself and
        learn how to properly follow the guidelines with the respect to given
        requirements for the features of the application. In order to apply the
        rules form the guidelines to my design, I sketched out the navigation
        flow as well as layout of individual screens to get a better
        understanding on what parts of the content and structure needed to be
        further examined. The next step in the process was to decide upon what
        components were most suitable for the features in the requirements. For
        that I used the Android design and their directions for what and how to
        place components properly. After establishing the strucutre and layout,
        I prototyped a mock-up of the interface using Adobe XD.
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>Early Sketches</h4>
        <b-img
          src="/static/images/share-it/sketches-navigation.png"
          thumbnail
          fluid
        />
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>Final Prototype</h4>
        The bottom navigation is the primary navigation, which is a Forward
        navigation that has direct access to all the top level screens in the
        hierarchy. The components that were used in this user interface are
        lists, cards, confirmation dialogs, image lists, fullscreen dialogs,
        dividers, call-to-action buttons, persistent search.
        <div class="row">
          <div class="col">
            <b-img
              src="/static/images/share-it/ShareIT-posting.gif"
              thumbnail
              fluid
            />
          </div>
          <div class="col">
            <b-img
              src="/static/images/share-it/ShareIT-renting.gif"
              thumbnail
              fluid
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>Learning Outcomes</h4>
        Even though it was quite challenging to search for each direction and
        look up every single design component, it was still a new way of working
        where I learned a lot along the way. The fact that I could motivate each
        decision I made felt really good because it was a concrete and objective
        way to place the components in relation to each other and this gave me a
        clearer picture to why I designed the UI the way I did. A lot of times I
        found myself scrolling through the guidelines out of curiosity to read
        about all the different direction, even if those components weren’t
        relevant for my user interface. I enjoyed working on this project and I
        have a better understanding for finding a balance between following
        guidelines and designing an interface according to own aesthetic
        preferences.
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
require("vue2-animate/dist/vue2-animate.min.css");
import * as api from "../api";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import navbar from "../components/Navbar.vue";

export default {
  name: "app",
  components: {
    swiper,
    swiperSlide,
    navbar
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      swiperOption: {
        slidesPerView: "2",
        speed: 400,
        mousewheel: true,
        centeredSlides: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          dynamicBullets: true
        }
      },
      tab: 1,
      currentModal: "",
      items: [
        {
          tag: "2017-2019",
          content: "M.SC. Interaction Design and Technologies at Chalmers"
        },
        {
          tag: "2014-2017",
          color: "#dcdcdc",
          type: "circle",
          content: "B.Sc. Computer Science and Engineering at Chalmers"
        },
        {
          tag: "2013-2014",
          color: "#dcdcdc",
          type: "circle",
          content: "Engineering Foundation Year at Chalmers"
        },
        {
          tag: "2010-2013",
          color: "#dcdcdc",
          type: "circle",
          content: "Arts Programme in High School"
        }
      ],
      form: {
        email: "",
        topic: "",
        text: ""
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
      var response = await api.sendEmail(
        this.form.email,
        this.form.topic,
        "Hello, someone showed interest! " + this.form.text
      );
      if (response.status === 200) {
        window.location.reload();
      }
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Expletus+Sans");
.modal-button {
  justify-content: flex-end !important;
}

.button {
  &.button--modal_close {
    background: none;
    outline: none;
    border: none;
    float: right;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background: none;
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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
  width: 90%;
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
  .lead,
  .header {
    font-size: 72px;
    font-family: "Expletus Sans", cursive;
  }
  .lead {
    font-weight: bold;
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
  background-clip: content-box;
  background: url("https://github.com/AjlaC/portfolio/blob/master/background_ajla_full.png?raw=true")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
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

.clip1 {
  -webkit-clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
  clip-path: polygon(0 0, 49% 0, 38% 100%, 0% 100%);
}

.clip2 {
  background: linear-gradient(
    to right top,
    #c36ca1,
    #b882c0,
    #a997d8,
    #9aace7,
    #90beef
  );
  -webkit-clip-path: polygon(100% 22%, 100% 0, 100% 100%, 90% 100%);
  clip-path: polygon(100% 22%, 100% 0, 100% 100%, 90% 100%);
}

.clip3 {
  background: linear-gradient(
    to right top,
    #c36ca1,
    #b882c0,
    #a997d8,
    #9aace7,
    #90beef
  );
  -webkit-clip-path: polygon(0 0, 0 0, 19% 100%, 0 100%);
  clip-path: polygon(0 0, 0 0, 19% 100%, 0 100%);
}

.clip4 {
  background: linear-gradient(
    to right top,
    #c36ca1,
    #b882c0,
    #a997d8,
    #9aace7,
    #90beef
  );
  -webkit-clip-path: polygon(100% 0, 95% 80%, 100% 100%);
  clip-path: polygon(100% 0, 95% 80%, 100% 100%);
}

.special-font {
  color: rgba(0, 0, 0, 0.87);
  font-family: "Expletus Sans", cursive;
}
</style>
