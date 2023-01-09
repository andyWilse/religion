<template>
	<div class="page">
		<van-search 
			v-model="searchName" 
			background="#F6F6F6" 
			placeholder="输入场所名称、设备编码查询" 
			@search="search"
		/>
		<div class="list">
			<div class="li padding15" v-for="(item , index) in list" :key="index" 
			@click="$router.push({path: '/alerts/see' , query: {id: item.id,source: source}})">
				<div class="title fontSize14 weight700">
					头陀寺
				</div>
				<div class="address fontSize12 hasColor1">
					浙江省温州市瓯海区勤中路与104国道交叉口西北520米
				</div>
				<div class="con padding10" v-if="!isnNewEmpty(item.cont)">
					<div class="con-line fontSize12">
						<div class="left hasColor1">所属机构：</div>
						<div class="right blackColor1">瓯海区 泽雅镇</div>
					</div>
					<div class="con-line fontSize12">
						<div class="left hasColor1">登记证号：</div>
						<div class="right blackColor1">宗教证字（浙）J030030096</div>
					</div>
					<div class="con-line fontSize12">
						<div class="left hasColor1">第一负责人：</div>
						<div class="right blackColor1">陈*旺 138****744</div>
					</div>
					<div class="con-line fontSize12">
						<div class="left hasColor1">工作联络员：</div>
						<div class="right blackColor1">陈*旺 138****744</div>
					</div>
				</div>
				<div class="camera-list">
					<div class="camera" v-for="(camera , key) in item.cameraList" :key="key">
						<img class="camera-icon" src="/images/icon016.png">
						<div class="name fontSize14 blueColor weight700">监控1-前门：FJA057401</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { isEmpty } from '@/utils/util';
	export default{
		data() {
			return {
				source: '', // 来源
				searchName: '',
				list: [
					{id: 1,cont: {phone: '111111111'},cameraList: [1,2,3]},
					{id: 2,cont: {},cameraList: []},
					{id: 3,cont: {},cameraList: []},
				],
			}
		},
		created() {
			this.source = this.$route.query.source || '';
		},
		methods: {
			/**
			 * 判断是否为空
			 * @param {Object} val
			 */
			isnNewEmpty(val){
				return isEmpty(val);
			},
			/**
			 * 搜索
			 * @param {Object} e
			 */
			search(e){
				
			}
		}
	}
</script>

<style scoped lang="less">
	.page {
		width: 100vw;
		min-height: 100vh;
		background-color: #F6F6F6;
	}
	
	::v-deep .van-search__content {
		background-color: #FFFFFF;
		border-radius: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
	}
	
	.list{
		// background-color: #FFFFFF;
		
		.li{
			margin-bottom: 10px;
			background-color: #FFFFFF;
			
			.con{
				background-color: #F4F7FC;
				border-radius: 10px;
				margin: 18px 0px;
				
				.con-line{
					display: flex;
					align-items: center;
					margin: 2px 0px;
					
					.left{
						flex: 2.3;
					}
					
					.right{
						flex: 7.7;
					}
				}
			}
			
			.camera-list{
				.camera{
					background-color: #E9F2F8;
					border: 1px solid #1A559A;
					border-radius: 22px;
					display: flex;
					align-items: center;
					padding: 2px 5px;
					width: 175px;
					margin-bottom: 10px;
					
					.camera-icon{
						width: 14px;
						height: 15px;
						margin-right: 7px;
					}
				}
				
				.camera:last-child{
					margin-bottom: 0px;
				}
			}
		}
	}
</style>