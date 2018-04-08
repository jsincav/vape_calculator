<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-1"></div>
      <cig-form></cig-form>
      <vape-form></vape-form>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <savings-results></savings-results>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app-header {
  line-height: 1;
  border-bottom: 1px solid #e5e5e5;
  text-align: center;
}

.row {
    padding-top: 10px;
}
</style>
