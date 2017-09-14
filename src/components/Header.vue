<template>
	<div class="header">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router="ture" theme="dark">
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="about">Go to about</el-menu-item>
		    <el-menu-item index="2-3"><router-link to="/some">Go to some</router-link></el-menu-item>
		    <el-menu-item index="2-4"><router-link to="/about">Go to about</router-link></el-menu-item>
		  </el-submenu>
		  <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
	</div>
</template>

<script>
import Some from '../components/Some';
import About from '../components/About';

export default {
  components: {
    Some,
    About,
  },
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
	
</style>