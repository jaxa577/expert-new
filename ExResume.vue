<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import vacancyCard from "/src/components/vacancy";
import resumeCard from "/src/components/resume/ResumeCard.vue";
import vacancyUserCard from "/src/components/vacancy/ExVacancyUserCard.vue";
import vacancyilter from "/src/components/vacancy/ExFilterVacs.vue";
export default {
  components: {
    Swiper,
    SwiperSlide,
    vacancyUserCard,
    vacancyilter,
    resumeCard,
  },
  data() {
    return {
      tabs: [
        {
          name: "Резюме",
          id: 1,
        },
        {
          name: "Мои резюме",
          id: 2,
        },
      ],
      resumeList: [
        {
          id: 1,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 2,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 3,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 4,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 5,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 6,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
        },
        {
          id: 7,
          name: "Мененджер по маркетингу и продвижению",
          image: "/images/owner.png",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
          userName: "Khabibjonov Javokhir",
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
  <main class="vacancy">
    <section class="vac_tab">
      <div class="container-fluid vac_tab-container">
        <div class="vac_tab-inner">
          <h2>Резюме</h2>
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
            <router-link to="/carer_vacancy_org_form" class="vac_tab-addbtn">
              <img src="/images/plus.svg" alt="" />
              Создать резюме
            </router-link>
          </div>
        </div>
        <!-- <div v-if="currentTab == 2" class="vacancy_org">
          <div class="vacancy_org-info">
            <div class="vacancy_org-ava">
              <img src="/images/owner.png" alt="" />
            </div>
            <div>
              <p class="vacancy_org-prename">Моя организация</p>
              <h4 class="vacancy_org-name">RealSoft Academy</h4>
            </div>
          </div>
          <button class="vacancy_org-edit">Настроить</button>
        </div> -->
      </div>
    </section>

    <section v-if="currentTab == 1" class="vac_catalogue-rec">
      <div class="container-fluid vac_catalogue-container">
        <div class="vac_catalogue-main">
          <div class="vac_catalogue-recommends">
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
                v-for="(resume, index) in resumeList"
                :key="`resumeCards${index}`"
              >
                <resumeCard
                  :name="resume.name"
                  :id="resume.id"
                  :company="resume.company"
                  :salary="resume.salary"
                  :location="resume.location"
                  :changed="resume.date"
                  :viewed="resume.viewed"
                  :age="resume.age"
                  :experience="resume.experience"
                  :status="resume.status"
                  :userName="resume.userName"
                  :userImage="resume.image"
                />
              </swiper-slide>
            </swiper>
            <div class="top_layer-item"></div>
            <div class="top_layer-item"></div>
          </div>
          <div class="vac_catalogue">
            <h3 class="vac_catalogue-title">Остальные резюме каталога</h3>
            <div class="vac_catalogue-list">
              <resumeCard
                v-for="(resume, index) in resumeList"
                class="vacancy_card-item"
                :name="resume.name"
                :id="resume.id"
                :company="resume.company"
                :salary="resume.salary"
                :location="resume.location"
                :changed="resume.date"
                :viewed="resume.viewed"
                :age="resume.age"
                :experience="resume.experience"
                :status="resume.status"
                :userName="resume.userName"
                :userImage="resume.image"
              />
            </div>
          </div>
        </div>

        <vacancyilter class="vacancy_catalogue-filter" />
      </div>
    </section>

    <section v-else-if="currentTab == 2" class="vacancy_user">
      <div class="container-fluid">
        <div class="vac_catalogue">
          <div class="vac_catalogue-list">
            <vacancyUserCard
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
              :respondedCoutn="vacancy.respsondCount"
              :vacancyStatus="vacancy.isActive"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="vac_catalogue">
  <div class="vac_catalogue">
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
</section> -->
  </main>
</template>

<style>
.vacancy {
  padding: 30px 0;
}
.container-fluid {
  width: 100%;
  padding: 0 20px;
}
.vac_tab-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
}
.vac_catalogue-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}
.vacancy_catalogue-filter {
  min-width: 20%;
  max-width: 20%;
  width: 20%;
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
.vacancy_org {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 450px;
  width: 100%;
}
.vacancy_org-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.vacancy_org-ava img {
  width: 50px;
  max-width: 50px;
  min-width: 50px;
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  object-fit: cover;
}
.vacancy_org-prename {
  color: var(--3, #606060);
  font-size: 12px;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  margin-bottom: 5px;
}
.vacancy_org-name {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
}
.vacancy_org-edit {
  border-radius: 10px;
  background: var(--11, #e5f0ff);
  padding: 10px 20px;
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  color: var(--1, #06f);
  font-size: 12px;
  transition: all 0.3s ease;
}
.vacancy_org-edit:hover {
  opacity: 0.7;
}

/* ------------------------- VACANCY RECOMMENDS ------------------------- */
.vac_catalogue-rec {
  margin-top: 50px;
}
.container-fluid {
}
.vac_catalogue-main {
  width: calc(80% - 20px);
  max-width: calc(80% - 20px);
  min-width: calc(80% - 20px);
}
.vac_catalogue-recommends {
  position: relative;
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
