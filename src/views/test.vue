<script>
export default {
  data() {
    return {
      isProfileOpened: false,
    };
  },
  methods: {
    openProfile() {
      this.isProfileOpened = !this.isProfileOpened;
    },
  },
};
</script>

<template>
  <div class="container profile_container">
    <div class="search_platform">
      <input
        placeholder="Поиск"
        class="search_platform-input"
        type="text"
        name=""
        id=""
      />
      <img class="search_image" src="/images/search-platform.svg" alt="" />
    </div>
    <div class="topbar_notifications">
      <button class="topbar_notifications-btn">
        <img src="/images/bell.svg" alt="" />
      </button>
      <button class="topbar_notifications-btn">
        <img src="/images/comment.svg" alt="" />
      </button>
      <button class="topbar_notifications-btn">
        <img src="/images/heart_notifications.svg" alt="" />
      </button>
    </div>
    <div :class="{ active: isProfileOpened }" class="new_profile-wrapper">
      <div @click="openProfile" class="new_profile-inner">
        <img src="/images/arrow_bottom.svg" alt="arrow" />
        <div class="new_profile-image">
          <img src="/images/about_course.png" alt="" />
        </div>
      </div>
      <div class="new_profile-menu">
        <div class="new_profile_menu-item">
          <img src="/images/user.svg" alt="" />
          Профиль
        </div>
        <div class="new_profile_menu-item">
          <img src="/images/settings.svg" alt="" />
          Настройки
        </div>
        <div class="new_profile_menu-item-lang">
          <div class="new_profile-language-top">
            <div>
              <img src="/images/RU.svg" alt="" />
              Язык: Русский
            </div>
            <img src="/images/arrow_bottom.svg" alt="" />
          </div>
          <div class="language_list">
            <div class="language_list-item">
              <img src="/images/RU.svg" alt="" />
              Русский
            </div>
            <div class="language_list-item">
              <img src="/images/UZ.svg" alt="" />
              Русский
            </div>
            <div class="language_list-item">
              <img src="/images/GB.svg" alt="" />
              Русский
            </div>
          </div>
        </div>
        <span class="profile_line"></span>
        <div class="new_profile_menu-item logout">
          Выйти из аккаунта
          <img src="/images/download.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profile_container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}
.topbar_notifications {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 60px;
}
.new_profile-wrapper {
  position: relative;
  max-height: 52px;
  height: 100%;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
}
.new_profile-wrapper.active {
  /* max-height: 400px; */
  overflow: visible;
}
.new_profile-inner {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}
.new_profile-image img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid #06f;
}
.new_profile-menu {
  position: absolute;
  top: calc(100% + 22px);
  right: calc(100% - 76px);
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  box-shadow: 0px 18px 88px -4px rgba(24, 39, 75, 0.14),
    0px 8px 28px -6px rgba(24, 39, 75, 0.12);
}
.new_profile_menu-item.logout {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #ff3838;
}
.new_profile_menu-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 10px;
  background: var(--4, #f3f3f3);
  width: 100%;
  padding: 10px 15px;
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  transition: all 0.3s ease;
}
.new_profile_menu-item:hover {
  opacity: 0.7;
}
.new_profile_menu-item img {
  width: 14px;
}
.search_platform {
  position: relative;
  max-width: 600px;
  width: 100%;
  margin-right: 200px;
}
.search_platform-input {
  background: none;
  outline: none;
  border: none;
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  padding: 10px 30px 10px 14px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.search_platform-input:focus {
  border: 1px solid #0066ff;
}
.search_image {
  position: absolute;
  cursor: pointer;
  right: 14px;
  top: 10px;
}
.new_profile_menu-item-lang {
  cursor: pointer;
  border-radius: 10px;
  background: var(--4, #f3f3f3);
  width: 100%;
  padding: 10px 15px;
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  transition: all 0.3s ease;
}
.new_profile-language-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}
.language_list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.language_list-item {
}
.profile_line {
  display: block;
  width: 100%;
  background: #f3f3f3;
  height: 2px;
  margin: 10px 0;
}
</style>
