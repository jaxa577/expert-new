<script>
import ProgressCircle from "../components/Progress.vue";
export default {
  components: {
    ProgressCircle,
  },
  data() {
    return {
      tabs: [
        {
          name: "Уроки",
          id: 1,
        },
        {
          name: "О курсе",
          id: 2,
        },
        {
          name: "Ответы на вопросы",
          id: 3,
        },
        {
          name: "Обращение",
          id: 4,
        },
      ],
      currentTab: 1,
      progressPercentage: 25,
    };
  },
  methods: {
    toggleTab(id) {
      this.currentTab = id;
    },
  },
};
</script>

<template>
  <section class="course_top">
    <h2 class="course_name">UI/UX Дизайнер</h2>
    <div class="course_tab">
      <div
        class="course_tab-item"
        @click="toggleTab(tab.id)"
        v-for="(tab, index) in tabs"
        :class="{ active: tab.id == currentTab }"
      >
        {{ tab.name }}
      </div>
    </div>
  </section>

  <section v-if="currentTab == 1" class="course_materials course_top">
    <div class="course_materials-wrapper">
      <div class="course_progress">
        <h3 class="course_progress-title">Прогресс прохождения курса</h3>
      </div>

      <div class="materials_list">
        <div class="material_list-item">
          <div class="material_item">
            <div class="material_item-desc">
              <div class="material_item-status-ava">
                <img class="material_item-play" src="/images/play.svg" alt="" />
              </div>
              <div>
                <p class="material_item-type">Видео</p>
                <h3 class="material_item-name">Вводный урок</h3>
              </div>
            </div>
            <div class="material_item-status">
              <span> Завершен </span>
            </div>
          </div>
          <div class="material_item">
            <div class="material_item-desc">
              <div class="material_item-status-ava test">
                <img src="/images/lock.svg" alt="" />
              </div>
              <div>
                <p class="material_item-type">Тест</p>
                <h3 class="material_item-name">Тест по основным функциям</h3>
              </div>
            </div>
            <div class="material_item-status test">
              <span> Не начато </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section v-if="currentTab == 2" class="course_info course_top">
    <div class="course_info-wrapper">
      <h2 class="course_info-title">UI/UX Дизайнер</h2>
      <p class="course_info-desc">
        Node.js расширяет возможности языка JavaScript и выступает в роли
        веб-сервера. С помощью этой платформы вы научитесь создавать полноценные
        веб-приложения и CLI-утилиты — и сможете вырасти как разработчик.
      </p>

      <div class="course_info-extra">
        <div class="course_info-extra-item">
          <p class="course_info-item-name">Длительность</p>
          <h3 class="course_info-item-res">2 месяца</h3>
        </div>
        <div class="course_info-extra-item">
          <p class="course_info-item-name">Онлайн</p>
          <h3 class="course_info-item-res">В удобное время</h3>
        </div>
        <div class="course_info-extra-item">
          <p class="course_info-item-name">Много практики</p>
          <h3 class="course_info-item-res">Много</h3>
        </div>
        <div class="course_info-extra-item">
          <p class="course_info-item-name">Доступ к курсу</p>
          <h3 class="course_info-item-res">Навсегда</h3>
        </div>
      </div>
    </div>
  </section>

  <section v-if="currentTab == 3" class="course_top course_qa">
    <div class="course_qa-wrapper">
      <h2 class="course_qa-title">Вопросы ответы по курсу</h2>
      <div class="course_qa-question">
        <input
          class="qa_question-input"
          type="text"
          name=""
          id=""
          placeholder="Напишите свой вопрос"
        />
        <div class="course_qa-file">
          <input class="qa_file-input" type="file" name="" id="qa_file" />
          <label class="qa_file-label" for="qa_file"
            >Прикрепить файл <img src="/images/paperclip.svg" alt=""
          /></label>
        </div>
        <button class="qa_send-btn">Отправить</button>
      </div>
      <div class="course_question-list">
        <div class="course_question-item active">
          <div class="course_question-item-top">
            <img class="question_user-ava" src="/images/image1.png" alt="" />
            <div>
              <h3 class="course_question-user">David Elson</h3>
              <p class="course_course_question-date">Май 7, 2023 8:54 am</p>
            </div>
          </div>
          <p class="course_question-text">
            Нейросеть с огромным функционалом: пишет любые типы текстов в любом
            тоне и стилистике. Для каждого формата есть свой шаблон с
            настройками. Кроме того, тексты можно перефразировать, проверить на
            ошибки и оформить по правилам типографики.
          </p>
          <a class="question_file-see" href="#!"
            ><img src="/images/paperclip2.svg" alt="" /> Прикрепленный файл</a
          >
          <div><button class="course_question-answer">Ответить</button></div>
          <div class="course_answer">
            <input
              placeholder="Написать ответ"
              class="course_answer-input"
              type="text"
              name=""
              id=""
            />
            <div class="course_answer-btns">
              <button class="course_answer-cancel">Отменить</button>
              <div>
                <input
                  class="course_answer-file"
                  type="file"
                  name=""
                  id="course_answer-file"
                />
                <label for="course_answer-file"
                  ><img src="/images/paperclip.svg" alt=""
                /></label>
              </div>
              <button class="course_answer-send">Опубликовать</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section v-if="currentTab == 4" class="course_comment">
    <div class="course_comment-wrapper">
      <div class="course_comment-inner">
        <h2 class="course_comment-title">Оставьте отзыв по курсу</h2>
        <textarea
          class="comments_textarea"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div class="course_comment-bottom">
          <div class="course_comment-select">
            <div class="course_comment-select-item">
              <img src="/images/star_comment.svg" alt="" />
              Выберите оценку
              <img class="select_arrow" src="/images/arrow_bottom.svg" alt="" />
            </div>
            <div
              @click="setValue(item)"
              v-for="item in 5"
              class="course_comment-select-item"
            >
              {{ item }}
              <img v-for="star in item" src="/images/star_comment.svg" alt="" />
            </div>
          </div>
          <button class="comment_send-btn">Отправить</button>
        </div>
      </div>
      <div class="course_rating">
        <p class="course_rating-txt">Общий рейтинг курса</p>
        <h3><img width="30" src="/images/star.svg" alt="" />4.5</h3>
      </div>
    </div>
  </section>
