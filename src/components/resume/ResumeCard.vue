<script>
export default {
  props: {
    userName: String,
    userImage: String,
    name: String,
    salary: String,
    status: String,
    age: String,
    experience: String,
    location: String,
    changed: String,
    viewed: String,
    id: Number,
  },
};
</script>
<template>
  <a href="#!">
    <div class="res_card">
      <button class="vacancy_card-like">
        <img src="/images/heart_favorite.svg" alt="" />
      </button>
      <h3 class="res_card-title">{{ name }}</h3>
      <h3 class="res_card-title">
        {{ salary }}
        <span class="res_card-currency">Сум/мес.</span>
      </h3>
      <div class="res_card-personals">
        <div class="res_user">
          <div class="res_user-left">
            <img :src="userImage" alt="" />
            <div class="res_card-user-personal">
              <h4>{{ userName }}</h4>
              <p>
                {{ age }} лет <span> {{ location }} </span>
              </p>
            </div>
          </div>
          <p class="res_card-status-value">{{ status }}</p>
        </div>
        <div class="res_user-extra">
          <p class="res_user-extra-label">Опыт работы</p>
          <h4 class="res_user-extra-value">{{ experience }}</h4>
        </div>
        <div class="res_user-extra">
          <p class="res_user-extra-label">Место жительства</p>
          <h4 class="res_user-extra-value">{{ location }}</h4>
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
      <div class="res_user-btns">
        
      </div>
    </div>
  </a>
</template>

<style scoped>
.res_card {
  padding: 20px 16px;
  background: #ffffff;
  border-radius: 20px;
  max-width: unset;
  width: 100%;
}
.vacancy_card-like {
  position: absolute;
  right: 20px;
  top: 20px;
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
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px;
  padding-right: 45px;
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
  padding: 14px 0;
  border-bottom: 1px solid #f7f8f9;
  border-top: 1px solid #f7f8f9;
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
.res_user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.res_user-left {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 60%;
  overflow: hidden;
}
.res_user-left img {
  width: 40px;
  min-width: 40px;
  max-width: 40px;
  height: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.res_card-user-personal h4 {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 5px;
  text-overflow: ellipsis;
}
.res_card-user-personal p {
  color: var(--2, #1a1a1a);
  font-size: 12px;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  display: flex;
  align-items: center;
  gap: 5px;
}
.res_card-user-personal p span {
  color: var(--3, #606060);
}
.res_card-status-value {
}
.res_user-extra {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.res_user-extra-label {
  color: var(--3, #606060);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.res_user-extra-value {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
</style>
