<template>
  <div>
    <line-chart
      :watchedData="watchedData"
      :likedData="likedData"
      :labels="labels"
    />
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";

export default {
  components: {
    LineChart,
  },
  data() {
    return {
      watchedData: [10, 20, 15, 30, 25],
      likedData: [5, 10, 8, 12, 9],
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    };
  },
};
</script>
