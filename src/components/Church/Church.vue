<template>
	<div class="church-con">
		<div class="title">
			<div class="title-left">
				<div class="titlt-left-top">
					<div class="title-name fontSize18 weight700">
						洋坑基督教堂
					</div>
					<div class="title-type">
						<van-image width="20" height="20" src="/userimage/D.png" />
						基督教
					</div>
				</div>
				<div class="title-bottom">
					所属机构：甄海区 泽雅镇
				</div>
			</div>
			<div class="title-right">
				<van-image width="50" height="50" src="/images/icon017.png" />
			</div>
		</div>
		<!-- 图片 -->
		<div class="images">
			<van-image width="200" height="113" class="img" fit="cover" v-for="(item , index) in images" :key="index"
				:src="item" @click="showImage(index)" />
		</div>
		<!-- 按钮 -->
		<div class="bnts">
			<div class="btn" @click="openLocation">
				<van-image class="btn-icon" width="30" height="30" src="/images/icon001.jpg" />
				<div class="btn-name weight700 textHide1">
					一键导航:甄海区 泽雅镇
				</div>
			</div>
			<div class="btn" @click="telShow = true">
				<van-image class="btn-icon" width="30" height="30" src="/images/icon002.jpg" />
				<div class="btn-name weight700 textHide1">
					一键拨号:<span class="blueColor">0577-88511932</span>
				</div>
			</div>
		</div>
		<!-- 信息块 -->
		<van-collapse v-model="activeNames">
			<van-collapse-item title="基本信息" name="1">
				<div class="block-con hasColor1 fontSize12">
					<div class="block-line">
						<div class="block-line-left">
							所属机构：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							登记证号：宗教证字（浙）J030030096
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							第一负责人：陈*旺 <span class="blueColor">138****744</span>
						</div>
						<div class="block-line-right">
							<div class="see redColor1" @click="see">
								查看
							</div>
						</div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							工作联络员：陈*旺 <span class="blueColor">138****744</span>
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							场所电话：<span class="blueColor">0577-88511932</span>
						</div>
						<div class="block-line-right"></div>
					</div>
				</div>
			</van-collapse-item>
			<van-collapse-item title="关联活动" name="2">
				<div class="block-con hasColor1 fontSize12">
					<div class="block-line">
						<div class="block-line-left">
							备案1：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							备案2：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
				</div>
			</van-collapse-item>
			<van-collapse-item title="教职人员" name="3">
				<div class="block-con hasColor1 fontSize12">
					<div class="block-line">
						<div class="block-line-left">
							第一责任人：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							第二主任人：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							关联教职人员：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
				</div>
			</van-collapse-item>
			<van-collapse-item title="监管干部" name="4">
				<div class="block-con hasColor1 fontSize12">
					<div class="block-line">
						<div class="block-line-left">
							监管干部：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							监管干部：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							监管干部：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
				</div>
			</van-collapse-item>
			<van-collapse-item title="三人驻堂" name="5">
				<div class="block-con hasColor1 fontSize12">
					<div class="block-line">
						<div class="block-line-left">
							组长：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							组员：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
					<div class="block-line">
						<div class="block-line-left">
							组员：甄海区 泽雅镇
						</div>
						<div class="block-line-right"></div>
					</div>
				</div>
			</van-collapse-item>
		</van-collapse>
		<DialTel :telShow="telShow" :tel="18810037036" @close="telShow = false"></DialTel>
	</div>
</template>

<script>
	import DialTel from "@/components/DialTel/DialTel.vue";
	import {
		ImagePreview
	} from 'vant';
	export default {
		components: {
			DialTel,
		},
		props: {
			data: Object
		},
		data() {
			return {
				images: [
					'/images/img001.jpg',
					'/images/img001.jpg',
					'/images/img001.jpg',
				],
				telShow: false,
				activeNames: [],
			}
		},
		methods: {
			/**
			 * 图片预览
			 * @param {Object} index
			 */
			showImage(index) {
				console.log('showImage', index);
				ImagePreview({
					images: this.images,
					startPosition: index,
				});
			},
			/**
			 * 查看
			 */
			see() {
				this.$emit('see');
			},
			/**
			 * 打开地图
			 */
			openLocation() {
				let url = `https://uri.amap.com/navigation?from=${this.data.myPosition}&to=${this.data.position}`;
				// let url = 'https://uri.amap.com/navigation?from=116.462826,39.959808&to=120.68,27.96';
				location.href = url;
			},
		}
	}
</script>

<style scoped lang="less">
	.church-con {
		width: 100%;
		max-width: 100%;
		height: 64vh;
		overflow-x: auto;
		padding: 5%;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0px;
		left: 0px;
		box-sizing: border-box;
		border-radius: 10px 10px 0px 0px;
	}

	.title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title-left {
			.titlt-left-top {
				display: flex;
				align-items: center;

				.title-type {
					display: flex;
					align-items: center;
					margin-left: 10px;

					.van-image {
						margin-right: 5px;
					}
				}
			}
		}
	}

	.images {
		overflow-x: auto;
		white-space: nowrap;
		margin: 10px 0px;

		.img {
			margin-right: 10px;
		}

		.img:last-child {
			margin-right: 0px;
		}
	}

	.bnts {
		display: flex;
		justify-content: space-between;

		.btn {
			padding: 5px 10px;
			border-radius: 50px;
			display: flex;
			align-items: center;
			box-shadow: 0px 0px 10px rgba(167, 167, 167, .3);
			margin-right: 10px;

			.btn-icon {
				flex-shrink: 0;
			}

			.btn-name {
				margin-left: 10px;
				font-size: 14px;
			}
		}

		.btn:last-child {
			margin-right: 0px;
		}
	}

	::v-deep .van-cell {
		padding: 10px 0px;
	}

	::v-deep .van-cell__title {
		font-size: 14px;
		color: #000000;
		font-weight: 700;
	}

	::v-deep .van-hairline--top-bottom::after {
		border-width: 0px;
	}

	::v-deep .van-collapse-item--border::after,
	::v-deep .van-cell::after {
		left: 0px;
		right: 0px;
	}

	::v-deep .van-collapse-item--border::after,
	::v-deep .van-cell::after{
		border-top: 1px dashed #c8c8c8;
	}

	::v-deep .van-collapse-item__content {
		padding: 0px;
	}

	.block-con {
		padding: 10px 0px;

		.block-line {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.see {
				background-color: #fcefee;
				border: 1px solid #9b2e25;
				border-radius: 40px;
				padding: 2px 10px;
			}
		}
	}

	.block {
		.block-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom-width: 1px;
			border-bottom-style: dashed;
			border-bottom-color: #c8c8c8;
			padding: 10px 0px;
		}


	}
</style>
