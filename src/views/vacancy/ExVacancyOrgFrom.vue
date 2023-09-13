<script></script>

<template>
  <section class="org_form">
    <div class="container-fluid org_form-container">
      <button class="back_btn">Назад</button>
      <div class="org_form-main-wrapper">
        <div class="org_form-main">
          <h2 class="org_form-title">Необходимо заполнить форму</h2>
          <h3 class="org_form-secont-title">Основная информация</h3>
          <div class="org_form-inner">
            <div class="org_form-img">
              <div class="org_form-file">
                <input type="file" name="" id="org_form-file" />
                <label for="org_form-file">
                  <img src="/images/paperclip2.svg" alt="" />
                  Загрузить логотип компании
                </label>
                <p>240x240</p>
              </div>
            </div>
            <div class="org_form-infos">
              <div class="org_form-input">
                <input type="text" name="" id="" placeholder="ИНН" />
              </div>
              <div class="org_form-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Номер телефона организации"
                />
              </div>
              <div class="org_form-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Юридическое название организации"
                />
              </div>
              <div class="org_form-input">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Наименование бренда"
                />
              </div>
            </div>
          </div>
          <textarea
            placeholder="Об организации"
            class="form_desc"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div class="org_form-agreement">
            <div class="catalogue_filter-item-input">
              <input id="agreement" type="checkbox" />
              <label for="agreement">
                <p>Я согласен на проверку данных</p>
              </label>
            </div>
          </div>
        </div>
        <div class="org_form-btns">
          <button class="org_form-confirm">Подтвердить</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.org_form {
  padding: 30px 0;
}
.org_form-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.back_btn {
  border-radius: 10px;
  background: var(--5, #fff);
  color: var(--3, #606060);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  padding: 10px 20px;
}
.org_form-main-wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-end;
  gap: 20px;
}
.org_form-main {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 40px 20px;
  max-width: 920px;
  width: 100%;
}
.org_form-title {
  color: var(--2, #1a1a1a);
  font-size: 36px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 40px;
}
.org_form-secont-title {
  color: var(--2, #1a1a1a);
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 25px;
}
.org_form-inner {
  display: flex;
  align-items: center;
  gap: 25px;
}
.org_form-img {
  width: 40%;
  height: 245px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--11, #e5f0ff);
}
.org_form-file {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.org_form-file p {
  color: var(--3, #606060);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.org_form-file input {
  display: none;
}
.org_form-file label {
  border-radius: 10px;
  border: 1px dashed var(--1, #06f);
  background: var(--5, #fff);
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  color: var(--1, #06f);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
}
.org_form-infos {
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: calc(60% - 20px);
}
.org_form-input {
  width: 100%;
}
.org_form-input input {
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  padding: 10px 14px;
  width: 100%;
  transition: all 0.3s ease;
}
.org_form-input input:focus {
  border: 1px solid #06f;
}
.form_desc {
  width: 100%;
  max-height: 775px;
  height: 100%;
  resize: none;
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  padding: 10px 14px;
  margin: 25px 0 40px 0;
  transition: all 0.3s ease;
}
.form_desc:focus {
  border: 1px solid #06f;
}

.catalogue_filter_list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  user-select: none;
}
.catalogue_filter-item-input {
  display: flex;
  align-items: center;
  gap: 20px;
}
.catalogue_filter-item-input label {
  color: var(--3, #606060);
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.catalogue_filter-item-count {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.catalogue_filter-item-input input[type="checkbox"] {
  display: none;
}
.catalogue_filter-item-input label:before {
  content: "";
  display: inline-block;
  width: 17px;
  min-width: 17px;
  max-width: 17px;
  min-height: 17px;
  max-height: 17px;
  height: 17px;
  border: 1px solid #06f;
  border-radius: 4px;
  background-color: white;
  border-radius: 3px;
  vertical-align: middle;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}
.catalogue_filter-item-input input[type="checkbox"]:checked + label:before {
  background-color: #06f;
  border-color: #06f;
  width: 17px;
  min-width: 17px;
  max-width: 17px;
  min-height: 17px;
  max-height: 17px;
  height: 17px;
}
.org_form-confirm {
  border-radius: 10px;
  background: var(--1, #06f);
  color: var(--5, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  padding: 10px 20px;
  min-width: 295px;
  border: 1px solid #06f;
  transition: all 0.3s ease;
}
.org_form-confirm:hover {
  background-color: #fff;
  color: #06f;
}
</style>
