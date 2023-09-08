<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import vacancyCard from "../components/ExCareerVacancy.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    vacancyCard,
  },
  data() {
    return {
      tabs: [
        {
          name: "Вакансии",
          id: 1,
        },
        {
          name: "Мои вакансии",
          id: 2,
        },
      ],
      vacanyList: [
        {
          id: 1,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
        {
          id: 2,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
        {
          id: 3,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
        {
          id: 4,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
        {
          id: 5,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
        {
          id: 6,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
          status: "Работа в офисе",
        },
      ],
      currentTab: 1,
    };
  },

  methods: {
    toggleTab(id) {
      this.currentTab = id;
    },
  },
};
</script>

<template>
  <main>
    <section class="vac_tab">
      <div class="container-fluid">
        <div class="vac_tab-inner">
          <h2>Вакансии</h2>
          <div class="vac_tab-inner-wrap">
            <div class="vac_tab-wrapper">
              <div
                v-for="(tab, index) in tabs"
                class="vac_tab-item"
                @click="toggleTab(tab.id)"
                :class="{ active: currentTab == tab.id }"
                :key="`vacTab${index}`"
              >
                {{ tab.name }}
              </div>
            </div>
            <button class="vac_tab-addbtn">
              <img src="/images/plus.svg" alt="" />
              Создать вакансию
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="vac_catalogue-rec">
      <div class="container-fluid">
        <div class="vac_catalogue-main">
          <div class="vac_catalogue-reccomends">
            <div class="vac_recommends-top">
              <h3 class="vac_reccomends-title">Expert.uz Рекомендует</h3>
            </div>
            <swiper
              class="vacancy_swiper"
              :slides-per-view="4"
              :space-between="20"
              :loop="false"
            >
              <swiper-slide
                class="vacancy_card-item"
                v-for="(vacancy, index) in vacanyList"
              >
                <vacancyCard
                  :id="vacancy.id"
                  :name="vacancy.name"
                  :salary="vacancy.salary"
                  :company="vacancy.company"
                  :location="vacancy.location"
                  :date="vacancy.date"
                  :viewed="vacancy.viewed"
                  :status="vacancy.status"
                />
              </swiper-slide>
            </swiper>
            <div class="top_layer-item"></div>
            <div class="top_layer-item"></div>
          </div>
        </div>

        <div class="vac_catalogue-filter"></div>
      </div>
    </section>

    <section class="vac_catalogue">
      <div class="container-fluid">
        <h3 class="vac_catalogue-title">Остальные вакансии каталога</h3>
        <div class="vac_catalogue-list">
          <vacancyCard
            v-for="(vacancy, index) in vacanyList"
            class="vacancy_card-item"
            :id="vacancy.id"
            :name="vacancy.name"
            :salary="vacancy.salary"
            :company="vacancy.company"
            :location="vacancy.location"
            :date="vacancy.date"
            :viewed="vacancy.viewed"
            :status="vacancy.status"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.vac_tab {
}
.container-fluid {
  width: 100%;
  padding: 0 20px;
}
.vac_tab-inner {
  display: flex;
  align-items: center;
  gap: 35px;
}
.vac_tab-inner h2 {
  color: var(--2, #1a1a1a);
  font-size: 36px;
  font-weight: 500;
  line-height: 130%; /* 46.8px */
}
.vac_tab-inner-wrap {
  display: flex;
  align-items: center;
  gap: 15px;
}
.vac_tab-wrapper {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  background: var(--11, #e5f0ff);
}
.vac_tab-item {
  color: var(--1, #06f);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.vac_tab-item.active {
  border-radius: 10px;
  background: var(--5, #fff);
}
.vac_tab-addbtn {
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 10px;
  background: var(--1, #06f);
  padding: 10px 20px;
  color: var(--5, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.vac_tab-addbtn:hover {
  background-color: #fff;
  color: #06f;
  border: 1px solid #06f;
}

/* ------------------------- VACANCY RECOMMENDS ------------------------- */
.vac_catalogue-rec {
  margin-top: 50px;
}
.container-fluid {
}
.vac_catalogue-main {
  display: flex;
  gap: 20px;
}
.vac_catalogue-reccomends {
  position: relative;
  /* max-width: 1400px; */
  padding: 30px 20px;
  border-radius: 10px;
  background: linear-gradient(100deg, #438af6 -0.44%, #1d2352 100%);
  overflow: hidden;
}
.vac_recommends-top {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
.vac_reccomends-title {
  color: var(--5, #fff);
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
}
.vacancy_swiper {
  user-select: none;
}
.vac_catalogue-filter {
}
.top_layer-item {
  position: absolute;
  top: calc(50%);
  width: 80px;
  /* height: 380px; */
  height: 100%;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #4388f2 0%, rgba(255, 255, 255, 0) 100%);
  z-index: 2;
}
.top_layer-item:nth-child(2n - 1) {
  left: -20px;
}
.top_layer-item:nth-child(2n) {
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #4388f2 100%);
  right: -20px;
}

.vac_catalogue {
  margin-top: 40px;
}
.vac_catalogue-title {
  color: var(--2, #1a1a1a);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 30px;
}
.vac_catalogue-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.vacancy_card-item {
  width: calc(25% - 17px) !important;
}
</style>
