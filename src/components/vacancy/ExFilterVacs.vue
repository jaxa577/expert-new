<script></script>

<template>
  <div class="filter_wrapper">
    <h3 class="filter_title">Фильтрация</h3>
    <div class="filter_dir-list">
      <h4 class="filter_item-title">Оплата</h4>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="deal" ref="dirAll" type="checkbox" />
          <label for="deal">
            <p>По договоренности</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="no_matter" ref="dirAll" type="checkbox" checked />
          <label for="no_matter">
            <p>Не имеет значения</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="presented_cost" ref="dirAll" type="checkbox" />
          <label for="presented_cost">
            <p>С указанием цены</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="filter_cost">
        <div class="filter_cost-item">
          <input type="text" name="" id="" placeholder="От" />
          <p>Сум</p>
        </div>
        <div class="filter_cost-item">
          <input type="text" name="" id="" placeholder="До" />
          <p>Сум</p>
        </div>
      </div>
    </div>
    <div class="filter_dir-list">
      <h4 class="filter_item-title">Тип занятости</h4>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="full_time" ref="dirAll" type="checkbox" />
          <label for="full_time">
            <p>Полная занятость</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="online" ref="dirAll" type="checkbox" checked />
          <label for="online">
            <p>Удаленная работа</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="part_time" ref="dirAll" type="checkbox" />
          <label for="part_time">
            <p>Частичная занятость</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
    </div>
    <div class="filter_dir-list">
      <h4 class="filter_item-title">Специализация</h4>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="marketing" ref="dirAll" type="checkbox" />
          <label for="marketing">
            <p>Маркетинг</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="marketing" ref="dirAll" type="checkbox" />
          <label for="marketing">
            <p>Маркетинг</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
      <div class="catalogue_filter_list-item">
        <div class="catalogue_filter-item-input">
          <input id="marketing" ref="dirAll" type="checkbox" />
          <label for="marketing">
            <p>Маркетинг</p>
          </label>
        </div>
        <p class="catalogue_filter-item-count">100</p>
      </div>
    </div>
  </div>
</template>

<style>
.filter_wrapper {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.filter_title {
  color: var(--2, #1a1a1a);
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  /* margin-bottom: 25px; */
}
.filter_dir-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.filter_item-title {
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
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
.filter_cost {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.filter_cost-item {
  position: relative;
}
.filter_cost-item p {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
}
.filter_cost-item input {
  padding: 10px 14px;
  padding-right: 25px;
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  width: 100%;
  transition: all 0.3s ease;
}
.filter_cost-item input:focus {
  border: 1px solid #06f;
}
</style>
