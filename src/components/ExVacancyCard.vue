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
  },
};
</script>

<template>
  <div class="vacancy_card">
    <h3 class="vacancy_card-title">{{ name }}</h3>
    <h3 class="vacancy_card-title">
      {{ salary?.toLocaleString() }}
      <span class="vacancy_card-currency">Сум/мес.</span>
    </h3>
    <div class="vacancy_card_extra">
      <img class="vacancy_card-extra-image" src="/images/owner.png" alt="" />
      <div>
        <h4 class="vacancy_card-extra-title">{{ company }}</h4>
        <div class="vacancy_card-extra-btm">
          <p class="vacancy_card-status">Компания</p>
          <ul>
            <li class="vacancy_card-location">{{ location }}</li>
          </ul>
        </div>
      </div>
    </div>
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
    <a href="/about_vacancy" class="vacancy_card-btn">Откликнуться</a>
  </div>
</template>

<style scoped>
.vacancy_card {
  padding: 30px 16px;
  background: #ffffff;
  border-radius: 20px;
  max-width: 285px;
}
.vacancy_card-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #181818;
  gap: 8px;
  margin-bottom: 14px;
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
  color: #448fff;
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
.vacancy_card-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
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
  background: #ffffff;
  border: 1px solid #448fff;
  border-radius: 200px;
  padding: 10px 0;
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
</style>
