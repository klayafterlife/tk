<template>
  <div id="container">
    <nav-header />

    <div class="container">
      <h1 class="mb-5">Text Kepler</h1>

      <intro v-show="tab === 0" @connected="tab = 1" />

      <minting v-if="tab === 1" />
    </div>
  </div>
</template>

<script>
import NavHeader from '@/components/NavHeader.vue';
import Intro from '@/components/Intro.vue';
import Minting from '@/components/Minting.vue';

export default {
  components: {
    NavHeader,
    Intro,
    Minting
  },

  data() {
    return {
      tab: 0
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'neo';
    src: url('/neodgm.ttf') format('truetype');
}

#container {
  font-family: 'neo';
  width: 100vw;
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.2rem;
}

.container {
  margin-top: 25vh;
  margin-bottom: 25vh;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 0.3rem solid white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  min-height: 30vh;
  max-width: 650px;
}

.link {
  color: white;
  text-decoration: underline;
  cursor: pointer;
}

#header {
  position: absolute;
  top: 2rem;
  /* font-size: 1rem; */
}

a:hover {
  color: white;
}
</style>
