<template>
	<div class="page">
		<van-search 
			v-model="searchName" 
			background="#F6F6F6" 
			placeholder="输入场所名称、设备编码查询" 
			@focus="$router.push({path: '/monitor/search' , query: {source: 'search'}})"
		/>
		<div class="title fontSize12 weight700">
			茶山街道 - 王某某
		</div>
		<div class="typeList marginTop10">
			<van-badge content="85例" color="#2C9A35">
				<div class="type-block" @click="$router.push({path: '/alerts' , query: {tableIndex: 1}})">
					<img class="type-icon" src="/images/icon010.png">
					<div class="type-name weight700 textAlignCenter">宗教场所</div>
				</div>
			</van-badge>
			<van-badge content="584例" color="#9A7A19">
				<div class="type-block" @click="$router.push({path: '/alerts' , query: {tableIndex: 2}})">
					<img class="type-icon" src="/images/icon011.png">
					<div class="type-name weight700 textAlignCenter">监控设备</div>
				</div>
			</van-badge>
			<van-badge content="565例" color="#1052A1">
				<div class="type-block" @click="$router.push('/monitor/search')">
					<img class="type-icon" src="/images/icon012.png">
					<div class="type-name weight700 textAlignCenter">在线设备</div>
				</div>
			</van-badge>
			<van-badge content="19例" color="#3D1C9A">
				<div class="type-block" @click="$router.push({path: '/alerts' , query: {tableIndex: 3}})">
					<img class="type-icon" src="/images/icon013.png">
					<div class="type-name weight700 textAlignCenter">报修设备</div>
				</div>
			</van-badge>
		</div>
		<div class="echarts-block">
			<div class="top">
				<div class="left">
					<img class="icon" src="/images/icon015.png">
					<div class="name fontSize14 weight700">
						AI预警动态数据
					</div>
				</div>
				<div class="tables fontSize14 weight700">
					<div class="table" :class="{check: index == tableIndex}" v-for="(item , index) in tableList"
						:key="index" @click="selectTable(index)">
						{{ item.name }}
					</div>
				</div>
			</div>
			<div id="data" class="con"></div>
		</div>
		<div class="echarts-block">
			<div class="top">
				<div class="left">
					<img class="icon" src="/images/icon014.png">
					<div class="name fontSize14 weight700">
						预警事件趋势图
					</div>
				</div>
				<div class="tables fontSize14 weight700">
					<div class="table" :class="{check: index == timeIndex}" v-for="(item , index) in timeList"
						:key="index" @click="selectTime(index)">
						{{ item.name }}
					</div>
				</div>
			</div>
			<div id="trend" class="con"></div>
		</div>
	</div>
</template>

<script>
	import * as echarts from "echarts";
	export default {
		data() {
			return {
				searchName: '',
				tableIndex: 1,
				tableList: [
					{
						id: 1,
						name: '人脸'
					},
					{
						id: 2,
						name: '人流'
					},
					{
						id: 3,
						name: '火灾'
					},
				],
				timeIndex: 0,
				timeList: [
					{
						id: 1,
						name: '日'
					},
					{
						id: 2,
						name: '月'
					},
					{
						id: 3,
						name: '周'
					},
				]
			}
		},
		mounted() {
		    this.getData();
			this.getTrend();
		},
		methods: {
			/**
			 * 切换
			 * @param {Object} index
			 */
			selectTable(index) {
				this.tableIndex = index;
				this.getData();
			},
			/**
			 * 切换
			 * @param {Object} index
			 */
			selectTime(index){
				this.timeIndex = index;
				this.getTrend();
			},
			/**
			 * 动态数据
			 */
			getData() {
				//预警事件趋势图
				let myChart = echarts.init(document.getElementById("data"));

				// 指定图表的配置项和数据
				let option = {
					tooltip: {},
					color: ["#FD5E02"],
					xAxis: {
						boundaryGap: false,
						data: ["1", "2", "3", "4", "5", "6", "7"],
					},
					yAxis: {},
					grid: {
						left: "0%",
						top: "10%",
						right: "5px",
						bottom: "0%",
						containLabel: true
					},
					series: [{
						type: "line",
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgba(253, 94, 2, 0.8)'
								}, {
									offset: 0.8,
									color: 'rgba(250, 208, 184, 0.2)'
								}], false),
							}
						},
						smooth: true,
						data: [5, 20, 36, 10, 10, 20, 55],
					}, ],
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			/**
			 * 趋势图
			 */
			getTrend(){
				//预警事件趋势图
				let myChart = echarts.init(document.getElementById("trend"));
				
				// 指定图表的配置项和数据
				let option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						top: 10,
						right: "0%",
						data: ['人脸','人流','火灾'],
					},
					color: ['#2C9A35' , '#9A7A19' , '#3D1C9A'],
					xAxis: {
						type: 'category',
						// boundaryGap: false,
						data: ["1", "2", "3", "4", "5", "6", "7"],
					},
					yAxis: {},
					grid: {
						left: "0%",
						top: "20%",
						right: "0%",
						bottom: "0%",
						containLabel: true
					},
					series: [{
					  name: '人脸',
					  type: 'line',
					  stack: 'Total',
					  data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
					  name: '人流',
					  type: 'line',
					  stack: 'Total',
					  data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
					  name: '火灾',
					  type: 'line',
					  stack: 'Total',
					  data: [150, 232, 201, 154, 190, 330, 410]
					}],
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			}
		}
	}
</script>

<style scoped lang="less">
	.empty{
		background-color: #F6F6F6 !important;
	}
	
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

	.title {
		padding: 0px 25px;
	}

	.typeList {
		background-color: #FFFFFF;
		padding: 15px 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;

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

	.echarts-block {
		margin: 10px 8px 0px;
		padding: 20px;
		background: #FFFFFF;
		border-radius: 10px;

		.top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.icon {
					height: 15px;
					margin-right: 5px;
				}
			}

			.tables {
				display: flex;
				align-items: center;

				.table {
					width: 45px;
					height: 25px;
					line-height: 25px;
					text-align: center;
					background: #FFFFFF;
					border: 1px solid #FFFFFF;
					border-radius: 25px;
				}

				.check {
					background: #FCEFEE;
					border: 1px solid #9B2E25;
					color: #9B2E25;
				}
			}
		}

		#data,#trend{
			width: 100%;
			height: 200px;
		}
	}
</style>
