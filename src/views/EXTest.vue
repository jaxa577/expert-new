<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
import mainBanner from "../components/ExBanner.vue";
import TestCard from "../components/ExTestCard.vue";
import ExTestList from "../components/ExTestList.vue";
import ExTestCatalogue from "../components/ExTestCatalogue.vue";

export default {
    components: {
        mainHeader,
        mainFooter,
        mainBanner,
        ExTestCatalogue,
        TestCard,
        ExTestList,
    },
};
</script>

<template>
    <mainHeader />

    <main>
        <mainBanner
            currentPage="Психологические тесты и диагностика"
            title="Психологические тесты и диагностика"
            firstLink="#!"
            secondLink="#!"
            firstLinkText="Начать поиск"
            secondLinkText="Добавить свое тестирование"
            bannerImage="briefcase.svg"
            class="banner-item"
        />
        <ExTestList />
        <ExTestCatalogue />
    </main>

    <mainFooter />
</template>

<style></style>
