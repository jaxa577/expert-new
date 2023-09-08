<template>
  <div class="line-chart">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    watchedData: {
      type: Array,
      required: true,
    },
    likedData: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext("2d");
      const data = {
        labels: this.labels,
        datasets: [
          {
            label: "Watched",
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.1)",
            data: this.watchedData,
          },
          {
            label: "Liked",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
            data: this.likedData,
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,
      };

      new Chart(ctx, {
        type: "line",
        data: data,
        options: options,
      });
    },
  },
};
</script>

<style scoped>
.line-chart {
  max-width: 600px;
  margin: 0 auto;
}
</style>
