<script>
export default {
  data() {
    return {
      list: [
        {
          id: 428,
          text: "Ahbhsdbhsds",
          order: 1,
          type: 1,
        },
        {
          id: 429,
          text: "dasdasdasd",
          order: 2,
          type: 1,
        },
        {
          id: 430,
          text: "jdsahdbashdasd",
          order: 3,
          type: 1,
        },
        {
          id: 431,
          text: "dsadsadasd",
          order: 4,
          type: 1,
        },
        {
          id: 432,
          text: "sadasdasdas",
          order: 5,
          type: 1,
        },
      ],
    };
  },
  methods: {
    addQuestion() {
      let lastItem = this.list.length;
      console.log(lastItem);
      this.list.push(
        { text: "Anwser", order: 2, type: 1 },
        { text: "", order: 3, type: 1 }
      );
    },
    deleteAnswer(i) {
      this.list[i - 1].text = this.list[i - 1].text + this.list[i + 1].text;
      this.list.splice(i + 1, 1);
      this.list.splice(i, 1);
      console.log(this.list[i - 1].text);
    },
    setValues(i) {
      this.list[i].text = this.$refs.items[i].textContent;
      console.log(this.$refs.items[i]);
      console.log(this.list[i].text);
    },
  },
};
</script>

<template>
  <section>
    <div class="container">
      <span class="wrapper">
        <span v-for="(item, index) in list">
          <span
            @keyup="setValues(index)"
            v-if="item.order % 2 != 0"
            class="content"
            contenteditable="true"
            ref="items"
          >
            {{ item.text }}</span
          >
          <span
            ref="items"
            @keyup="setValues(index)"
            v-else
            contenteditable="true"
            class="value"
          >
            {{ item.text }}
            <span
              @click="deleteAnswer(index)"
              class="cross_btn"
              contenteditable="false"
              >x</span
            >
          </span>
        </span>
      </span>

      <div>
        <button @click="addQuestion" class="add_btn">add question</button>
      </div>
    </div>
  </section>
</template>

<style>
.wrapper {
  display: block;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 8px 10px;
  min-height: 115px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.content {
  padding: 0 20px;
}
.value {
  position: relative;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 0 13px;
  height: 42px;
  padding-right: 45px;
  min-width: 150px;
  /* display: block; */
  width: fit-content;
  display: flex;
  align-items: center;
}
.cross_btn {
  position: absolute;
  top: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #ec6047;
  border-radius: 6px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.add_btn {
  border: 1px solid;
}
</style>
