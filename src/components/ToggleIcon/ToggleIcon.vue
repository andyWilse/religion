<template>
	<div class="Icon_container">
		<van-tabbar route class="van_taBar" size="14px" fixed safe-area-inset-bottom>
			<van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
			<van-tabbar-item replace to="/reporting" icon="star-o">预警</van-tabbar-item>
			<van-tabbar-item replace to="/themap" icon="location-o">场所地图</van-tabbar-item>
			<van-tabbar-item replace to="/monitor" icon="chat-o">监控</van-tabbar-item>
			<van-tabbar-item replace to="/ltsmine" icon="smile-o">任务</van-tabbar-item>
		</van-tabbar>
		<div class="empty"></div>
	</div>
</template>
<script>
	export default {
		name: "ToggleIcon",
		data() {
			return {};
		},
	};
</script>
<style scoped lang="less">
	.Icon_container {
		color: #666;
	}
</style>
