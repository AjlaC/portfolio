<template>
  <div id="app">
    <div>
      <b-navbar class="b-navbar" toggleable="md" type="dark" variant="dark">

        <b-navbar-brand href="#">KrappiDesign</b-navbar-brand>

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="button" v-bind:active="tab === 1" v-on:click="tab = 1" href="#">Home</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container v-if="tab === 0" class="container-fluid" fluid>
    </b-container>

    <b-container v-if="tab === 1" class="container-fluid" fluid>
      <b-card tag="article" class="mb-5" style="margin: 30px auto;">
        <h2>Random title</h2>
      </b-card>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data() {
      return {
        tab: 0
      }
    },
    created() {},
    methods: {}
  }
</script>