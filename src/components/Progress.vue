<template>
  <section>
    <div class="flex info">
      <div class="info-name">SPEED</div>
      <div class="info-code" @click="toggleCode">code</div>
    </div>
    <div
      class="pie"
      :data-pie="{
        speed: 30,
        percent: percent,
        colorSlice: '#DD2C00',
        colorCircle: '#f1f1f1',
        round: true
      }"
    ></div>
    <pre class="code" v-if="showCode">
      <code>{{ codeContent }}</code>
    </pre>
  </section>
</template>

<script>
export default {
  data() {
    return {
      percent: 75,
      showCode: false,
      codeContent: `
        // Put the JavaScript code or library code here
      `
    };
  },
  methods: {
    toggleCode() {
      this.showCode = !this.showCode;
    },
    radialAnimate() {
      // The JavaScript code from the window.addEventListener("DOMContentLoaded", () => {}) block
      // ... (Copy the code inside the window.addEventListener function and adjust accordingly)
    }
  },
  mounted() {
    this.radialAnimate();
  }
};
</script>

<style>
/* Add the CSS styles here */
</style>

