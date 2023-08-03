<script>
import courseCard from "./ExCourseCard.vue";

export default {
  components: {
    courseCard,
  },
  data() {
    return {
      courses: [
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
        {
          name: "Графический дизайн",
          image: "image1.png",
          ownerImage: "owner.png",
          ownerName: "Real Soft Academy",
          ownerStatus: "Компания",
          count: "10",
          rating: "4.5",
          cost: "100 000",
          link: "/about_course",
        },
      ],
      languages: [
        {
          id: 1,
          name: "Узбек",
        },
        {
          id: 2,
          name: "O'zbek",
        },
        {
          id: 3,
          name: "Русский",
        },
        {
          id: 4,
          name: "English",
        },
      ],
      currentPagination: 1,
      currentOption: "Tilni tanlang",
      isSelectOpened: false,
      isFilter: false,
    };
  },
  methods: {
    changePagination(nextPage) {
      this.currentPagination = nextPage;
    },
    changeoption(id, i) {
      this.currentOption = this.languages[i].name;
    },
    toggleSellect() {
      this.isSelectOpened = !this.isSelectOpened;
    },
    openMobileFilter() {
      this.isFilter = !this.isFilter;
    },
  },
};
</script>

<template>
  <section class="catalogue">
    <div class="container catalogue_container">
      <h2 class="catalogue_title">Каталог курсов</h2>
      <div class="catalogue_main">
        <div :class="{ active: isFilter }" class="catalogue_filters">
          <button @click="openMobileFilter" class="catalogue_close-filter">
            Закрыть
          </button>
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
                <input id="free" type="checkbox" />
                <label for="free">Бесплатно</label>
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
            <div
              @click="toggleSellect"
              :class="{ active: isSelectOpened }"
              class="catalogue_select-list"
            >
              <div class="catalogue_select-list-item">
                {{ currentOption }}
                <img
                  class="catalogue_select-arrow"
                  src="/images/arrow_bottom.svg"
                  alt="arrow"
                  :class="{ active: isSelectOpened }"
                />
              </div>
              <div
                v-for="(option, index) in languages"
                @click="changeoption(option.id, index)"
                class="catalogue_select-list-item"
              >
                {{ option.name }}
              </div>
            </div>
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
          <button @click="openMobileFilter" class="catalogue_filter-mob">
            <img src="/images/filter.svg" alt="filter" />
            Фильтрация
          </button>
          <div class="catalogue_course-list">
            <courseCard
              v-for="(card, index) in courses"
              :key="`courseCards${index}`"
              :name="card.name"
              :image="card.image"
              :ownerImage="card.ownerImage"
              :ownerName="card.ownerName"
              :ownerStatus="card.ownerStatus"
              :materials="card.materials"
              :rating="card.rating"
              :cost="card.cost"
              :link="card.link"
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
      <div :class="{ active: isFilter }" class="catalogue_filter-mob-bottom">
        <button class="filter_mob-btn">Применить</button>
        <button class="filter_mob-btn2">Сбросить</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
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
  gap: 20px;
}
.catalogue_filter-item-input label {
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
  color: #5a5a5a;
  cursor: pointer;
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
  height: 17px;
  border: 1px solid #448fff;
  border-radius: 4px;
  background-color: white;
  border-radius: 3px;
  vertical-align: middle;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}
.catalogue_filter-item-input input[type="checkbox"]:checked + label:before {
  background-color: #448fff;
  border-color: #448fff;
  width: 17px;
  height: 17px;
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

/* Custom Select */

.catalogue_select-list {
  background: #f7f8f9;
  border: 1px solid rgba(90, 90, 90, 0.1);
  border-radius: 14px;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 44px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.catalogue_select-list.active {
  max-height: 300px;
}
.catalogue_select-list-item {
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #181818;
  /* padding: 5px 0; */
}
.catalogue_select-list-item:nth-child(1) {
  padding-bottom: 15px;
  position: relative;
  /* border-bottom: 1px solid #ffffff; */
}
.catalogue_select-arrow {
  transition: all 0.3s ease;
  position: absolute;
  top: 2px;
  right: 0;
  width: 16px;
  height: 16px;
}
.catalogue_select-arrow.active {
  transform: rotate(-180deg);
}
.catalogue_filter-mob {
  background: #ecf4ff;
  border-radius: 200px;
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #448fff;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  display: none;
}
.catalogue_filter-mob:hover {
  opacity: 0.7;
}
.catalogue_filter-mob-bottom {
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 30px 10px;
  background: #ffffff;
  z-index: 999;
  transition: all 0.4s ease;
}
.catalogue_filter-mob-bottom.active {
  bottom: 0;
}
.filter_mob-btn {
  background: #448fff;
  border: 1px solid #448fff;
  border-radius: 200px;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #ffffff;
  padding: 16px 0;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  width: 100%;
}
.filter_mob-btn:hover {
  background: #ffffff;
  color: #448fff;
}
.filter_mob-btn2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #5a5a5a;
  width: 100%;
}
.catalogue_close-filter {
  background: #f7f8f9;
  border: 1px solid #5a5a5a;
  border-radius: 200px;
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: #181818;
  transition: all 0.3s ease;
  margin-bottom: 30px;
  max-width: 285px;
  display: none;
}
.catalogue_close-filter:hover {
  opacity: 0.7;
}
@media only screen and (max-width: 768px) {
  .catalogue_main {
    position: relative;
  }
  .catalogue_title {
    font-weight: 500;
    font-size: 38px;
  }
  .catalogue_filters {
    position: fixed;
    z-index: 9;
    left: 50%;
    top: 59px;
    width: calc(100% + 40px);
    height: calc(100vh - 209px);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(-50%) translateY(-150%);
    backdrop-filter: blur(10px);
    padding: 40px 0;
    padding-bottom: 100px;
    overflow-y: scroll;
    transition: all 0.4s ease;
    z-index: 9999;
  }
  .catalogue_filters.active {
    transform: translateX(-50%) translateX(0);
  }
  .catalogue_course-list {
    justify-content: center;
  }
  .catalogue_filter-mob,
  .catalogue_close-filter {
    display: block;
  }
  .catalogue_filter-item {
    max-width: 285px;
    width: 100%;
  }
}
</style>
