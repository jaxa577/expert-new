<script>
import ExTestCard from "./ExTestCard.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
    components: {
        ExTestCard,
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
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
                    rating: "4.5",
                    cost: "100 000",
                },
                {
                    name: "Графический дизайн",
                    image: "image1.png",
                    ownerImage: "owner.png",
                    ownerName: "Real Soft Academy",
                    ownerStatus: "Компания",
                    count: "10",
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
            <h2 class="recommended_title">Рекомендуемые тесты</h2>
            <swiper :slides-per-view="1" :space-between="20" :loop="false">
                <swiper-slide
                    v-for="(card, index) in courses"
                    :key="`top${index}`"
                    class="latest_card"
                >
                    <ExTestCard
                        :name="card.name"
                        :image="card.image"
                        :ownerImage="card.ownerImage"
                        :ownerName="card.ownerName"
                        :ownerStatus="card.ownerStatus"
                        :count="card.count"
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
</style>
