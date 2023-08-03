<script>
export default {
    props: {
        name: String,
        salary: String,
        status: String,
        age: String,
        experience: String,
        location: String,
        changed: String,
        viewed: String,
        id: Number,
    }
}
</script>

<template>
  <a href="#!">
    <div class="res_card">
      <h3 class="res_card-title">{{ name }}</h3>
      <h3 class="res_card-title">
        {{ salary }}
        <span class="res_card-currency">Сум/мес.</span>
      </h3>
      <div class="res_card-status-wrapper">
        <h4 class="res_card-status">Статус</h4>
        <p class="res_card-status-value">{{ status }}</p>
      </div>
      <div class="res_card-personals">
        <div class="res_card-personals-item">
          <h4 class="res_card-personals-title">Возраст</h4>
          <p class="res_card-personals-text">{{ age }}</p>
        </div>
        <div class="res_card-personals-item">
          <h4 class="res_card-personals-title">Опыт работы</h4>
          <p class="res_card-personals-text">{{ experinece }}</p>
        </div>
        <div class="res_card-personals-item">
          <h4 class="res_card-personals-title">Место жительства</h4>
          <p class="res_card-personals-text">{{ location }}</p>
        </div>
      </div>
      <div class="res_card-extra">
        <div class="res_card-extra-item">
          <h4 class="res_card-extra-title">Обновлено</h4>
          <p class="res_card-extra-text">{{ changed }}</p>
        </div>
        <div class="res_card-extra-item">
          <h4 class="res_card-extra-title">Посмотрели</h4>
          <p class="res_card-extra-text">{{ viewed }}</p>
        </div>
      </div>
    </div>
  </a>
</template>

<style>
.res_card {
  padding: 20px 16px;
  background: #ffffff;
  border-radius: 20px;
  max-width: 285px;
  width: 100%;
}
.res_card-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 14px;
}
.res_card-currency {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5a5a5a;
}
.res_card-status-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #f7f8f9;
  border-top: 1px solid #f7f8f9;
  margin-bottom: 14px;
}
.res_card-status {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.res_card-status-value {
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: #448fff;
  background: #ecf4ff;
  border-radius: 200px;
  padding: 6px 12px;
}
.res_card-personals {
  padding-bottom: 14px;
  border-bottom: 1px solid #f7f8f9;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.res_card-personals-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.res_card-personals-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}

.res_card-personals-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #181818;
}
.res_card-extra {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;
}
.res_card-extra-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.res_card-extra-title {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #5a5a5a;
}
.res_card-extra-text {
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #181818;
}
</style>
