<script setup>
import { RouterLink, RouterView } from 'vue-router'
import navbar from './components/navbar.vue'
import about from './components/about.vue'
import resume from './components/resume.vue'
import portfolio from './components/portfolio.vue'
import contact from './components/contact.vue'
</script>

<template>
  <div class="container">
    <navbar></navbar>
    <about id="about"></about>
    <resume id="resume"></resume>
    <portfolio id="portfolio"></portfolio>
    <contact id="contactMe"></contact>
    <!-- <RouterView /> -->
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #000 !important;
}

.marTB {
  padding: 100px 0px 0px 0px;
}

.title-shape {
  width: 200px;
  height: 20px;
  margin: 0 auto;
  color: #fff;
  opacity: 0.5;
}

.text-danger1 {
  color: #e51b49 !important;
}
</style>
