import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/ExHome.vue";
import Courses from "../views/EXCourseCatalogue.vue";
import CoursesInfo from "../views/EXCourseInfo.vue";
import VacanyResume from "../views/ExVacancyResume.vue";
import VacanyInfo from "../views/ExVacancyInfo.vue";
import Test from "../views/EXTest.vue";
import login from "../views/ExLogin.vue";
import profile from "../views/ExProfile.vue";
import test from "../views/test.vue";
import vacancyPlatform from "../views/vacancy/ExVacancy.vue";
import vacancyOrgForm from "../views/vacancy/ExVacancyOrgFrom.vue";
import vacancyInfo from "../views/vacancy/ExVacancyInfo.vue";
import resume from "../views/resume/ExResume.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "courses",
      component: Courses,
    },
    {
      path: "/about_course",
      name: "about_course",
      component: CoursesInfo,
    },
    {
      path: "/vacancy_resume",
      name: "vacancy_resume",
      component: VacanyResume,
    },
    {
      path: "/about_vacancy",
      name: "about_vacancy",
      component: VacanyInfo,
    },
    {
      path: "/psyco_test",
      name: "psyco_test",
      component: Test,
    },
    {
      path: "/login",
      name: "login",
      component: login,
    },
    {
      path: "/test",
      name: "test",
      component: test,
    },
    {
      path: "/profile",
      name: "profile",
      component: profile,
    },
    {
      path: "/carer_vacancy",
      name: "Carer vacancy",
      component: vacancyPlatform,
    },
    {
      path: "/carer_vacancy_org_form",
      name: "Carer vacancy organizition",
      component: vacancyOrgForm,
    },
    {
      path: "/about_vacancy_platform",
      name: "About vacancy",
      component: vacancyInfo,
    },
    {
      path: "/resume/",
      name: "Resume",
      component: resume,
      children: {},
    },
  ],
});

export default router;
