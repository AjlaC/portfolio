<template>
  <div>
    <navbar />
    <div class="project">
      <div class="row m-4">
        <h2 class="special-font">Formloupe</h2>
      </div>

      <div class="row m-3">
        <div class="col-12 col-sm-9">
          <h3 class="special-font" style="text-align: center;">
            Mixed Reality Experience for Retail Stores
          </h3>
          <b-img src="/static/images/formloupe-header.png" thumbnail fluid />
          <br />
          <br />
        </div>

        <div class="col-12 col-sm-9">
          <h2>About</h2>
          Formloupe is an experience in the shape of a configurator created to
          facilitate the process of designing and ordering products in
          brick-and-mortar stores. With brick-and-mortar stores, I mean all
          physicall stores such as fashion stores, interior design stores,
          automotive industry, food and drink stores, etc. This particular
          prototype allows the users to plan and design rooms and furniture
          according to own needs and wishes. However, thanks to the nature of
          configurators, Formloupe can be adjusted to other types of stores such
          fashion stores, or automotive stores. The time frame of this research
          project was six months, full-time, in partnership with
          <a target="_blank" href="https://danielroeven.com/">
            Daniel Roeven.</a
          >
          <br />
          <br />
          <div class="resp-container">
            <iframe
              class="resp-iframe"
              src="https://player.vimeo.com/video/339084681"
              width="640"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
          <br />
        </div>

        <div class="col-12 col-sm-9">
          <h2>Concept</h2>
          The experience consists of a configurator with small tangible
          furniture models and material swatches that can be previewed in 3D
          using a large AR touchscreen on a tabletop. The experience engages
          human senses such as vision, touch, and hearing. This concept is
          envisioned to be a part of a physical store by either placing it in
          the beginning of the store to act as an exploration tool or later in
          the store to act as a planning tool.
        </div>

        <div class="col-12 col-sm-9">
          <br />
          <h2>Design Process</h2>
          The design process was divided into three different stages: research
          into the state-of-the-art of relevant technology in retail stores,
          getting the right design, and lastly getting the design right.
          <b-img
            src="/static/images/formloupe-designprocess.png"
            thumbnail
            fluid
          />
          <br />
          <h4>Reaserch into state-of-the-art</h4>
          For this stage we performed a research study and collected nearly 100
          example of mixed reality in retail. From this we could map out a
          landscape in order to get a better understanding of the
          state-of-the-art. The framework can be found
          <a target="_blank" href="https://mr-in-retail.github.io"> here.</a>
          <b-img src="/static/images/KJcategories.png" thumbnail fluid />
          Some of the most common categories we discovered can be seen below:
          <b-img
            src="/static/images/formloupe-categories.png"
            thumbnail
            fluid
          />
          <br />
          <br />
          <h4>Getting the <b>right</b> design</h4>
          This phase consisted of four one-week long sprints where we used our
          landscape and explored different types of use cases. From those we
          could gather take aways that influenced our last phase. In total we
          did two concepts within the fashion industry, and two concepts within
          the interior design industry.
          <b-img src="/static/images/sprints-formloupe.png" thumbnail fluid />
          <br />
          <br />
          <h4>Getting the <b>design</b> right</h4>
          This was the final phase of the process where we chose one use case
          and made a functioning stand-alone prototype.
          <b-img src="/static/images/prototype-formloupe.jpg" thumbnail fluid />
          <b-img src="/static/images/formloupe-ui.png" thumbnail fluid />
          <b-img src="/static/images/formloupe-tui.png" thumbnail fluid />
        </div>

        <div class="col-12 col-sm-9">
          <br />
          <h2>Business values vs User Values</h2>
          In order to understand the landscape of MR in retail we looked at what
          kind of values relevant parties, the business and the users, can have
          for this scenario. For the business values we looked at the purchasing
          or conversion funnel which simply means that businesses can have
          different areas of interest divided into stages;
          <b>awareness, engagement, conversion, and loyalty.</b>
          <br />
          <br />
          At the same time users can be interested in different areas when it
          comes to products and experiences aw well. The values can be
          everything from
          <b>
            physical compatibility, time management, econonomy of use, fun,
            appropriateness,
          </b>
          etc. and those values where the other dimension we focused on in the
          mapping of the landscape.
          <br />
          <br />
        </div>

        <div class="col-12 col-sm-9">
          <h2>Outcome</h2>
          From our user tests and evaluations we can summarize the outcome of
          Formloupe in a few words.
          <b-img src="/static/images/outcome-formloupe.png" thumbnail fluid />
        </div>
      </div>

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
import navbar from "../components/navbar.vue";

export default {
  name: "Formloupe",
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
