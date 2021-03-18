<template>
    <div>
        <h1 id = "bar">Bar Chart</h1>
        <chart></chart>
    </div>
</template>

<script>
import Chart from './BarChart.js'

export default {
    components: {
        Chart
    }
};
</script>

<style scoped>

#bar {
  background-color:lightgray;
  text-align: center;
  
}
</style>