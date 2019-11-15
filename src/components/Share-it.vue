<template>
  <div>
    <navbar />
    <div class="project">
      <div class="row m-4">
        <h2 class="special-font">Share It</h2>
      </div>
      <div class="row m-3">
        <div class="col-12 col-sm-9">
          <b-img src="/static/images/shareit-header.png" thumbnail fluid />
          <h4>About</h4>
          The challenge during this project was to design a mobile user
          interface while following the
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
          requirements for the features of the application. In order to apply
          the rules form the guidelines to my design, I sketched out the
          navigation flow as well as layout of individual screens to get a
          better understanding on what parts of the content and structure needed
          to be further examined. The next step in the process was to decide
          upon what components were most suitable for the features in the
          requirements. For that I used the Android design and their directions
          for what and how to place components properly. After establishing the
          strucutre and layout, I prototyped a mock-up of the interface using
          Adobe XD.
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
          look up every single design component, it was still a new way of
          working where I learned a lot along the way. The fact that I could
          motivate each decision I made felt really good because it was a
          concrete and objective way to place the components in relation to each
          other and this gave me a clearer picture to why I designed the UI the
          way I did. A lot of times I found myself scrolling through the
          guidelines out of curiosity to read about all the different direction,
          even if those components weren’t relevant for my user interface. I
          enjoyed working on this project and I have a better understanding for
          finding a balance between following guidelines and designing an
          interface according to own aesthetic preferences.
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
import * as api from "../api";
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
