<template>
	<div class="page">
		<van-sticky>
			<van-search v-model="searchName" background="#F6F6F6" placeholder="输入场所名称、设备编号查询" />
		</van-sticky>
		<div class="list padding15">
			<div class="li" v-for="(item , index) in list" :key="index" @click="$router.push('/alerts/See')">
				<div class="top fontSize14 blackColor weight700">
					摄像头FJa00215401检查
				</div>
				<div class="bottom">
					<div class="left">
						<div class="left-line hasColor1">
							地址：泽雅镇垟坑基督教堂
						</div>
						<div class="left-line hasColor1">
							时间：2022-12-09 08:21:11
						</div>
					</div>
					<div class="right fontSize14 weight700 whiteColor">
						<div class="btn info" v-if="item.status == 1">去处理</div>
						<div class="btn" v-else-if="item.status == 2">未解决</div>
						<div class="hasColor2" v-else-if="item.status == 3">已解决</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchName: '',
				list: [{status: 1},{status: 2},{status: 1},{status: 1},{status: 3},{status: 3}],
			};
		},
		mounted() {
			
		}
	};
</script>

<style scoped lang="less">
	.van-search__content{
		background-color: #fff;
		border-radius: 5px;
	}
	
	.van-search .van-cell{
		padding: 10px 8px 10px 0;
	}
	
	.list{
		margin-bottom: 60px;
		.li{
			padding: 0px 15px;
			background: #FFFFFF;
			box-shadow: 0px 0px 27px 0px rgba(232,232,232,0.54);
			border-radius: 10px;
			margin-bottom: 10px;
			
			.top{
				padding: 10px 0px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #E9E9E9;
			}
			
			.bottom{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 0px;
				
				.right{
					.btn{
						padding: 2px 8px;
						background: #9B2E25;
						border-radius: 5px;
					}
					
					.info{
						background: #1A559A;
					}
				}
			}
		}
	}
</style>
