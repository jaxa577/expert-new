<script>
export default {
  props: {
    content: String,
    image: String,
  },
};
</script>

<template>
  <button class="main_btn">
    <img class="main_btn-img" v-if="image" :src="image" alt="" />
    {{ content }}
  </button>
</template>

<style>
.main_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px 20px;
  border-radius: 10px;
  background: var(--1, #06f);
  color: var(--5, #fff);
  font-size: 16px;
  font-weight: 500;
  line-height: 120%;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}
.main_btn:hover {
  background: #fff;
  color: #06f;
  border: 1px solid #06f;
}
.main_btn-img {
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}
.main_btn:hover .main_btn-img {
  filter: invert(0) brightness(1);
}
</style>
