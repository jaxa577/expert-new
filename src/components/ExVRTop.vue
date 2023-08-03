<script>
import vacancyCard from "./ExVacancyCard.vue";
import resumeCard from "./ExResumeCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
  components: {
    vacancyCard,
    resumeCard,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      vacanyList: [
        {
          id: 1,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 2,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 3,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 4,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 5,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 6,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
      ],
      resumeList: [
        {
          id: 1,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 2,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 3,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 4,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 5,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 6,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
        {
          id: 7,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          status: "Ищу работу",
          location: "Ташкент",
          changed: "Maй 30, 2023",
          viewed: "1234",
          age: "28",
          experience: "4 года",
        },
      ],
      currentTab: 0,
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<template>
  <section class="recommended">
    <div class="container recommended_container">
      <div class="recommended_top">
        <h2 class="recommended_title">Рекомендуемые</h2>
        <div class="vr_top-tab">
          <div
            @click="changeTab(0)"
            :class="{ active: currentTab == 0 }"
            class="vr_top-tab-item"
          >
            Вакансии (12 421)
          </div>
          <div
            @click="changeTab(1)"
            :class="{ active: currentTab == 1 }"
            class="vr_top-tab-item"
          >
            Резюме (34 421)
          </div>
        </div>
      </div>
      <swiper :slides-per-view="1" :space-between="20" :loop="false">
        <swiper-slide
          v-if="currentTab == 0"
          v-for="(vacancy, index) in vacanyList"
          :key="`top${index}`"
          class="latest_card"
        >
          <vacancyCard
            :key="`vacancyCards${index}`"
            :name="vacancy.name"
            :id="vacancy.id"
            :company="vacancy.company"
            :salary="vacancy.salary"
            :location="vacancy.location"
            :date="vacancy.date"
            :viewed="vacancy.viewed"
          />
        </swiper-slide>
        <swiper-slide
          v-if="currentTab == 1"
          v-for="(resume, index) in resumeList"
          :key="`top${index}`"
          class="latest_card"
        >
          <resumeCard
            :key="`resumeCards${index}`"
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
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.recommended {
  margin-top: 80px;
}
.recommended_top {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}
.recommended_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  color: #181818;
}
.vr_top-tab {
  display: flex;
  align-items: center;
  gap: 20px;
  background: #ecf4ff;
  border-radius: 18px;
  padding: 10px;
}
.vr_top-tab-item {
  cursor: pointer;
  padding: 14px 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  border-radius: 14px;
  color: #448fff;
  transition: all 0.3s ease;
}
.vr_top-tab-item.active {
  background: #448fff;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
}
</style>
