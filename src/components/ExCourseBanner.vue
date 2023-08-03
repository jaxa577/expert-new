<script></script>

<template>
  <section class="cBanner">
    <div class="container cBanner_container">
      <div class="cBanner_desc">
        <h2 class="cBanner_title">Как проходит обучение на платформе?</h2>
        <p class="cBanner_text">
          Platforma bilan tanishing. Expert platformasi-bu biz doimiy ravishda
          takomillashtirib boradigan kompaniyaning o'z rivojlanishi. Sizni
          video, amaliy topshiriqlar va kuratorlar bilan muloqot kutmoqda.
          Materiallarga kirish kursni sotib olgandan so'ng darhol ochiladi.
        </p>
      </div>
      <div class="cBanner_video">
        <img class="cBanner_img" src="/images/design.png" alt="" />
        <button class="cBanner_play-btn">
          <img src="/images/play.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style>
.cBanner {
  margin-bottom: 90px;
}
.cBanner_container {
  display: flex;
  align-items: center;
  gap: 20px;
}
.cBanner_desc {
  width: calc(50% - 10px);
}
.cBanner_title {
  font-weight: 500;
  font-size: 38px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 30px;
}
.cBanner_text {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}
.cBanner_video {
  position: relative;
  width: calc(50% - 10px);
  background: #448fff;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 53px 0;
}
.cBanner_play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  transition: all 0.3s ease;
}
.cBanner_play-btn:hover {
  opacity: 0.8;
}
.cBanner_play-btn img {
  margin-left: 4px;
}
@media only screen and (max-width: 1024px) {
  .cBanner_container {
    flex-direction: column;
  }
  .cBanner_desc,
  .cBanner_video {
    width: 100%;
  }
  .cBanner_img {
    width: calc(100% - 100px);
  }
}
@media only screen and (max-width: 768px) {
  .cBanner_title {
    font-size: 30px;
    line-height: 120%;
  }
  .cBanner_text {
    font-size: 18px;
    line-height: 150%;
  }
}
@media only screen and (max-width: 475px) {
  .cBanner_img {
    width: calc(100% - 70px);
  }
}
</style>
