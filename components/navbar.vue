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
            <b-nav-item to="/" class="button">Home</b-nav-item>
            <b-nav-item to="/about" class="button">About me</b-nav-item>
            <b-nav-item to="/portfolio" class="button">Portfolio</b-nav-item>
            <b-nav-item to="/contact" class="button">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
