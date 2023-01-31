<template>
	<div class="container">
		<!--紧急事件-->
		<van-tabs v-model="activeName" line-height="1px" color="#1a559a" line-width="80px">
			<van-tab title="数据汇总 ">
				<template #title>
					<img src="@/assets/icon_image/images/icon001.png" alt="" class="img" />
					数据汇总
				</template>
				<!-- 标题 -->
				<div class="home_fire">
					<span class="spn_fire"> </span>
					<span class="fire weight700">紧急事件</span>
				</div>
				<!-- 垟坑基督教堂 -->
				<div class="home_top" v-for="(item, index) in urgent" :key="index">
					<div class="home_left">
						<img src="@/assets/imagee.jpg" class="img"
							@click.stop="$ImagePreview([require('@/assets/imagee.jpg')])" />
					</div>
					<!-- 文字 -->
					<div class="home_conter">
						<div class="home_conter_left">
							<span class="conter_span weight700">垟坑基督教堂</span>
							<van-tag type="primary" plain round text-color="#9B2E25"
								style="background-color: #fcefee; font-weight: bold" v-if="item.type == 1">火灾预警
							</van-tag>
							<van-tag type="primary" plain round text-color="#1A559A"
								style="background-color: #e9f2f8; font-weight: bold" v-if="item.type == 2">人脸识别
							</van-tag>
						</div>
						<div class="conter_span_s">
							<span class="span_item">时间:2022-12-09 08:21:11 </span>
						</div>
					</div>
					<div class="home_rigth">
						<img class="home_rigth_span" src="/images/icon005.png" v-if="item.type == 1"
							@click="$router.push('/fire')" />
						<img class="home_rigth_span" src="/images/icon006.png" v-if="item.type == 2"
							@click="$router.push('/fire')" />
					</div>
				</div>

				<!--  log 图标 -->
				<div class="reporting_log">
					<van-badge :content="allNum.face + '例'" color="#1A559A">
						<img class="reporting_log_icon" src="/images/icon007.png" alt="" />
						<div class="weight700 marginTop10">人脸识别</div>
					</van-badge>
					<van-badge :content="allNum.crowd + '例'" color="#9A7A19">
						<img class="reporting_log_icon" src="/images/icon008.png" alt="" />
						<div class="weight700 marginTop10">人流集聚</div>
					</van-badge>
					<van-badge :content="allNum.fire + '例'" color="#9B2E25">
						<img class="reporting_log_icon" src="/images/icon009.png" alt="" />
						<div class="weight700 marginTop10">火灾预警</div>
					</van-badge>
					<!-- <van-badge content="19例">
				<div class="reportion_log_si"></div>
				<span class="spans weight700">任务预警</span>
			</van-badge> -->
				</div>

				<!-- 预警事件台账 -->
				<div class="ledger">
					<!-- 全部 -->
					<div class="ledger_div">
						<span class="spn_fires"></span>
						<span class="fires weight700">预警事件台账</span>
					</div>
					<van-tabs v-model="active" line-height="1px" line-width="0px" title-active-color="#9B2E25" @click="onTabs">
						<van-tab title="全部">
							<!-- 火灾预警 -->
							<div class="ledger_div_contain" v-for="(item, index) in list" :key="index">
								<div class="ledger_left">
									<img src="@/assets/imagee.jpg" class="ledger_left_img" @click.stop="$ImagePreview([require('@/assets/imagee.jpg')])" />
								</div>
								<!-- 文字 -->
								<div class="ledger_conter">
									<div class="home_conter_left">
										<span class="ledger_span weight700">垟坑基督教堂</span>
										<van-tag type="primary" plain round text-color="#9B2E25"
											style="background-color: #fcefee; font-weight: bold" v-if="item.type == 1">
											火灾预警</van-tag>
										<van-tag type="primary" plain round text-color="#1A559A"
											style="background-color: #e9f2f8; font-weight: bold" v-if="item.type == 2">
											人脸识别</van-tag>
									</div>
									<div class="ledger_span_s">
										<span class="ledger_item">时间:2022-12-09 08:21:11 </span>
									</div>
								</div>
								<div class="ledger_rigth">
									<span class="ledger_rigth_span">
										<span class="ledger_rigth_spans weight700">已完成</span>
									</span>
								</div>
							</div>
						</van-tab>
						<van-tab title="人脸识别">
							<!--  教堂2 -->
						</van-tab>
						<van-tab title="人流聚集"> </van-tab>
						<van-tab title="火灾预警"> </van-tab>
						<van-tab title="任务预警"> </van-tab>
					</van-tabs>
				</div>
			</van-tab>
			<van-tab title="紧急事件">
				<template #title>
					<img src="@/assets/icon_image/images/icon002.png" alt="" class="img" />
					紧急事件
				</template>
				<urgen-pepor></urgen-pepor>
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
	import urgenPepor from "@/views/Reporting/urgenPepor.vue";
	import * as Api from "@/service/api/reporting";
	export default {
		name: "Reporting",
		data() {
			return {
				active: 0,
				urgent: [{
						type: 1,
					},
					{
						type: 2,
					},
				], // 紧急事件
				list: [{
					type: 1
				}, {
					type: 1
				}, {
					type: 2
				}],
				tableIndex: 2,
				activeName: "",
				type: 'all',
				allNum: {},
			};
		},

		created() {
			this.tableIndex = this.$route.query.tableIndex;
		},
		mounted() {
			this.getAllNum();
			this.getEventByType(this.type);
		},
		methods: {
			/**
			 * 标签点击事件
			 */
			onTabs(name , title){
				console.log('name' , name);
				console.log('title' , title);
			},
			selectTable(index) {
				this.tableIndex = index;
			},
			/**
			 * 事件数量统计
			 */
			getAllNum(){
				Api.getAllNum().then(result => {
					console.log('getAllNum' , result);
					this.allNum = result.data[0];
				});
			},
			getEventByType(type){
				Api.getEventByType(type).then(result => {
					console.log('getEventByType' , result);
					this.list = this.list.concat(result.data.resultMap);
				});
			}
		},
		components: {
			urgenPepor,
		},
	};
