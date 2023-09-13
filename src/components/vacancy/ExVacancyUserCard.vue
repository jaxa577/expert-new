<script>
export default {
  props: {
    id: Number,
    name: String,
    salary: String,
    company: String,
    location: String,
    date: String,
    viewed: String,
    status: String,
    vacancyStatus: Boolean,
    respondedCoutn: Number,
  },
};
</script>

<template>
  <div class="vacancy_card">
    <button class="vacancy_card-like">
      <img src="/images/heart_favorite.svg" alt="" />
    </button>
    <h3 class="vacancy_card-title title">{{ name }}</h3>
    <p class="vacancy_card-status1">
      {{ status }}
    </p>
    <div class="vacancy_user-statuses">
      <div v-if="vacancyStatus" class="vacancy_user-status active">
        <img src="/images/circle-checked.svg" alt="" /> Активная
      </div>
      <div v-else class="vacancy_user-status inactive">Не активная</div>
    </div>
    <h3 class="vacancy_card-title">
      {{ salary?.toLocaleString() }}
      <span class="vacancy_card-currency">Сум/мес.</span>
    </h3>
    <div class="vacancy_info-wrapper">
      <div class="vacancy_card-info">
        <p class="vacancy_card-info-text">Опубликованно</p>
        <h4 class="vacancy_card-info-value">{{ date }}</h4>
      </div>
      <div class="vacancy_card-info">
        <p class="vacancy_card-info-text">Посмотрели</p>
        <h4 class="vacancy_card-info-value">
          {{ viewed?.toLocaleString() }} человек
        </h4>
      </div>
      <div class="vacancy_card-info">
        <p class="vacancy_card-info-text">Откликнулись</p>
        <h4 class="vacancy_card-info-value">
          {{ respondedCoutn?.toLocaleString() }} человек
        </h4>
      </div>
    </div>
    <div class="vacancy_card_extra">
      <img class="vacancy_card-extra-image" src="/images/owner.png" alt="" />
      <div>
        <h4 class="vacancy_card-extra-title">{{ company }}</h4>
        <div class="vacancy_card-extra-btm">
          <p class="vacancy_card-status">Компания</p>
        </div>
      </div>
    </div>
    <div class="vacancy_card-user-btns">
      <button class="vacancy_card-delete">Удалить вакансию</button>
      <button class="vacancy_card-edit-btn">Редактировать</button>
    </div>
  </div>
</template>

<style scoped>
.vacancy_card {
  position: relative;
  padding: 30px 16px;
  background: #ffffff;
  border-radius: 20px;
  /* max-width: 300px; */
  width: 100%;
}
.vacancy_card-like {
  position: absolute;
  right: 25px;
  top: 25px;
}
.vacancy_card-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #181818;
  gap: 8px;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px;
}
.vacancy_card-title.title {
  padding-right: 35px;
}
.vacancy_user-statuses {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.vacancy_user-status {
  border-radius: 200px;
  padding: 8.5px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 5px;
}
.vacancy_user-status.active {
  background: var(--11, #e5f0ff);
  color: var(--1, #06f);
}
.vacancy_user-status.inactive {
  background: var(--4, #f3f3f3);
  color: var(--3, #606060);
}
.vacancy_card-status1 {
  color: var(--3, #606060);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 15px;
}
.vacancy_card-currency {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5a5a5a;
}
.vacancy_card_extra {
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.vacancy_card-extra-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.vacancy_card-extra-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #06f;
}
.vacancy_card-status {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #181818;
}
.vacancy_card-location {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5a5a5a;
}
.vacancy_card-extra-btm {
  display: flex;
  align-items: center;
  gap: 20px;
}
.vacancy_info-wrapper {
  padding: 15px 0;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}
.vacancy_card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.vacancy_card-info-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5a5a5a;
}
.vacancy_card-info-value {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #181818;
}
.vacancy_card-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border-radius: 10px;
  background: var(--11, #e5f0ff);
  border: 1px solid transparent;
  padding: 10px 20px;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #448fff;
  transition: all 0.3s ease;
}
.vacancy_card-btn:hover {
  background: #448fff;
  color: #ffffff;
}
.vacancy_card-user-btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
.vacancy_card-delete {
  color: var(--1, #ff4c48);
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  transition: all 0.3s ease;
}
.vacancy_card-delete:hover {
  opacity: 0.6;
}
.vacancy_card-edit-btn {
  border-radius: 10px;
  border: 1px solid var(--1, #06f);
  background: var(--5, #fff);
  padding: 10px 20px;
  color: var(--1, #06f);
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  transition: all 0.3s ease;
}
.vacancy_card-edit-btn:hover {
  background-color: #06f;
  color: #fff;
}
</style>