</template>

<style>
body {
  background: var(--4, #f3f3f3);
}
.course_top {
  padding: 0 20px;
}
.course_name {
  color: var(--2, #1a1a1a);
  font-size: 36px;
  font-weight: 500;
  line-height: 130%;
  margin: 30px 0;
}
.course_tab {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: var(--11, #e5f0ff);
  padding: 10px;
}
.course_tab-item {
  display: flex;
  justify-content: center;
  height: 37px;
  padding: 10px 20px;
  width: 100%;
  color: var(--1, #06f);
  cursor: pointer;
  transition: all 0.3s linear;
}
.course_tab-item.active {
  border-radius: 10px;
  background: var(--5, #fff);
}

.course_materials-wrapper {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}
.course_progress {
  max-width: 295px;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px 25px;
  border-radius: 20px;
  background: var(--5, #fff);
}
.course_progress-title {
  color: var(--2, #1a1a1a);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
}

.materials_list {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
}
.material_list-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}
.material_item {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 20px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
}
.material_item-desc {
  display: flex;
  align-items: center;
  gap: 20px;
}
.material_item-status-ava {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 72px;
  height: 72px;
  background: #06f;
  border-radius: 50%;
}
.material_item-play {
  margin-left: 4px;
}
.material_item-status-ava.test {
  background: #f3f3f3;
}
.material_item-type {
  color: var(--3, #606060);
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
}
.material_item-name {
  color: var(--2, #1a1a1a);
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  margin-top: 5px;
}
.material_item-status span {
  border-radius: 200px;
  background: rgba(70, 194, 88, 0.1);
  color: var(--3, #46c258);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  padding: 8.5px 10px;
}
.material_item-status.test span {
  background: var(--4, #f3f3f3);
  color: var(--3, #606060);
}

/*----------------- Materials Info ------------------------*/
.course_info {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.course_info-wrapper {
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 40px 20px;
  max-width: 920px;
  width: 100%;
}
.course_info-title {
  color: var(--2, #1a1a1a);
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 20px;
}
.course_info-desc {
  color: var(--3, #606060);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 35px;
}
.course_info-extra {
  display: flex;
  gap: 20px;
}
.course_info-extra-item {
  border-radius: 10px;
  background: var(--4, #f3f3f3);
  padding: 30px 15px;
  width: 100%;
}
.course_info-item-name {
  color: var(--3, #606060);
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 10px;
}
.course_info-item-res {
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
}

/* -------------------- Course Question Answer ------------------*/

.course_qa {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}
.course_qa-wrapper {
  padding: 30px 0;
  border-radius: 10px;
  background: var(--5, #fff);
  max-width: 1090px;
  width: 100%;
}
.course_qa-title {
  color: var(--2, #1a1a1a);
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
  padding: 0 20px;
}
.course_qa-question {
  padding: 34px 20px;
  margin: 34px 0;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #f3f3f3;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.qa_question-input {
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  padding: 10px 14px;
  width: 60%;
  transition: all 0.3s ease;
}
.qa_question-input:focus {
  border: 1px solid #0066ff;
}
.course_qa-file {
  position: relative;
  width: 25%;
}
.qa_file-input {
  display: none;
}
.qa_file-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--11, #e5f0ff);
  background: var(--5, #fff);
  padding: 10px 14px;
  color: var(--3, #606060);
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  cursor: pointer;
}
.qa_send-btn {
  border: none;
  outline: none;
  background: none;
  border-radius: 10px;
  background: var(--1, #06f);
  padding: 10px 20px;
  color: var(--5, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.qa_send-btn:hover {
  background-color: transparent;
  color: #0066ff;
  border: 1px solid #0066ff;
}

.course_question-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  padding: 0 20px;
}
.course_question-item {
  padding: 20px;
  border-radius: 10px;
}
.course_question-item.active {
  border-radius: 10px;
  background: var(--11, #e5f0ff);
}
.course_question-item-top {
  display: flex;
  align-items: center;
  gap: 10px;
}
.question_user-ava {
  width: 43px;
  height: 43px;
  object-fit: cover;
  border-radius: 50%;
}
.course_question-user {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
  margin-bottom: 4px;
}
.course_course_question-date {
  color: var(--3, #606060);
  text-align: right;
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
}
.course_question-text {
  color: var(--2, #1a1a1a);
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  margin: 15px 0;
}
.course_question-answer {
  color: var(--3, #606060);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
}
.question_file-see {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  padding: 10px 20px;
  border-radius: 10px;
  background: #06f;
  transition: all 0.3s ease;
  width: fit-content;
  margin-bottom: 15px;
}
.question_file-see img {
  filter: brightness(0) invert(1);
}
.question_file-see:hover {
  opacity: 0.7;
  color: #fff;
}
.course_answer {
  position: relative;
  margin-top: 20px;
}
.course_answer-input {
  outline: none;
  background: none;
  border: none;
  width: 100%;
  border-radius: 10px;
  background: var(--5, #fff);
  padding: 13px 14px;
  padding-right: 250px;
}
.course_answer-btns {
  position: absolute;
  top: 3px;
  right: 3px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.course_answer-cancel {
  color: var(--3, #606060);
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
}
.course_answer-file {
  display: none;
}
.course_answer-send {
  color: var(--5, #fff);
  font-size: 12px;
  font-weight: 500;
  line-height: 120%;
  border-radius: 10px;
  background: var(--1, #06f);
  padding: 10px 20px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.course_answer-send:hover {
  background: transparent;
  border: 1px solid #0066ff;
  color: #0066ff;
}

/* --------------------- COMMENTS -----------------------*/

.course_comment {
  margin-top: 40px;
  padding: 0 20px;
}
.course_comment-wrapper {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}
.course_comment-inner {
  padding: 30px 20px;
  border-radius: 10px;
  background: var(--5, #fff);
  max-width: 920px;
  width: 100%;
}
.course_comment-title {
  color: var(--2, #1a1a1a);
  font-size: 24px;
  font-weight: 500;
  line-height: 130%;
}
.comments_textarea {
}
.course_comment-bottom {
}
.course_comment-select {
}
.course_comment-select-item {
}
.select_arrow {
}
.comment_send-btn {
}
.course_rating {
}
.course_rating-txt {
}
</style>
