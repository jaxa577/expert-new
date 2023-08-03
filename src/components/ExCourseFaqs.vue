<script>
export default {
  data() {
    return {
      faqlist: [
        {
          id: 1,
          question: "Ответ на вопрос",
          answer:
            "Мы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентамиМы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентами",
          valid: false,
        },
        {
          id: 2,
          question: "Ответ на вопрос",
          answer:
            "Мы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентамиМы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентами",
          valid: false,
        },
        {
          id: 3,
          question: "Ответ на вопрос",
          answer:
            "Мы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентамиМы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентами",
          valid: false,
        },
        {
          id: 4,
          question: "Ответ на вопрос",
          answer:
            "Мы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентамиМы стремимся сделать ИТ-обучение и сертификацию доступными для каждого на всех территориях присутствия Softline.Ценности, которыми мы руководствуемся в работе с коллегами, партнерами и клиентами",
          valid: false,
        },
      ],
    };
  },

  methods: {
    openAnswer(index) {
      this.faqlist[index].valid = !this.faqlist[index].valid;
    },
  },
};
</script>

<template>
  <section class="faq">
    <div class="container faq_container">
      <h2 class="faq_title">Часто задаваемые вопросы</h2>
      <div class="faq_list">
        <div
          @click="openAnswer(index)"
          v-for="(faq, index) in faqlist"
          :class="{ openedAnswer: faq.valid }"
          :key="`faq${faq.id}`"
          class="faq_list-item"
        >
          <div class="faq_qiestion">
            <h4 class="faq__heart-title">{{ faq.question }}</h4>
            <div class="faq__heart-btns">
              <span
                class="lines faq-vert"
                :class="{ beHorizontal: faq.valid }"
              ></span>
              <span class="lines faq-hor"></span>
            </div>
          </div>
          <div class="faq__heart-dropDown">
            <p class="faq__dropDown-txt">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  padding-bottom: 90px;
}
.faq_title {
  color: #181818;
  font-size: 38px;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 30px;
}
.faq_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq_list-item {
  width: 100%;
  max-height: 91px;
  padding: 30px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  background: #ffffff;
  border-radius: 20px;
}
.lines {
  position: absolute;
  top: -42px;
  right: 5px;
  height: 3px;
  width: 25px;
  background-color: #448fff;
  transition: all 0.3s ease;
}

.faq-vert {
  transform: rotate(90deg);
}

.beHorizontal {
  transform: rotate(0deg);
}
.faq__heart-btns {
  position: relative;
}
.openedAnswer {
  max-height: 300px;
  transition: all 0.4s ease;
}
.faq_top-right {
  display: flex;
  align-items: center;
  gap: 50px;
}
.faq__data {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #000000;
}
.faq__data span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  height: 30px;
  background: #7982a5;
  border-radius: 12px;
  font-weight: 600;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.01em;
  color: #ffffff;
}
.faq__heart {
  border-top: 1px solid #e1e1e1;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.faq__heart-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 25px;
}
.faq__dropDown-txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}

@media only screen and (max-width: 768px) {
  .faq_title {
    font-size: 30px;
    line-height: 120%;
  }
  .faq__dropDown-txt {
    font-size: 14px;
    font-family: Roboto;
    line-height: 150%;
  }
  .openedAnswer {
    max-height: 400px;
  }
}
</style>
