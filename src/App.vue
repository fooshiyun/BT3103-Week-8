<template>
  <div id='app'>
    <h1> BT3103 food shop </h1>
    <router-view></router-view> 
  </div>

</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: function() {
    return {
    }
  }
}
</script>

<style>
#app {
  text-align: center;
  color:lightseagreen;
}
</style>