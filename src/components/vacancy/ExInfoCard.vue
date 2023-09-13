<script>
export default {
  props: {
    name: String,
    value: String,
  },
};
</script>

<template>
  <div class="info_card">
    <p class="info_card-pre-title">
      {{ name }}
    </p>
    <h3 class="info_card-tite">
      {{ value }}
    </h3>
  </div>
</template>

<style>
.info_card {
  width: 25%;
  padding: 30px 15px;
  border-radius: 10px;
  background: var(--4, #f3f3f3);
}
.info_card-pre-title {
  color: var(--3, #606060);
  font-size: 12px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 10px;
}
.info_card-tite {
  color: var(--2, #1a1a1a);
  font-size: 14px;
  font-weight: 500;
  line-height: 120%;
}
</style>
