<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    myHeader: Header,
  },
};
</script>

<style>

</style>
