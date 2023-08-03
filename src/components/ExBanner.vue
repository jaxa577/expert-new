<script>
export default {
  props: {
    currentPage: String,
    title: String,
    firstLink: String,
    secondLink: String,
    firstLinkText: String,
    secondLinkText: String,
    bannerImage: String,
  },
};
</script>

<template>
  <section class="banner">
    <div class="banner_container container">
      <div class="banner_top-links">
        <a class="banner_top-link" href="/"> Главная </a>
        <img src="/images/chevron-right.svg" alt="" />
        <a class="banner_top-link active" href="#!"> {{ currentPage }} </a>
      </div>
      <div class="banner_inner">
        <div class="banner_desc">
          <h2 class="banner_title">
            {{ title }}
          </h2>

          <div class="banner_btns">
            <a :href="firstLink" class="banner_btn"> {{ firstLinkText }} </a>
            <a :href="secondLink" class="banner_btn"> {{ secondLinkText }} </a>
          </div>
        </div>
        <div class="banner_image">
          <img
            :src="`/images/${bannerImage}`"
            class="banner_bck-img"
            alt="banner image"
          />
        </div>
        <img
          class="banner_circling"
          src="/images/back_circle.svg"
          alt="circling"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
}
.banner_container {
}
.banner_top-links {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}
.banner_top-link {
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
  display: flex;
  align-items: center;
  gap: 15px;
}
.banner_top-link.active {
  color: #181818;
}
.banner_inner {
  position: relative;
  display: flex;
  align-items: center;
  /* gap: 40px; */
  justify-content: space-between;
  background: linear-gradient(90.97deg, #448fff 0.65%, #437dd2 99.24%);
  border-radius: 30px;
  padding: 50px 40px;
  overflow: hidden;
}
.banner_desc {
  width: 75%;
  z-index: 9;
}
.banner_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  color: #ffffff;
  margin-bottom: 100px;
}
.banner_btns {
  display: flex;
  align-items: center;
  gap: 20px;
}
.banner_btn {
  background: #ffffff;
  border-radius: 200px;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #181818;
  border: 1px solid #ffffff;
  transition: all 0.3s ease;
}
.banner_btn:nth-child(2) {
  background: transparent;
  color: #ffffff;
}
.banner_btn:nth-child(1):hover {
  background: transparent;
  color: #ffffff;
}
.banner_btn:nth-child(2):hover {
  background-color: #ffffff;
  color: #181818;
}
.banner_image {
  position: absolute;
  top: 35px;
  right: 68px;
  z-index: 999;
}
.banner_circling {
  position: absolute;
  right: -35%;
  z-index: 0;
  filter: brightness(0) invert(0.8);
  animation: pulse-animation 7s infinite;
}
@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@media only screen and (max-width: 1024px) {
  .banner_desc {
    width: 100%;
    max-width: unset;
  }
  .banner_title {
    padding-bottom: 225px;
    font-size: 40px;
    line-height: 120%;
  }
  .banner_image {
    top: 50%;
    right: unset;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner_circling {
    top: 50%;
    right: unset;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner_btns {
    flex-direction: column;
  }
  .banner_btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner_inner {
    padding: 25px 15px;
  }

  @keyframes pulse-animation {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    50% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }
}
</style>
