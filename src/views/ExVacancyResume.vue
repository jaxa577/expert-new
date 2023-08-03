<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainBanner from "../components/ExBanner.vue";
import mainVRCatalogue from "../components/ExVRCatalogue.vue";
import mainVRTop from "../components/ExVRTop.vue";
import test from "../components/ExResumeCard.vue";

export default {
  components: {
    mainHeader,
    mainFooter,
    mainBanner,
    mainVRCatalogue,
    mainVRTop,
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <mainBanner
      currentPage="Поиск Вакансий/Резюме"
      title="Находите вакансии и резюме на разные позиции"
      firstLink="#!"
      secondLink="#!"
      firstLinkText="Начать поиск Вакансий/Резюме"
      secondLinkText="Опубликовать Вакансий/Резюме"
      bannerImage="briefcase.svg"
      class="banner-item"
    />
    <mainVRTop />
    <mainVRCatalogue />
  </main>

  <mainFooter />
</template>

<style></style>