</script>

<style scoped lang="less">
	// 紧急事件

	::v-deep .van-tag {
		padding: 2px 5px;
		margin-left: 10px;
	}

	.home_fire {
		padding-top: 10px;

		.spn_fire {
			display: inline-block;
			width: 2px;
			height: 12px;
			margin-left: 10px;
			background-image: url("@/assets/image/img001.png");
		}

		.fire {
			font-size: 14px;
			color: #9b2e25;
			margin-left: 10px;
		}
	}

	// 教堂
	.home_top {
		height: 3.75rem;
		display: flex;
		border-radius: 0.5rem;
		margin: 10px 16px 0 16px;
		align-items: center;
		background-color: #ffff;
		border: 1px solid #ffffff;
		box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);

		.home_left {
			width: 65px;
			height: 51px;
			margin-left: 4px;
		}

		.img {
			width: 65px;
			height: 51px;
			border-radius: 5px;
			margin-left: 5px;
		}

		// 文字
		.home_conter {
			flex: 1;

			.conter_span {
				display: inline-block;
				margin-left: 12px;
				font-size: 13px;
			}

			.conter_span_s {
				margin-left: 13px;
				margin-top: 9px;
			}

			.span_item {
				color: #9f9e9e;
			}
		}

		.home_rigth {
			width: 44px;
			height: 44px;
			margin-right: 10px;

			.home_rigth_span {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 44px;
				height: 44px;
				// background-color: #9b2e25;
				// border-radius: 44px;
			}

			.seeBack {
				background-color: #f3f7fc;
			}
		}
	}

	// tab 栏切换
	.img {
		width: 19px;
		height: 18px;
		margin-right: 5px;
	}

	.ledger {
		border-top: 10px solid #f6f6f6;
	}

	.ledger_div {
		height: 30px;
		line-height: 30px;
		background-color: #ffffff;
		margin-top: 8px;

		.spn_fires {
			display: inline-block;
			width: 2px;
			height: 12px;
			margin-left: 10px;
			background-image: url("@/assets/image/img001.png");
		}

		.fires {
			color: #000000;
			font-size: 14px;
			margin-left: 13px;
		}
	}

	.ledger {
		::v-deep .van-tab__text {
			font-weight: 700;
		}
	}

	.ledger_div_contain {
		height: 3.75rem;
		display: flex;
		border-radius: 0.5rem;
		align-items: center;
		background-color: #ffffff;
		margin: 10px 16px 10px 16px;
		border: 1px solid #ffffff;
		box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);

		.ledger_left {
			width: 65px;
			height: 51px;
			margin-left: 4px;
		}

		.ledger_left_img {
			width: 65px;
			height: 51px;
			border-radius: 5px;
			margin-left: 5px;
		}

		// 文字
		.ledger_conter {
			flex: 1;

			.ledger_span {
				display: inline-block;
				margin-left: 12px;
				font-size: 13px;
			}

			.ledger_log {
				display: inline-block;
				width: 58px;
				height: 18px;
				margin-left: 8px;
				background-image: url("@/assets/image/rwu.png");
				vertical-align: middle;
			}

			.ledger_span_s {
				margin-left: 13px;
				margin-top: 9px;
			}

			.ledger_item {
				color: #9f9e9e;
			}
		}

		.ledger_rigth_spans {
			font-size: 16px;
			color: #6c7b84;
			margin-right: 22px;
		}
	}

	// 图标
	.reporting_log {
		padding: 10px 20px;
		text-align: center;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		// border-bottom: 10px solid #f6f6f6;

		.reporting_log_icon {
			width: 95px;
			height: 54px;
		}

		::v-deep .van-badge--fixed {
			position: absolute;
			top: 5px;
			right: 15px;
			padding: 1px 4px;
		}
	}
</style>
