<template>
  <div class="chart">
    <h1 id = "line">Line Chart</h1>
    <chart></chart>
  </div>
</template>

<script>
import Chart from "./LineChart.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>

#line {
  background-color:lightgray;
  text-align: center;
  
}
</style>