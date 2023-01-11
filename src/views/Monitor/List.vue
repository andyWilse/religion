<template>
	<div class="page">
		<van-search v-model="searchName" background="#F6F6F6" placeholder="输入场所名称、设备编号查询" />
		<div class="title fontSize12 weight700">
			茶山街道 - 王某某
		</div>
		<div class="typeList">
			<van-badge content="85例" color="#2C9A35">
				<div class="type-block" @click="$router.push('/monitor/search')">
					<img class="type-icon" src="/images/icon010.png">
					<div class="type-name weight700 textAlignCenter">宗教场所</div>
				</div>
			</van-badge>
			<van-badge content="584例" color="#9A7A19">
				<div class="type-block">
					<img class="type-icon" src="/images/icon011.png">
					<div class="type-name weight700 textAlignCenter">监控设备</div>
				</div>
			</van-badge>
			<van-badge content="565例" color="#1052A1">
				<div class="type-block">
					<img class="type-icon" src="/images/icon012.png">
					<div class="type-name weight700 textAlignCenter">在线设备</div>
				</div>
			</van-badge>
			<van-badge content="19例" color="#3D1C9A">
				<div class="type-block" @click="$router.push('/alerts')">
					<img class="type-icon" src="/images/icon013.png">
					<div class="type-name weight700 textAlignCenter">报修设备</div>
				</div>
			</van-badge>
		</div>
		<div class="list padding15">
			<div class="list-title fontSize14 weight700 blackColor">
				设备情况
			</div>
			<div class="tables">
				<div class="table" :class="[tableIndex == 1 ? 'check1' : '']" @click="selectTable(1)">
					<div class="left">
						<img class="table-icon" src="/images/icon018.png" alt="">
					</div>
					<div class="right fontSize12 weight700">宗教场所</div>
				</div>
				<div class="table" :class="[tableIndex == 2 ? 'check2' : '']" @click="selectTable(2)">
					<div class="left left2">
						<img class="table-icon" src="/images/icon019.png" alt="">
					</div>
					<div class="right fontSize12 weight700">监控设备</div>
				</div>
				<div class="table" :class="[tableIndex == 3 ? 'check3' : '']" @click="selectTable(3)">
					<div class="left left3">
						<img class="table-icon" src="/images/icon021.png" alt="">
					</div>
					<div class="right fontSize12 weight700">保修设备</div>
				</div>
			</div>
		</div>
		<div class="deviceList">
			<div class="device padding15" v-for="(item , index) in list" :key="index">
				<div class="device-name fontSize14 blackColor weight700">卧云禅寺</div>
				<div class="device-msg hasColor1">温州市瓯海区雪山路367号景山公园内</div>
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
				tableIndex: 3,
			};
		},
		mounted() {
			
		},
		methods: {
			selectTable(index){
				this.tableIndex = index;
			}
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
	
	.title {
		padding: 0px 25px 10px;
		background-color: #F6F6F6;
	}
	
	.flexCenter{
		display: flex;
		align-items: center;
	}
	
	.flexCenterBetween:extend(.flexCenter){
		justify-content: space-between;
	}
	
	.typeList:extend(.flexCenterBetween){
		background-color: #FFFFFF;
		padding: 15px 25px;
		border-bottom: 10px solid #F6F6F6;
	
		.type-icon {
			width: 60px;
			height: 60px;
		}
	
		::v-deep .van-badge--fixed {
			position: absolute;
			top: 5px;
			right: 8px;
			padding: 1px 4px;
		}
	
		.type-name {
			margin-top: 5px;
		}
	}

	.list{
		border-bottom: 1px solid #f6f6f6;
		
		.list-title{
			position: relative;
			padding-left: 10px;
		}
		
		.list-title::before{
			width: 2px;
			height: 13px;
			content: '';
			background-color: #9b2e25;
			position: absolute;
			left: 0px;
			top: 5px;
		}	
		
		.tables:extend(.flexCenter){
			margin-top: 10px;
			
			.table:extend(.flexCenter){
				margin-right: 10px;
				height: 25px;
				line-height: 25px;
				padding-right: 10px;
				border-radius: 25px;
				
				.left:extend(.flexCenter){
					width: 25px;
					height: 25px;
					border-radius: 25px;
					justify-content: center;
					background-color: #ecf6e5;
					margin-right: 5px;
					
					.table-icon{
						width: 15px;
						height: 12px;
					}
				}
				
				.left2{
					background-color: #faf1ed;
				}
				
				.left3{
					background-color: #f0f2ff;
				}
			}
			
			.check1{
				background-color: #ecf6e5;
				color: #2c9a35;
				
				.left{
					margin-right: 0px;
				}
			}
			
			.check2{
				background-color: #faf1ed;
				color: #9a7a19;
				
				.left{
					margin-right: 0px;
				}
			}
			
			.check3{
				background-color: #f0f2ff;
				color: #3d1c9a;
				
				.left{
					margin-right: 0px;
				}
			}
		}
	}

	.deviceList{
		.device{
			border-bottom: 10px solid #F6F6F6;
		}
		
		.device:last-child{
			border-bottom: none;
		}
	}
</style>