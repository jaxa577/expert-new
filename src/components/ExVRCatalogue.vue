<script>
import vacancyCard from "./ExVacancyCard.vue";

export default {
  components: {
    vacancyCard,
  },
  data() {
    return {
      vacanyList: [
        {
          id: 1,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 2,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 3,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 4,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 5,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
        {
          id: 6,
          name: "Мененджер по маркетингу и продвижению",
          salary: "10 000 000-16 000 000",
          company: "Real Soft Academy",
          location: "Ташкент",
          date: "Maй 30, 2023",
          viewed: "1234",
        },
      ],
      currentPagination: 1,
    };
  },
  methods: {
    changePagination(nextPage) {
      this.currentPagination = nextPage;
    },
  },
};
</script>

<template>
  <section class="catalogue">
    <div class="container catalogue_container">
      <h2 class="catalogue_title">Каталог курсов</h2>
      <div class="catalogue_main">
        <div class="catalogue_filters">
          <div class="catalogue_filter-item">
            <h3 class="catalogue_filter-item-title">Фильтрация</h3>
            <h4 class="catalogue_filter-inner-title">Направления:</h4>
            <div class="catalogue_filter-list">
              <div class="catalogue_filter_list-item">
                <div class="catalogue_filter-item-input">
                  <input id="1" placeholder="От" type="checkbox" />
                  <label for="1">Дизайн</label>
                </div>
                <p class="catalogue_filter-item-count">(12)</p>
              </div>
            </div>
            <button class="catalogue_dir-btn">
              Cмотреть все <img src="/images/chevron-bottom.svg" alt="arrow" />
            </button>
          </div>

          <div class="catalogue_filter-item">
            <h4 class="catalogue_filter-inner-title">Цена курса:</h4>
            <div class="catalogue_filter_list-item">
              <div class="catalogue_filter-item-input">
                <input id="1" type="checkbox" />
                <label for="1">Бесплатно</label>
              </div>
              <p class="catalogue_filter-item-count">(12)</p>
            </div>
            <div class="catalogue_filter-cost">
              <div class="catalogue_cost-input">
                <input type="number" placeholder="От" name="cost" id="" />
                <p class="catalogue_cost-text">сум</p>
              </div>
              <div class="catalogue_cost-input">
                <input type="number" placeholder="До" name="cost" id="" />
                <p class="catalogue_cost-text">сум</p>
              </div>
            </div>
          </div>

          <div class="catalogue_filter-item">
            <h4 class="catalogue_filter-inner-title">Язык курса:</h4>
            <select class="catalogue_select" name="language" id="">
              <option value="1">UZ</option>
              <option value="1">RUS</option>
              <option value="1">ENG</option>
            </select>
          </div>
        </div>

        <div class="catalogue_right">
          <div class="catalogue_search">
            <input
              class="catalogue_search-input"
              type="text"
              placeholder="Поиск по названию"
            />
            <button class="catalogue_search-btn">
              <img src="/images/search.svg" alt="" />
            </button>
          </div>
          <div class="catalogue_course-list">
            <vacancyCard
              v-for="(vacancy, index) in vacanyList"
              :key="`courseCards${index}`"
              :name="vacancy.name"
              :id="vacancy.id"
              :company="vacancy.company"
              :salary="vacancy.salary"
              :location="vacancy.location"
              :date="vacancy.date"
              :viewed="vacancy.viewed"
            />
          </div>
          <div class="catalogue_pagination">
            <div
              v-for="item in 5"
              @click="changePagination(item)"
              :class="{ active: currentPagination == item }"
              class="catalogue_pagination-item"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.catalogue {
  margin-top: 80px;
}
.catalogue_container {
}
.catalogue_title {
  font-weight: 500;
  font-size: 58px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 40px;
}
.catalogue_main {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.catalogue_filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 285px;
}
.catalogue_filter-item {
  background: #ffffff;
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 20px;
  padding: 30px 20px;
}
.catalogue_filter-item-title {
  font-weight: 500;
  font-size: 28px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 30px;
}
.catalogue_filter-inner-title {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #5a5a5a;
  margin-bottom: 20px;
}
.catalogue_filter-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.catalogue_filter_list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.catalogue_filter-item-input {
  display: flex;
  align-items: center;
  gap: 10px;
}
.catalogue_filter-item-input label {
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
}
.catalogue_filter-item-count {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #5a5a5a;
}
.catalogue_dir-btn {
  background: #ecf4ff;
  border-radius: 200px;
  padding: 10px 0;
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #448fff;
}
.catalogue_filter-cost {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}
.catalogue_cost-input {
  position: relative;
}

.catalogue_cost-input input {
  border: none;
  outline: none;
  background: none;
  background: #f7f8f9;
  border: 1px solid rgba(90, 90, 90, 0.1);
  border-radius: 14px;
  padding: 10px 35px 10px 16px;
  width: 100%;
}
.catalogue_cost-text {
  position: absolute;
  top: 10px;
  right: 16px;
  z-index: 99;
}
.catalogue_select {
  width: 100%;
  background: #f7f8f9;
  border: 1px solid rgba(90, 90, 90, 0.1);
  border-radius: 14px;
  padding: 10px 16px;
}

.catalogue_right {
  /* max-width: 895px; */
  width: 100%;
}
.catalogue_search {
  position: relative;
  display: flex;
  margin-bottom: 30px;
}
.catalogue_search-input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(90, 90, 90, 0.1);
  box-shadow: 0px 8px 28px -6px rgba(24, 39, 75, 0.12),
    0px 18px 88px -4px rgba(24, 39, 75, 0.14);
  border-radius: 18px;
  padding: 16px 48px 16px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}
.catalogue_search-btn {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
}
.catalogue_course-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.catalogue_pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
}
.catalogue_pagination-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf4ff;
  border-radius: 200px;
  width: 41px;
  height: 49px;
  font-weight: 500;
  font-size: 18px;
  color: #448fff;
  cursor: pointer;
  transition: all 0.3s ease;
}
.catalogue_pagination-item:hover {
  opacity: 0.8;
}
.catalogue_pagination-item.active {
  background: #448fff;
  color: #ffffff;
}
</style>
