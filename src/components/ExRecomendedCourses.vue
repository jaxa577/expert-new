<script>
import courseCard from "./ExCourseCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    courseCard,
    Swiper,
    SwiperSlide,
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
        },
      ],
    };
  },
};
</script>

<template>
  <section class="recommended">
    <div class="container recommended_container">
      <h2 class="recommended_title">Рекомендуемые курсы</h2>
      <swiper :slides-per-view="1" :space-between="20" :loop="false">
        <swiper-slide
          v-for="(card, index) in courses"
          :key="`top${index}`"
          class="latest_card"
        >
          <courseCard
            :name="card.name"
            :image="card.image"
            :ownerImage="card.ownerImage"
            :ownerName="card.ownerName"
            :ownerStatus="card.ownerStatus"
            :materials="card.materials"
            :rating="card.rating"
            :cost="card.cost"
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
.recommended_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 40px;
}
.cards_list {
}
@media only screen and (max-width: 768px) {
  .recommended_title {
    font-size: 38px;
    line-height: 120%;
  }
}
</style>
