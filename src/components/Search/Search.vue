<template>
	<div id="search_container">
		<van-search class="sar" v-model="inputObject.userInput" :id="inputObject.inputId" placeholder="输入场所、教职人员关键字搜索" type="text" @search="send" />
		<!-- <van-button type="info" class="btn" id="searchBtn" size="small" @click="send">搜索</van-button> -->
	</div>
</template>

<script>
	import bus from "@/bus/bus";
	export default {
		data() {
			return {
				inputObject: {
					userInput: "",
					inputId: "searchInput",
				},
			};
		},
		methods: {
			send() {
				bus.$emit("shareUserInput", this.inputObject);
			},
		},
		mounted() {
			this.send();
		},
		//
	};
</script>

<style lang="less" scoped>
	#search_container {
		width: 100%;
		z-index: 999;
		display: flex;
		position: absolute;
		margin-top: 20px;
	}

	#search_container #searchBtn {
		width: 60px;
		margin-top: 11px;
		margin-right: 30px;
	}

	.sear {
		width: 100%;
		z-index: 999;
		display: flex;
		position: absolute;
		/* background-color: #fff; */
	}

	.sar {
		flex: 1;

		background-color: rgba(248, 244, 244, 0.1);
	}

	.van-search__content {
		background-color: #fff;
		border-radius: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
</style>
