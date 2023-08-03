<script>
export default {
  data() {
    return {
      faqlist: [
        {
          id: 1,
          question: "Platon dasturiga kirish - 1 oy",
          answers: [
            "Platon platformasi bilan tanishish",
            "Modullar bilan tanishish",
            "Platon platformasini sozlash",
            "Platonda birinchi dasturni yaratish",
          ],
          valid: false,
        },
        {
          id: 2,
          question: "Platon funksiyalar - 2 oy",
          answers: [
            "Platon platformasi bilan tanishish",
            "Modullar bilan tanishish",
            "Platon platformasini sozlash",
            "Platonda birinchi dasturni yaratish",
          ],
          valid: false,
        },
        {
          id: 3,
          question: "Platon massivlar - 3 oy",
          answers: [
            "Platon platformasi bilan tanishish",
            "Modullar bilan tanishish",
            "Platon platformasini sozlash",
            "Platonda birinchi dasturni yaratish",
          ],
          valid: false,
        },
        {
          id: 4,
          question: "Platon Murakkab dasturlarni yaratish - 4 oy",
          answers: [
            "Platon platformasi bilan tanishish",
            "Modullar bilan tanishish",
            "Platon platformasini sozlash",
            "Platonda birinchi dasturni yaratish",
          ],
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
  <section class="materials">
    <div class="container materials_container">
      <div class="materials_intro">
        <h2 class="materials_title">Материалы к курсу</h2>
        <div class="materials_intro-desc">
          <p class="materials_intro-desc-text">123 Видеоуроков</p>
          <p class="materials_intro-desc-text">123 Практических уроков</p>
        </div>
      </div>
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
            <img
              :class="{ active: faq.valid }"
              class="materials_arrow"
              src="/images/chevron-bottom.svg"
              alt=""
            />
          </div>
          <ul class="faq__heart-dropDown">
            <li v-for="material in faq.answers" class="faq_inner-item">
              {{ material }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.materials {
  margin-top: 90px;
  padding-bottom: 90px;
}
.materials_intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.materials_title {
  font-weight: 500;
  font-size: 38px;
  line-height: 130%;
  color: #181818;
}
.materials_intro-desc {
  display: flex;
  align-items: center;
  gap: 20px;
}
.materials_intro-desc-text {
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;
  color: #ffffff;
  background: #448fff;
  border-radius: 200px;
  padding: 10px 20px;
}

.faq_list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.faq_list-item {
  position: relative;
  width: 100%;
  cursor: pointer;
  max-height: 90px;
  background: #ffffff;
  border-radius: 20px;
  padding: 30px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.materials_arrow {
  position: absolute;
  top: 30px;
  right: 30px;
  transition: all 0.3s ease;
  width: 28px;
  height: 28px;
}
.materials_arrow.active {
  transform: rotate(-180deg);
}
.faq__heart-dropDown {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.openedAnswer {
  max-height: 300px;
  transition: all 0.4s ease;
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
.faq__heart-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #181818;
  margin-bottom: 30px;
}
.faq_inner-item {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #5a5a5a;
}

@media only screen and (max-width: 768px) {
  .materials_intro {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
  .materials_intro-desc {
    flex-direction: column;
    align-items: flex-start;
  }
  .materials_title {
    font-size: 30px;
    line-height: 120%;
  }
  .faq__heart-title {
    font-size: 18px;
    line-height: 150%;
    margin-right: 15px;
  }
  .faq_inner-item {
    font-size: 14px;
    line-height: 150%;
  }
}
</style>
