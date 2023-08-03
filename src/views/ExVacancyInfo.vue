<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainHero from "../components/ExVacancyHero.vue";
import mainVacancyInfo from "../components/ExVacancyMore.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
    mainHero,
    mainVacancyInfo,
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <mainHero />
    <mainVacancyInfo />
  </main>

  <mainFooter />
</template>

<style></style>
