<script></script>

<template>
  <section class="modules">
    <div class="container">
      <h2 class="modules_title">Модули и направления</h2>
      <div class="modules_list">
        <div class="modules_list-top">
          <div class="modules_top-item">
            <div>
              <h3 class="modules_item-title">
                Находите вакансии а так же публикуйте их
              </h3>
              <p class="modules_item-text">
                Платформа которая собрала в себе множество инструментов для
                профессиональной деятельности
              </p>
            </div>
            <a href="#!" class="modules_item-btn">
              14 682 Вакансий
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
            <img
              class="modules_item-img"
              src="/images/modules_bckg1.svg"
              alt=""
            />
          </div>
          <div class="modules_mini-item">
            <div>
              <h3 class="modules_mini-item-title">Получайте сертификацию</h3>
              <p class="modules_mini-item-text">
                Платформа которая собрала в себе множество инструментов
              </p>
            </div>
            <a href="#!" class="modules_item-btn">
              Подать заявку
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
          </div>
          <div class="modules_mini-item">
            <div>
              <h3 class="modules_mini-item-title">
                Психологические тесты и диагностика
              </h3>
              <p class="modules_mini-item-text">
                Платформа которая собрала в себе множество инструментов
              </p>
            </div>
            <a href="#!" class="modules_item-btn">
              Пройти тест
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
          </div>
        </div>

        <div class="modules_list-center">
          <div class="modules_mini-item">
            <div>
              <h3 class="modules_mini-item-title">Разные события и новости</h3>
              <p class="modules_mini-item-text">
                Платформа которая собрала в себе множество инструментов
              </p>
            </div>
            <a href="#!" class="modules_item-btn">
              12 342 Сообшеств
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
          </div>
          <div class="modules_big-item">
            <div>
              <h3 class="modules_item-title">
                Находите вакансии а так же публикуйте их
              </h3>
              <p class="modules_item-text">
                Платформа которая собрала в себе множество инструментов для
                профессиональной деятельности
              </p>
            </div>
            <a href="#!" class="modules_item-btn">
              14 682 Вакансий
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
            <img
              class="modules_item-img"
              src="/images/modules_line.svg"
              alt="line"
            />
          </div>
        </div>

        <div class="modules_list-botom">
          <div class="modules_top-item">
            <h3 class="modules_item-title">
              Обучайтесь на онлайн платформе и обучайте других пользователей
            </h3>
            <p class="modules_item-text">
              Платформа которая собрала в себе множество инструментов для
              профессиональной деятельности
            </p>
            <a href="#!" class="modules_item-btn">
              15 342 Курсов
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
            <img
              class="modules_item-img1"
              src="/images/modules_sharps.svg"
              alt=""
            />
          </div>
          <div class="modules_top-item">
            <h3 class="modules_item-title">
              Находите заказы и подрядчиков для фриланс заказов
            </h3>
            <p class="modules_item-text">
              Платформа которая собрала в себе множество инструментов для
              профессиональной деятельности
            </p>
            <a href="#!" class="modules_item-btn">
              12 342 Заказов
              <img
                class="modules_btn-img"
                src="/images/arrow-right.svg"
                alt="arrow"
              />
            </a>
            <img
              class="modules_item-img1"
              src="/images/modules_star.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.modules {
  padding-top: 120px;
  padding-bottom: 70px;
}
.modules_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  text-align: center;
  color: #181818;
  padding-bottom: 70px;
  /* background-color: rgba(247,248,249, 0.8); */
  background: linear-gradient(
    180deg,
    #f7f8f9 58.72%,
    rgba(247, 248, 249, 0.5) 100%
  );
}
.modules_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.modules_list-top {
  display: flex;
  gap: 20px;
}
.modules_top-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 8px 29px -6px rgba(24, 57, 75, 0.15),
    0px 18px 86px -4px rgba(84, 123, 169, 0.18);
  border-radius: 30px;
  padding: 40px 30px;
  min-height: 350px;
}
.modules_item-title {
  font-weight: 500;
  font-size: 28px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 20px;
}
.modules_item-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.modules_item-btn {
  width: fit-content;
  background: #ecf4ff;
  border-radius: 200px;
  padding: 16px 28px 16px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #448fff;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
}
.modules_item-btn:hover {
  color: #448fff;
  text-decoration: none;
}
.modules_btn-img {
  transition: all 0.3s ease;
}
.modules_item-btn:hover .modules_btn-img {
  transform: translateX(5px);
}
.modules_item-img {
  position: absolute;
  top: 0;
  right: 0;
}
.modules_mini-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 8px 29px -6px rgba(24, 57, 75, 0.15),
    0px 18px 86px -4px rgba(84, 123, 169, 0.18);
  border-radius: 30px;
  padding: 40px 20px;
  max-width: 285px;
  /* width: calc(25% + 40px); */
}
.modules_mini-item-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 20px;
  /* min-height: 350px; */
}
.modules_mini-item-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: #5a5a5a;
}
.modules_list-center {
  display: flex;
  gap: 20px;
}
.modules_big-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 8px 29px -6px rgba(24, 57, 75, 0.15),
    0px 18px 86px -4px rgba(84, 123, 169, 0.18);
  border-radius: 30px;
  padding: 40px 30px;
  min-height: 350px;
  width: 100%;
  overflow: hidden;
}
.modules_list-botom {
  display: flex;
  gap: 20px;
}
.modules_item-img1 {
  position: absolute;
  top: 50px;
  right: 0;
}
.dd {
  display: flex;
  align-items: center;
  justify-content: center;
}
.header {
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 1024px) {
  .modules_list-top,
  .modules_list-center,
  .modules_list-botom {
    flex-direction: column;
  }
  .modules_mini-item {
    max-width: unset;
    width: 100%;
  }
  .modules_item-img {
    display: none;
  }
}
</style>
