<template>
  <main>
    <div class="compCirclebar">
      <svg
        class="compCirclebar__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <circle r="45" cx="50" cy="50" />
        <path
          ref="path"
          class="meter"
          d="M5,50a45,45 0 1,0 90,0a45,45 0 1,0 -90,0"
          stroke-linecap="round"
          stroke-linejoin="round"
          :stroke-dashoffset="perc"
          stroke-dasharray="282.78302001953125"
        />
        <text
          x="50"
          y="50"
          text-anchor="middle"
          dominant-baseline="central"
          font-size="20"
        >
          {{ value + "%" }}
        </text>
      </svg>
    </div>
  </main>
</template>

<script>
export default {
  //   name: "ABOUT",
  computed: {
    to() {
      return Math.max(0, this.length * ((100 - this.value) / 100));
    },
  },
  data() {
    return {
      length: 0,
      perc: 282,
      value: 45,
    };
  },
  mounted() {
    this.length = this.$refs.path.getTotalLength();
    this.perc = this.to;
  },
};
</script>

<style>
.compCirclebar__svg {
  display: inline-flex;
  vertical-align: bottom;
  width: 180px;
  height: 180px;
}
circle {
  stroke: #e5f0ff;
  stroke-width: 5px;
  stroke-dasharray: 0;
  fill: none;
}

.meter {
  stroke-width: 5px;
  stroke: #06f;
  fill: none;
  transition: stroke-dashoffset 1s cubic-bezier(0.43, 0.41, 0.22, 0.91);
  transform-origin: center center;
  transform: rotate(-90deg) scaleX(-1);
}

text {
  fill: #1a1a1a;
  font-weight: bold;
}
.container {
  max-width: 1220px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
