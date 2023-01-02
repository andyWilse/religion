<template>
	<div class="container">
		<div class="log_container">
			<div class="church" :class="[index == listIndex ? 'check' : '']" @click="qiehuan(index)" v-for="(item , index) in list" :key="index">
				<img class="church-icon" :src="item.icon" alt="" />
				<div class="name blackColor">
					{{ item.name }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import bus from "@/bus/bus";
	export default {
		name: "Log",
		
		data() {
			return {
				listIndex: 0,
				list: [
					{type: 1, icon: '/userimage/F.png', name: '佛教'},
					{type: 2, icon: '/userimage/D.png', name: '道教'},
					{type: 3, icon: '/userimage/J.png', name: '基督教'},
					{type: 4, icon: '/userimage/T.png', name: '天主教'},
					{type: 5, icon: '/userimage/Y.png', name: '伊斯兰教'},
				],
			}
		},
		created() {
			bus.$on("usermap", (value) => {
				console.log(value);
			});
			
			this.selectChurch();
		},
		methods: {
			/**
			 * 切换宗教
			 * @param {Object} index
			 */
			qiehuan(index) {
				if(this.listIndex != index){
					this.listIndex = index;
					this.selectChurch();
				}
			},
			/**
			 * 通知
			 */
			selectChurch(){
				bus.$emit("selectChurch", this.list[this.listIndex]);
			}
			
		},
	};
</script>

<style scoped lang="less">
	.log_container {
		position: absolute;
		right: 0;
		top: 25vh;
		display: flex;
		flex-direction:column;
		justify-content : flex-start;
		align-items: flex-end;
	}

	.church{
		width: 90px;
		display: flex;
		background-color: #FFFFFF;
		padding: 7px 10px;
		margin-bottom: 10px;
		border-radius: 60px 0px 0px 60px;
		
		.church-icon{
			width: 20px;
			height: 20px;
			margin-right: 10px;
		}
	}
	
	.check{
		width: 100px;
		border-width: 1px;
		border-style: solid;
		border-color: #000;
		border-right: 0px;
		font-weight: 700;
		font-size: 14px;
	}
</style>
