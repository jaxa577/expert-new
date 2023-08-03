<script>
import mainHeader from "../components/ExHeader.vue";
import mainFooter from "../components/ExFooter.vue";
export default {
  components: {
    mainHeader,
    mainFooter,
  },

  data() {
    return {
      isLogin: false,
    };
  },

  methods: {
    goToLogin(id) {
      if (id == 1) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
};
</script>

<template>
  <mainHeader />

  <main>
    <section class="login">
      <div class="container login_container">
        <div class="cHero_links">
          <a class="cHero_link" href="/">Главная</a>
          <img src="/images/chevron-right.svg" alt="arrow" />
          <a class="cHero_link active" href="#!">Вход. Регистрация</a>
        </div>
        <div class="tab_wrapper">
          <div v-if="isLogin" class="login_tab" :class="{ active: isLogin }">
            <div class="login_top">
              <h2 @click="goToLogin(1)" class="login_title active">Вход</h2>
              <h2 @click="goToLogin(2)" class="login_title">Регистрация</h2>
              11
            </div>
            <div class="login_inputs">
              <div class="login_input-item">
                <label for="login">Логин</label>
                <input type="text" name="login" id="login" />
              </div>
              <div class="login_input-item">
                <label for="login_password">Пароль</label>
                <input type="password" name="password" id="login_password" />
              </div>
            </div>
            <button class="login_btn">Войти</button>
            <div class="login_or-line">
              <span class="login_line"></span>
              Или
              <span class="login_line"></span>
            </div>
            <div class="login_options">
              <button class="login_btn-item login_eri">
                <img src="/images/eri.png" alt="" />
                Вход через ЭЦП
              </button>
              <button class="login_btn-item login_goole">
                <img src="/images/google.svg" />
                Вход через Google
              </button>
              <button class="login_btn-item login_facebook">
                <img src="/images/facebook.svg" alt="" />
                Вход через Facebook
              </button>
            </div>
          </div>
          <div v-else class="login_tab-reg" :class="{ active: !isLogin }">
            <div class="login_top">
              <h2 @click="goToLogin(1)" class="login_title">Вход</h2>
              <h2 @click="goToLogin(2)" class="login_title active">
                Регистрация
              </h2>
            </div>
            <div class="reg_input-list">
              <div class="login_input-item">
                <label for="name">Имя</label>
                <input type="text" name="name" id="name" />
              </div>

              <div class="login_input-item">
                <label for="surname">Фамилия</label>
                <input type="text" name="surname" id="surname" />
              </div>
              <div class="login_input-item">
                <label for="bday">Дата рождения</label>
                <input type="date" name="bday" id="bday" />
              </div>
              <div class="login_input-item">
                <label for="phone">Номер телефона</label>
                <input type="tel" name="phone" id="phone" />
              </div>
              <div class="login_input-item">
                <label for="region">Место жительства</label>
                <input type="text" name="region" id="region" />
              </div>
              <div class="login_input-item">
                <label for="gender">Пол</label>
                <select name="gender" id="gender">
                  <option value="Male">Male</option>
                  <option value="Male">Female</option>
                  <option value="Male">Other</option>
                </select>
              </div>
              <div class="login_input-item">
                <label for="pnfl">ПИНФЛ</label>
                <input type="number" name="pnfl" id="pnfl" />
              </div>
              <div class="login_input-item">
                <label for="reg_login">Логин</label>
                <input type="text" name="reg_login" id="reg_login" />
              </div>
              <div class="login_input-item">
                <label for="reg_password">Придумайте пароль</label>
                <input type="password" name="reg_password" id="reg_password" />
              </div>
              <div class="login_input-item">
                <label for="reg_new_password">Повторите пароль</label>
                <input
                  type="password"
                  name="reg_new_password"
                  id="reg_new_password"
                />
              </div>
            </div>

            <button class="login_btn">Зарегистрироваться</button>
            <div class="login_or-line">
              <span class="login_line"></span>
              Или
              <span class="login_line"></span>
            </div>
            <div class="login_options">
              <button class="login_btn-item login_goole">
                <img src="/images/google.svg" />
                Вход через Google
              </button>
              <button class="login_btn-item login_facebook">
                <img src="/images/facebook.svg" alt="" />
                Вход через Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="backg_animation">
        <img class="backg_image" src="/images/back_circle.svg" alt="" />
      </div>
    </section>
  </main>

  <mainFooter />
</template>

<style scoped>
.login {
  padding-top: 110px;
  padding-bottom: 90px;
}
.tab_wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 800px;
}
.login_tab {
  position: absolute;
  top: 25px;
  background: #ffffff;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 25px;
  max-width: 525px;
  width: 100%;
  padding: 40px 30px;
  opacity: 0;
  z-index: -999;
}
.login_tab.active {
  opacity: 1;
  z-index: 99;
}
.login_top {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 25px;
}
.login_title {
  font-weight: 500;
  font-size: 28px;
  line-height: 130%;
  color: #181818;
  opacity: 0.2;
  cursor: pointer;
}
.login_title.active {
  opacity: 1;
}
.login_inputs {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 25px 0;
  border-bottom: 2px solid #f7f8f9;
  border-top: 2px solid #f7f8f9;
}
.login_input-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login_input-item input {
  border: none;
  outline: none;
  background: none;
  background: #f7f8f9;
  border-radius: 14px;
  padding: 14px 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.login_input-item select {
  border: none;
  outline: none;
  background: none;
  background: #f7f8f9;
  border-radius: 14px;
  padding: 14px 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.login_input-item input:focus {
  border: 1px solid #448fff;
}
.login_btn {
  margin: 25px 0;
  background: #448fff;
  border-radius: 14px;
  padding: 16px 0;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.login_btn:hover {
  background: transparent;
  border: 1px solid #448fff;
  color: #448fff;
}
.login_or-line {
  display: flex;
  align-items: center;
  gap: 10px;
}
.login_line {
  display: block;
  width: 100%;
  height: 2px;
  background: #f7f8f9;
}
.login_options {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
}
.login_btn-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 16px 0;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #181818;
  background: #ffffff;
  border-radius: 14px;
  transition: all 0.3s ease;
}
.login_btn-item:hover {
  opacity: 0.6;
}
.login_facebook {
  border: 1px solid #44a5ff;
}
.login_goole {
  border: 1px solid #fbbc05;
}
.login_eri {
  border: 1px solid #00c68e;
}
.backg_animation {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse-animation 3s infinite;
  z-index: -1;
}
.backg_image {
  transition: all 0.3s ease-in-out;
  opacity: 0.6;
}
.login_tab-reg {
  max-width: 820px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 25px;
  padding: 40px 30px;
}
.reg_input-list {
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
}
.reg_input-list .login_input-item {
  width: calc(50% - 12.5px);
}

@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
