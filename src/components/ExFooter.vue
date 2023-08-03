<script></script>

<template>
  <footer class="footer">
    <div class="container footer_container">
      <div class="footer_left">
        <img src="/images/logo.svg" alt="" />
      </div>
      <div class="footer_lists">
        <div class="footer_list">
          <h3 class="footer_list-title">Навигация</h3>
          <a class="footer_list-item" href="#!">О нас</a>
          <a class="footer_list-item" href="#!">Модули</a>
          <a class="footer_list-item" href="#!">Новости</a>
        </div>
        <div class="footer_list">
          <h3 class="footer_list-title">Контакты</h3>
          <a class="footer_list-item" href="#!"
            >3274 Doe Meadow Drive, Annapolis Junction, MD 20701</a
          >
          <a class="footer_list-item" href="#!">iva838@outlook.com</a>
          <a class="footer_list-item" href="#!">(907) 248-8330</a>
        </div>
        <div class="footer_list">
          <h3 class="footer_list-title">Действия</h3>
          <a class="footer_list-item" href="#!">Связяться</a>
          <a class="footer_list-item" href="#!">Регистрация</a>
          <a class="footer_list-item" href="#!">Вход</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  background: #ffffff;
  padding: 60px 0 90px 0;
  margin-top: 120px;
}
.footer_container {
  display: flex;
  gap: 170px;
}
.footer_lists {
  display: flex;
  gap: 170px;
  justify-content: space-between;
}
.footer_list {
  /* max-width: 250px; */
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.footer_list-title {
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #448fff;
}
.footer_list-item {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #181818;
  transition: all 0.3s ease;
}
.footer_list-item:hover {
  color: #448fff;
}

@media only screen and (max-width: 1024px) {
  .footer {
    padding: 40px 0 50px 0;
  }
  .footer_container,
  .footer_lists {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
