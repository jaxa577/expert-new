<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainCourseHero from "../components/ExCourseHero.vue";
import mainCourseLearn from "../components/ExCourseLearn.vue";
import mainBckg from "../components/ExBckg.vue";
import mainMaterials from "../components/ExCourseMaterials.vue";
import mainFaq from "../components/ExCourseFaqs.vue";
import mainCourseBanner from "../components/ExCourseBanner.vue";
import mainSimilarCourses from "../components/ExSimilarCourses.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
    mainCourseHero,
    mainCourseLearn,
    mainBckg,
    mainMaterials,
    mainFaq,
    mainCourseBanner,
    mainSimilarCourses,
  },
};
</script>

<template>
  <mainHeader />
  <mainBckg />
  <main>
    <mainCourseHero />
    <mainCourseLearn />
    <mainMaterials />
    <mainFaq />
    <mainCourseBanner />
    <mainSimilarCourses />
  </main>

  <mainFooter />
</template>

<style>
body {
  background: #f7f8f9;
}
</style>
