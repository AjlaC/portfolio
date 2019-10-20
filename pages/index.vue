<template>
  <div id="app">
    <div>
      <b-navbar
        class="b-navbar"
        :sticky="true"
        toggleable="md"
        type="light"
        variant="light"
      >
        <b-navbar-brand href="#" style="color: rgba(255,255,255,0.87)"
          ><span class="special-font">Ajla<b>Cano</b></span></b-navbar-brand
        >
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item
              class="button"
              v-bind:active="tab === 1"
              v-on:click="changeTab(1)"
              >Home</b-nav-item
            >
            <b-nav-item
              class="button"
              v-bind:active="tab === 2"
              v-on:click="changeTab(2)"
              >About me</b-nav-item
            >
            <b-nav-item
              class="button"
              v-bind:active="tab === 3"
              v-on:click="changeTab(3)"
              >Portfolio</b-nav-item
            >
            <b-nav-item
              class="button"
              v-bind:active="tab === 4"
              v-on:click="changeTab(4)"
              >Contact</b-nav-item
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
require('vue2-animate/dist/vue2-animate.min.css')

export default {
  name: 'app',
  components: {},
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      tab: 1,
      currentModal: '',
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
      ],
      form: {
        email: '',
        topic: '',
        text: ''
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
    },
    show(name) {
      this.currentModal = name
      this.$modal.show(name)
    },
    hide() {
      this.$modal.hide(this.currentModal)
    },
    changeTab(num) {
      this.tab = num
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Expletus+Sans');
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
    font-family: 'Expletus Sans', cursive;
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
  background: url('https://github.com/AjlaC/portfolio/blob/master/background_ajla_full.png?raw=true')
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

.resp-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
}

.resp-iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
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
  font-family: 'Expletus Sans', cursive;
}
</style>
