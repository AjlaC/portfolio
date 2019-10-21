<template>
  <div id="app">
    <div class="row m-4">
      <h2 class="special-font">Tork EasyCube</h2>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <b-img src="~assets/easycube-header.png" thumbnail fluid />
        <p>
          During summer of 2018 in a project at Essity AB, I designed the
          interface and user experience of Tork EasyCube's internal dashboard
          and developed the front-end in Angular 6. I worked independenly as the
          UX Designer and Developer. The focus of this project was to re-design
          the dashboard that displayed relevant data and connect it in a way
          that is meaningful to the company.
        </p>

        <h4>The Problem</h4>
        The starting point of this project was the existing dashboard at the
        company. It consisted of only one screen with a few graphs and charts
        showcasing numbers related to the products and customers. The old
        dashboard got a fair amount of critique from the employees since it
        didn't appeal to them in any way, especially after a longer while. The
        biggest challenge was to try and meet all the employees' needs and
        desires while keeping the information short enough to still be
        interesting.
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>The Audience</h4>
        Since the intention of such a dashboard is to be visible and displayed
        on a few larger TV info-screens for an entire floor at the company, the
        user group included a mixture of employees with different backgrounds
        such as developers, marketing teams, project managers, researchers, etc.
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>The Design Process</h4>
        The process was performed in several stages such as research phase,
        ideation phase, prototyping phase, evaluation phase, and implementation
        phase.
        <br /><br />
        The core idea for the new internal dashboard is that it would consist of
        two versions, one which has a slide-show like structure suitable for the
        info TV-screen, and one desktop version with a sidebar navigation.
        <b-img src="~assets/rotatingscreen.png" thumbnail fluid />
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>The Design Interface</h4>
        Below are the four different pages (mock-up version) on the dashboard
        with different focus areas. Note that all data visualized is fake data.
        <h5>First Page: In Number</h5>
        <b-img src="~assets/InNumbers.png" thumbnail fluid />
      </div>
    </div>
    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h5>Second Page: Our Customers</h5>
        <b-img src="~assets/OurCustomers.png" thumbnail fluid />
      </div>
    </div>
    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h5>Third Page: People Pattern</h5>
        <b-img src="~assets/PeoplePattern.png" thumbnail fluid />
      </div>
    </div>
    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h5>Fourth Page: Self-Service</h5>
        <b-img src="~assets/SelfService.png" thumbnail fluid />
      </div>
    </div>

    <div class="row m-3">
      <div class="col-12 col-sm-9">
        <h4>The Outcome</h4>
        <div>
          In contrast to the old dashboard, the new one is more dynamic and
          consists of several different pages, targeting different user groups.
          It also has two different version, one slideshow version and one
          desktop version that includes the Self-service page.
        </div>

        <b>Info-boxes</b><br />
        Even though the dashboard itself was different from traditional one-page
        dashboards in a way that it consisted of different pages that covered
        various topics, I tried to keep a common thread on each page. The common
        thread are the different motivational info-boxes on each page,
        indicating that the information visualized is meaningful to the company
        and that there might be new use cases and take aways they can gain from
        the information.
        <b-img src="~assets/inspirationboxes.png" thumbnail fluid />
        <br /><br />
        <b>Scalability</b><br />
        The dashboard was purposely designed with a sidebar navigation which
        makes it possible to add more pages depending on requests and demands
        from the users. Below is an example that was a suggested use case by the
        company during the last week of summer work.
        <b-img src="~assets/BusinessTalk2.png" thumbnail fluid />
        <br /><br />
        The end result of this summer's project was an implemented general
        structure of the dashboard with all the placeholders and description
        texts needed. A few graphs where implemented with D3.js but most of the
        data was not visualized yet. The project was handed off to the fulltime
        developer team at the company.
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
export default {
  name: 'App',
  scrollToTop: true,
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
