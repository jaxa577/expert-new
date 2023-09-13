<script>
import infoCard from "/src/components/vacancy/ExInfoCard.vue";
import mainBtn from "/src/components/ExMainBtn.vue";
export default {
  components: {
    infoCard,
    mainBtn,
  },
};
</script>

<template>
  <main>
    <section class="vac_info">
      <div class="container-fluid vac_info-container">
        <div class="vac_info-back">
          <button class="back_btn">Назад к списку вакансий</button>
        </div>
        <div class="vac_info-right">
          <div class="vac_info-main">
            <h2 class="vac_info-title">
              Мененджер по маркетингу и продвижению
            </h2>
            <p class="vac_info-location">
              <img src="/images/pin.svg" alt="" />
              Tashkent
            </p>
            <div class="vac_info-list">
              <infoCard name="Зарплата" value="16 000 000 сум" />
              <infoCard name="Тип занятости" value="Работа в офисе" />
              <infoCard name="Требуемый опыт работы" value="1-3 года" />
              <infoCard name="Требуемое образование" value="Высшее" />
            </div>

            <div class="vac_info-about">
              <div class="vac_about-org">
                <img src="/images/owner.png" alt="" />
                <div>
                  <h3>Real Soft Academy</h3>
                  <p>Компания <span>Ташкент</span></p>
                </div>
              </div>
              <div class="vac_about-extra">
                <div class="vac_extra-item">
                  <p class="vac_extra-name">Опубликованно</p>
                  <h3 class="vac_extra-value">Maй 30, 2023</h3>
                </div>
                <div class="vac_extra-item">
                  <p class="vac_extra-name">Посмотрели</p>
                  <h3 class="vac_extra-value">1 234 человек</h3>
                </div>
              </div>
            </div>

            <div class="vac_info-details">
              <h3 class="vac_details-title">Обязанности</h3>
              <ul class="vac_details-list">
                <li class="vac_details-item">Опыт работы 3 года 2 месяца</li>
                <li class="vac_details-item">Организация</li>
                <li class="vac_details-item">Город организации</li>
                <li class="vac_details-item">Сфера деятельности организации</li>
                <li class="vac_details-item">Сайт компании</li>
                <li class="vac_details-item">Начало работы дд.мм.гг</li>
                <li class="vac_details-item">Окончание работы дд.мм.гг</li>
                <li class="vac_details-item">По настоящее время</li>
                <li class="vac_details-item">Должность в организации</li>
                <li class="vac_details-item">Обязанности на рабочем месте</li>
                <li class="vac_details-item">Добавить место работы</li>
              </ul>
            </div>
            <div class="vac_info-details">
              <h3 class="vac_details-title">Требования</h3>
              <ul class="vac_details-list">
                <li class="vac_details-item">Опыт работы 3 года 2 месяца</li>
                <li class="vac_details-item">Организация</li>
                <li class="vac_details-item">Город организации</li>
                <li class="vac_details-item">Сфера деятельности организации</li>
                <li class="vac_details-item">Сайт компании</li>
                <li class="vac_details-item">Начало работы дд.мм.гг</li>
                <li class="vac_details-item">Окончание работы дд.мм.гг</li>
                <li class="vac_details-item">По настоящее время</li>
                <li class="vac_details-item">Должность в организации</li>
                <li class="vac_details-item">Обязанности на рабочем месте</li>
                <li class="vac_details-item">Добавить место работы</li>
              </ul>
            </div>
            <div class="vac_info-details">
              <h3 class="vac_details-title">Условия</h3>
              <ul class="vac_details-list">
                <li class="vac_details-item">Опыт работы 3 года 2 месяца</li>
                <li class="vac_details-item">Организация</li>
                <li class="vac_details-item">Город организации</li>
                <li class="vac_details-item">Сфера деятельности организации</li>
                <li class="vac_details-item">Сайт компании</li>
                <li class="vac_details-item">Начало работы дд.мм.гг</li>
                <li class="vac_details-item">Окончание работы дд.мм.гг</li>
                <li class="vac_details-item">По настоящее время</li>
                <li class="vac_details-item">Должность в организации</li>
                <li class="vac_details-item">Обязанности на рабочем месте</li>
                <li class="vac_details-item">Добавить место работы</li>
              </ul>
            </div>

            <div class="vac_info-reqs">
              <h3 class="vac_details-title">Требования к знаниям языков</h3>
              <div class="vac_reqs-list">
                <div class="vac_reqs-item">
                  <h4 class="vac_reqs-item-name">Русский</h4>
                  <p class="vac_reqs_item-value">A1-Начальный</p>
                </div>
                <div class="vac_reqs-item">
                  <h4 class="vac_reqs-item-name">Английский</h4>
                  <p class="vac_reqs_item-value">B2-Продвинутый</p>
                </div>
              </div>
            </div>
          </div>
          <div class="vac_info-btns">
            <mainBtn content="Откликнутся" />
            <button class="favourite_btn">
              <img width="18" src="/images/heart_favorite.svg" alt="" />
              Добавить в избранное
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.vac_info {
  padding: 30px 0;
}
.vac_info-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.vac_info-back {
  min-width: fit-content;
}
.back_btn {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 10px 20px;
  color: var(--3, #606060);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
}
.vac_info-right {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  justify-content: flex-end;
  width: 100%;
}
.vac_info-main {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 40px 20px;
  max-width: 920px;
  width: 100%;
}
.vac_info-title {
  color: var(--2, #1a1a1a);
  font-size: 36px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 20px;
}
.vac_info-location {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--1, #06f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.vac_info-list {
  margin-top: 30px;
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
}
.vac_info-about {
  border-radius: 10px;
  border: 1px solid var(--4, #f3f3f3);
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 40px;
}
.vac_about-org {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
}
.vac_about-org img {
  min-width: 46px;
  max-width: 46px;
  width: 46px;
  min-height: 46px;
  max-height: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
}
.vac_about-org h3 {
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
}
.vac_about-org p {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  display: flex;
  align-items: center;
  gap: 5px;
}
.vac_about-org p span {
  color: var(--3, #606060);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
}
.vac_about-extra {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  width: 100%;
}
.vac_extra-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.vac_extra-name {
  color: var(--3, #606060);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
}
.vac_extra-value {
  color: var(--2, #1a1a1a);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
}
.vac_info-details {
  margin-bottom: 40px;
}
.vac_details-title {
  color: var(--2, #1a1a1a);
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 28.6px */
}
.vac_details-list {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--4, #f3f3f3);
  padding: 20px;
  padding-left: 40px;
  margin-top: 20px;
  gap: 8px;
}
.vac_details-item {
  color: var(--3, #606060);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.vac_info-reqs {
}
.vac_reqs-list {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.vac_reqs-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f3f3f3;
}
.vac_reqs-item:first-child {
  border-top: 1px solid #f3f3f3;
}
.vac_reqs-item-name {
  min-width: 25%;
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
}
.vac_reqs_item-value {
  color: var(--3, #606060);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.vac_info-btns {
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.favourite_btn {
  border-radius: 10px;
  background: var(--4, #f3f3f3);
  padding: 10px 20px;
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 19.2px */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.3s ease;
}
.favourite_btn:hover {
  opacity: 0.6;
}
</style>
