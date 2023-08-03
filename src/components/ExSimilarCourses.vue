<script>
import courseCard from "./ExCourseCard.vue";

export default {
  components: {
    courseCard,
  },
  data() {
    return {
      courses: [
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          materials: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
      ],
      currentPagination: 1,
    };
  },
  methods: {
    changePagination(nextPage) {
      this.currentPagination = nextPage;
    },
  },
};
</script>

<template>
  <section class="sCourses">
    <div class="container sCourse_container">
      <h2 class="similars_title">Другие похожие курсы</h2>
      <div class="catalogue_right">
        <div class="catalogue_course-list">
          <courseCard
            v-for="(card, index) in courses"
            :key="`courseCards${index}`"
            :name="card.name"
            :image="card.image"
            :ownerImage="card.ownerImage"
            :ownerName="card.ownerName"
            :ownerStatus="card.ownerStatus"
            :materials="card.materials"
            :rating="card.rating"
            :cost="card.cost"
            :link="card.link"
          />
        </div>
        <div class="catalogue_pagination">
          <div
            v-for="item in 5"
            @click="changePagination(item)"
            :class="{ active: currentPagination == item }"
            class="catalogue_pagination-item"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.catalogue_right {
  width: 100%;
}
.similars_title {
  color: #181818;
  font-size: 38px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 30px;
}
.catalogue_course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.catalogue_pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}
.catalogue_pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf4ff;
  border-radius: 200px;
  width: 41px;
  height: 49px;
  font-weight: 500;
  font-size: 18px;
  color: #448fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
.catalogue_pagination-item:hover {
  opacity: 0.8;
}
.catalogue_pagination-item.active {
  background: #448fff;
  color: #ffffff;
}

@media only screen and (max-width: 768px) {
  .similars_title {
    font-size: 30px;
    line-height: 120%;
  }
}
</style>
