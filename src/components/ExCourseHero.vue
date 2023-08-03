<script></script>

<template>
  <section class="cHero">
    <div class="container cHero_container">
      <div class="cHero_links">
        <a class="cHero_link" href="/">Главная</a>
        <img src="/images/chevron-right.svg" alt="arrow" />
        <a class="cHero_link" href="/courses">Поиск курсов</a>
        <img src="/images/chevron-right.svg" alt="arrow" />
        <a class="cHero_link active" href="#!">Страница курса</a>
      </div>
      <div class="cHero_main">
        <div class="cHero_desc">
          <h2 class="cHero_title">Platon dasturi bilan tanishish</h2>
          <p class="cHero_text">
            Platon - yirik elektron axborot tizimlari va ma'lumotlar bazalarini
            tez, sifatli, qo'shimcha sarf-xarajatlarsiz ishlab chiqish, boshqa
            axborot tizimlari bilan bog'lanish hamda mustaqil takomillashtirib
            borishga mo'ljallangan dasturiy mahsulot to'plami.
          </p>
          <div class="mob_hero-img">
            <img src="/images/about_course.png" alt="course image" />
          </div>
          <div class="cHero_extra">
            <div class="cHero_extra-main">
              <img class="cHero_extra-img" src="/images/owner.png" alt="" />
              <div>
                <h3 class="cHero_extra-title">Real Soft Academy</h3>
                <p class="cHero_extra-status">Компания</p>
              </div>
            </div>
            <div class="cHero_rating">
              <h3 class="cHero_rating-title">Общая оценка</h3>
              <p class="cHero_rating-text">
                <img src="/images/star.svg" alt="" />
                4.5
              </p>
            </div>
          </div>
          <div class="cHero_bottom">
            <a href="#!" class="cHero_btn">Записаться на курс</a>
            <h3 class="cHero_cost">
              10 000 000 <span class="cHero_currency">Cум</span>
            </h3>
          </div>
        </div>
        <div class="cHero_image">
          <img
            class="cHero_img"
            src="/images/about_course.png"
            alt="course image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cHero {
  padding-top: 125px;
  padding-bottom: 90px;
}
.cHero_links {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}
.cHero_link {
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
}
.cHero_link.active {
  color: #181818;
}
.cHero_main {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cHero_desc {
  width: calc(50% - 10px);
}
.cHero_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 20px;
}
.cHero_text {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}
.cHero_extra {
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 30px;
  background: #ffffff;
  border-radius: 20px;
  padding: 10px 20px;
  width: fit-content;
}
.cHero_extra-main {
  display: flex;
  align-items: center;
  gap: 10px;
}
.cHero_extra-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}
.cHero_extra-title {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #448fff;
}
.cHero_extra-status {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #181818;
}
.cHero_rating {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cHero_rating-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.cHero_rating-text {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #181818;
}
.cHero_bottom {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cHero_btn {
  background: #448fff;
  box-shadow: 0px 8px 18px -6px rgba(24, 39, 75, 0.12),
    0px 12px 42px -4px rgba(24, 39, 75, 0.12);
  border-radius: 200px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  padding: 16px 32px;
  border: 1px solid #448fff;
  transition: all 0.3s ease;
}
.cHero_btn:hover {
  background: transparent;
  color: #448fff;
}
.cHero_cost {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #181818;
  display: flex;
  align-items: center;
  gap: 8px;
}
.cHero_currency {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.cHero_image {
  width: calc(50% - 10px);
  height: 465px;
  border-radius: 30px;
  overflow: hidden;
}
.cHero_img {
  width: 100%;
  height: 465px;
  object-fit: cover;
  object-position: center;
}
.mob_hero-img {
  display: none;
}

@media only screen and (max-width: 1024px) {
  .cHero_image {
    display: none;
  }
  .mob_hero-img {
    width: 100%;
    display: block;
  }
  .mob_hero-img img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }
  .cHero_desc {
    width: 100%;
  }
  .cHero_text {
    margin-bottom: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .cHero {
    padding-top: 80px;
  }
  .mob_hero-img img {
    height: 300px;
  }
  .cHero_title {
    font-size: 38px;
    line-height: 120%;
  }
  .cHero_text {
    font-size: 14px;
    line-height: 150%;
  }
  .cHero_extra {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .cHero_bottom {
    flex-direction: column;
  }
  .cHero_btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cHero_links {
    flex-wrap: wrap;
  }
}
</style>
