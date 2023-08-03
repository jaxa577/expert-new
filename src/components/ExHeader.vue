<script>
export default {
  data() {
    return {
      isScrolled: false,
      isNavOpened: false,
    };
  },

  mounted() {
    window.addEventListener("mousewheel", this.handleScroll);
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll(e) {
      if (window.pageYOffset > 80) {
        this.isScrolled = true;
      } else if (
        e.wheelDelta >= 0 &&
        window.pageYOffset < 80 &&
        window.pageYOffset != 0
      ) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
    openMobileNav() {
      this.isNavOpened = !this.isNavOpened;
    },
  },
};
</script>

<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container header_container">
      <a href="/"><img src="/images/logo.svg" alt="logo" /></a>
      <div :class="{ active: isNavOpened }" class="header_left">
        <div class="header_nav-list">
          <a class="header_nav-item" href="#hero">
            <p data-text="О нас" class="header_nav-item-txt">О нас</p>
          </a>

          <a class="header_nav-item" href="#modules">
            <p data-text="Модули" class="header_nav-item-txt">Модули</p>
          </a>
          <a class="header_nav-item" href="#news">
            <p data-text="Новости" class="header_nav-item-txt">Новости</p>
          </a>
          <a class="header_nav-item" href="#footer">
            <p data-text="Контакты" class="header_nav-item-txt">Контакты</p>
          </a>
        </div>

        <div class="header_login">
          <div class="header_lang">
            <img src="/images/lang_glob.svg" alt="language" />
            <p class="lang_text">Русский</p>
            <img src="/images/arrow_bottom.svg" alt="arrow" />
          </div>
          <a class="header_login-link" href="#!">Вход. Регистрация</a>
        </div>
      </div>
      <button class="header_menu-btn" @click="openMobileNav">
        <img
          :class="{ active: !isNavOpened }"
          class="header_menu-btn-img"
          src="/images/menu.svg"
          alt="menu btn"
        />
        <img
          :class="{ active: isNavOpened }"
          class="header_menu-btn-img"
          src="/images/cross.svg"
          alt="menu btn"
        />
      </button>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 12px 0;
  backdrop-filter: blur(5px);
  width: 100%;
  transition: 0.4s;
}
.header.scrolled {
  background: #ffffff;
}
.header_container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header_left {
  display: flex;
  align-items: center;
  gap: 120px;
}
.header_nav-list {
  display: flex;
  align-items: center;
  gap: 26px;
}
.header_nav-item-txt {
  transition: transform 0.3s;
  transform-origin: 50% 0;
  transform-style: preserve-3d;
  position: relative;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #181818;
}
.header_nav-item-txt::before {
  position: absolute;
  content: attr(data-text);
  transform: rotateX(-90deg);
  transform-origin: 50% 0;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  color: #448fff;
}
.header_nav-item {
  padding: 2px;
}
.header_nav-item:hover .header_nav-item-txt {
  transform: rotateX(90deg);
}
.header_login {
  display: flex;
  align-items: center;
  gap: 120px;
}
.header_lang {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.lang_text {
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
}
.header_login-link {
  background: #ecf4ff;
  border: 1px solid #448fff;
  border-radius: 200px;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #448fff;
  transition: all 0.3s ease;
}
.header_login-link:hover {
  opacity: 0.7;
  color: #448fff;
}
.header_menu-btn {
  position: relative;
  display: none;
  width: 30px;
  height: 30px;
}
.header_menu-btn-img {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotate(180deg) scale(0);
  opacity: 0;
  transition: all 0.5s ease;
}
.header_menu-btn-img.active {
  transform: rotate(-180deg) scale(1);
  opacity: 1;
}
@media only screen and (max-width: 1024px) {
  .header_left {
    position: fixed;
    top: 59px;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 40px 0;
    gap: 40px;
    background: #ffffff;
    width: 100%;
    height: calc(100vh - 59px);
    transform: translateX(100%);
    transition: all 0.5s ease;
  }
  .header_menu-btn {
    display: flex;
  }
  .header_left.active {
    transform: translate(0);
  }
  .header_nav-list {
    flex-direction: column;
  }
  .header_login {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
