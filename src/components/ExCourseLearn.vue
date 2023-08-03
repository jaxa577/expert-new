<script></script>

<template>
  <section class="learn">
    <div class="container learn_container">
      <h2 class="learn_title">Чему научитесь на курсе</h2>
      <div class="learn_list">
        <div class="learn_list-item">
          <img src="/images/learn_disk.svg" alt="disk" />
          <p class="learn_item-text">Писать простые программы на Platon</p>
        </div>
        <div class="learn_list-item">
          <img src="/images/learn_disk.svg" alt="disk" />
          <p class="learn_item-text">Логика с условиями и циклами</p>
        </div>
        <div class="learn_list-item">
          <img src="/images/learn_disk.svg" alt="disk" />
          <p class="learn_item-text">Использование Jupyter Notebook</p>
        </div>
        <div class="learn_list-item">
          <img src="/images/learn_disk.svg" alt="disk" />
          <p class="learn_item-text">Декораты</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.learn {
}
.learn_container {
}
.learn_title {
  font-weight: 500;
  font-size: 38px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 30px;
}
.learn_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.learn_list-item {
  background: #ffffff;
  border-radius: 20px;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.learn_item-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #5a5a5a;
}

@media only screen and (max-width: 768px) {
  .learn_title {
    font-size: 30px;
    line-height: 120%;
  }
  .learn_item-text {
    font-size: 14px;
    line-height: 150%;
  }
}
</style>
