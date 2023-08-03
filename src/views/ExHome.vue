<script>
import mainHeader from "../components/ExHeader.vue";
import mainHero from "../components/ExHero.vue";
import mainModules from "../components/ExModules.vue";
import mainNews from "../components/ExLatests.vue";
import mainFooter from "../components/ExFooter.vue";
export default {
  components: {
    mainHeader,
    mainHero,
    mainModules,
    mainNews,
    mainFooter,
  },
};
</script>

<template>
  <mainHeader />
  <main class="main">
    <mainHero id="hero" />
    <mainModules id="modules" />
    <mainNews id="news" />
  </main>
  <mainFooter id="footer" />
</template>

<style>
body {
  background: #f7f8f9;
}
</style>
