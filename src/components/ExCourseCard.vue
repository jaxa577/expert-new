<script>
export default {
  props: {
    name: String,
    image: String,
    ownerImage: String,
    ownerName: String,
    ownerStatus: String,
    materials: String,
    rating: String,
    cost: String,
    link: String,
  },
};
</script>

<template>
  <div class="course_card-wrapper" :href="link">
    <a :href="link" class="course_card">
      <div class="course_card-image">
        <img :src="`/images/${image}`" alt="course image" />
        <div class="course_card-like">
          <button>
            <img src="/images/heart.svg" alt="like" />
          </button>
        </div>
      </div>
      <div class="course_card-bottm">
        <h3 class="course_card-title">{{ name }}</h3>
        <div class="course_card-owner-info">
          <img
            class="course_owner-image"
            :src="`/images/${ownerImage}`"
            alt="course owner"
          />
          <div class="course_owner-desc">
            <h4 class="course_owner-name">{{ ownerName }}</h4>
            <p class="course_owner-status">{{ ownerStatus }}</p>
          </div>
        </div>
        <div class="course_card-extra-info">
          <div class="course_extra-info-item">
            <h4 class="course_extra-title">Кол. во уроков</h4>
            <p class="course_extra-value">{{ materials }} видео-уроков</p>
          </div>
          <div class="course_extra-info-item">
            <h4 class="course_extra-title">Общая оценка</h4>
            <p class="course_extra-value">
              <img src="/images/star.svg" alt="rating" />{{ rating }}
            </p>
          </div>
          <h3 class="course_card-cost">
            {{ cost }} <span class="course_card-currency">Cум</span>
          </h3>
        </div>
      </div>
    </a>
  </div>
</template>

<style>
.course_card {
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  max-width: 285px;
  width: 100%;
  display: block;
}
.course_card-image {
  position: relative;
}
.course_card-image img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
}
.course_card-like img {
  width: 24px;
  height: 24px;
}
.course_card-like {
  position: absolute;
  z-index: 99;
  top: 20px;
  right: 18px;
}
.course_card-bottm {
  padding: 18px 16px 20px 16px;
}
.course_card-title {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #181818;
  margin-bottom: 15px;
}
.course_card-owner-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.course_owner-desc {
  margin-bottom: 18px;
}
.course_owner-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.course_owner-name {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #448fff;
}
.course_owner-status {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #181818;
}
.course_card-extra-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.course_extra-info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  grid-area: 16px;
}
.course_extra-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.course_extra-value {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #181818;
  display: flex;
  align-items: center;
  gap: 6px;
}
.course_card-cost {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #181818;
}
.course_card-currency {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
  margin-left: 8px;
}
@media only screen and (max-width: 768px) {
  .course_card-wrapper {
    max-width: 400px;
    width: 100%;
  }
  .course_card {
    max-width: 400px !important;
    display: block;
  }
}
</style>
