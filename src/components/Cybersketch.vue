<template>
  <div>
    <navbar />
    <div class="project">
      <div class="row m-4">
        <h2 class="special-font">CyberSketch.</h2>
      </div>

      <div class="row m-3">
        <div class="col-12 col-sm-9">
          <b-img src="/static/images/cybersketch-header.png" thumbnail fluid />

          The challenge of this project was to solve the problems of handheld
          controllers for VR and specialised hardware setups by creating a new
          rich input structure. To demonstrate that, we designed and developed a
          tool for sketching and modelling in 3D.
          <br />
          <br />
          The time frame of this research project was eight weeks, half-time, in
          partnership with
          <a target="_blank" href="https://danielroeven.com/">
            Daniel Roeven.</a
          >
          Read our full paper
          <a target="_blank" href="/static/pdf/CyberSketch_Report.pdf">here</a>.
          <br />
          <br />
          <div class="resp-container">
            <iframe
              class="resp-iframe"
              src="https://player.vimeo.com/video/272779701"
              width="640"
              height="360"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="col-12 col-sm-9">
          <h4>The Problem</h4>
          It is no secret that current VR controllers require complex and
          expensive hardware setup. Those controllers are limited in terms of
          rich interaction possibilities. Problems include reliable and precise
          tracking, user fatigue (the gorilla-arm effect), and practical setup.
        </div>

        <div class="col-12 col-sm-9">
          <h4>The Concept</h4>
          We propose the touchscreen as an input device for AR and VR: it
          reliably and accurately captures input, commercially available
          technologies allow for rich interaction, and it does not require an
          elaborate setup. The prototype is a 3D sketching tool, allowing users
          to quickly model 3D artefacts in a sketchy and exploratory fashion.
          Envisioned users are 3D designers, for example architects, industrial
          designers, and CG modellers.
        </div>

        <div class="col-12 col-sm-9">
          <h4>The Design Process</h4>
          Responsibilities covered during this design process were; VR Research,
          Interaction design for VR, Prototyping in iOS with Swift and Unreal
          Engine, UX Evaluations.
          <div class="row">
            <div class="col">
              <b>Ideation:</b> sketch with AR concept
              <b-img
                src="/static/images/cybersketch/ARsketch.jpeg"
                thumbnail
                fluid
              />
            </div>
            <div class="col">
              <b>Ideation:</b> sketch with concept using primitives
              <b-img
                src="/static/images/cybersketch/SRsketch2.png"
                thumbnail
                fluid
              />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <b>Bodystorming</b> session
              <b-img
                src="/static/images/cybersketch/bodystorming.jpg"
                thumbnail
                fluid
              />
            </div>
            <div class="col">
              <b>Evaluation</b> phase, some of the cards used
              <b-img
                src="/static/images/cybersketch/evaluation.png"
                thumbnail
                fluid
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-9">
          <h4>The Prototype</h4>
          The prototype setup consists of a VR headset connected to a computer
          running a VR application. Also connected to the computer is the
          multitouch tablet, through which the primary interaction will take
          place. The position of the tablet in the real world is synchronized
          with a virtual representation of the tablet in the virtual world. See
          the full description of the prototype in the video above.
        </div>

        <div class="col-12 col-sm-9">
          <div class="row">
            <div class="col">
              <b>VR headset and tablet input</b>
              <b-img
                src="/static/images/cybersketch/in-action.png"
                thumbnail
                fluid
              />
            </div>
            <div class="col">
              <b>Setup</b> of the system
              <b-img
                src="/static/images/cybersketch/Setup-digital.png"
                thumbnail
                fluid
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-9">
          <div class="row">
            <div class="col">
              <b>Interaction gestures</b>
              <b-img
                src="/static/images/cybersketch/Gestures.png"
                thumbnail
                fluid
              />
            </div>
            <div class="col">
              <b>VR UI</b>
              <b-img
                src="/static/images/cybersketch/VRinterface.png"
                thumbnail
                fluid
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-9">
          <h4>The Evaluation</h4>
          We performed an UX evaluation on a group of fellow interaction design
          students. The evaluation consisted of three different steps; moderated
          task test where the participants were asked to create different types
          of 3D models, questionnaire using the microsoft product reaction cards
          (to determine the UX and desirability of our system), and ended on an
          follow-up interview.
        </div>

        <div class="col-12 col-sm-9">
          Some positive adjectives used to describe our system were:
          "Straightforward, Clean, Engaging, Entertaining, Approachable,
          Creative”. Some negative adjectives were: unrefined, difficult, and
          inconsistent. However, the follow-up interview showed that the users
          wanted to make use of all three dimension of freedom in VR but felt
          constrained by the 2D tablet. Since the benefits of the tablet’s
          accuracy and lack of arm fatigue wasn’t clear enough, further research
          work would focus on conveying that more.
        </div>

        <div class="col-12 col-sm-9">
          <b-img src="/static/images/cybersketch/logocybersketch.png" fluid />
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
  name: "Cybersketch",
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
