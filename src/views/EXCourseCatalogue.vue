<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainBanner from "../components/ExBanner.vue";
import mainCourseTop from "../components/ExRecomendedCourses.vue";
import mainCourseCatalogue from "../components/ExCourseCatalogue.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
    mainBanner,
    mainCourseTop,
    mainCourseCatalogue,
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <mainBanner
      currentPage="Поиск курсов"
      title="Обучающие курсы по разным направлениям"
      firstLink="#!"
      secondLink="#!"
      firstLinkText="Начать поиск курсов"
      secondLinkText="Добавить свой курс"
      bannerImage="graduation-cap.svg"
      class="banner-item"
    />
    <mainCourseTop />
    <mainCourseCatalogue />
  </main>

  <mainFooter />
</template>

<style>
.banner-item {
  padding-top: 140px;
}
</style>
