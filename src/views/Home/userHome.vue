<template>
	<div class="container">
		<!-- 紧急事件 -->
		<div class="block padding10-0 marginBottom10">
			<!-- 标题 -->
			<div class="home_fire">
				<span class="spn_fire"> </span>
				<span class="fire weight700">紧急事件</span>
			</div>
			<!-- 垟坑基督教堂 -->
			<div class="home_top" v-for="(item, index) in urgent" :key="index">
				<div class="home_left">
					<img src="@/assets/imagee.jpg" alt="" class="img" />
				</div>
				<!-- 文字 -->
				<div class="home_conter">
					<div class="home_conter_left">
						<span class="conter_span fontSize14 weight700">垟坑基督教堂</span>
						<van-tag type="primary" plain round text-color="#9B2E25"
							style="background-color: #FCEFEE;font-weight: bold;" v-if="item.type == 1">火灾预警</van-tag>
						<van-tag type="primary" plain round text-color="#1A559A"
							style="background-color: #E9F2F8;font-weight: bold;" v-if="item.type == 2">人脸识别</van-tag>
					</div>
			
					<div class="conter_span_s">
						<span class="span_item">时间:2022-12-09 08:21:11 </span>
					</div>
				</div>
				<div class="home_rigth">
					<img class="home_rigth_span" src="/images/icon005.png" v-if="item.type == 1"
						@click="$router.push('/fire')">
					<img class="home_rigth_span" src="/images/icon006.png" v-if="item.type == 2"
						@click="$router.push('/fire')">
				</div>
			</div>
			<!--6个按钮  -->
			<div class="userhome_btn">
				<div class="user_home_btn">
					<div class="userhome_btn1" @click="$router.push('/monitor/screenshot')">
						<span class="userhome_btn1_span redColor1">教派统计</span>
						<span class="userhome_btn1_spn redColor1">659座</span>
					</div>
					<div class="userhome_btn2" @click="$router.push('/monitor/recordrtc')">
						<span class="userhome_btn2_span yellowColor1">佛教</span>
						<span class="userhome_btn2_spn yellowColor1">159座</span>
					</div>
					<div class="userhome_btn3">
						<span class="userhome_btn3_span redColor1">道教</span>
						<span class="userhome_btn3_spn redColor1">109座</span>
					</div>
				</div>
				<div class="userhome_set">
					<div class="userhome_btn4">
						<span class="userhome_btn4_span blueColor">基督教</span>
						<span class="userhome_btn4_spn blueColor">91座</span>
					</div>
					<div class="userhome_btn5">
						<span class="userhome_btn5_span greenColor">天主教</span>
						<span class="userhome_btn5_spn greenColor">206座</span>
					</div>
					<div class="userhome_btn6">
						<span class="userhome_btn6_span">伊斯兰教</span>
						<span class="userhome_btn6_spn">40座</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 我的任务 -->
		<div class="block padding10-0 marginBottom10">
			<div class="home_fire">
				<span class="spn_fire"> </span>
				<span class="fire_lis weight700">我的任务</span>
			</div>
			<!-- 任务摄像头1 -->
			<div class="list padding15">
				<div class="li" v-for="(item, index) in list" :key="index">
					<div class="top fontSize14 blackColor weight700">
						摄像头检查
						<van-tag type="primary" plain round text-color="#9B2E25"
							style="background-color: #FCEFEE;font-weight: bold;" v-if="item == 1">十万火急</van-tag>
						<van-tag type="primary" plain round text-color="#AB903E"
							style="background-color: #FAF1ED;font-weight: bold;" v-else>重要紧急</van-tag>
					</div>
		
					<div class="bottom">
						<div class="left">
							<div class="left-line hasColor1">地址：泽雅镇垟坑基督教堂</div>
							<div class="left-line hasColor1">时间：2022-12-09 08:21:11</div>
						</div>
						<span class="redColor1 fontSize14">待完成</span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 宣传教育 -->
		<div class="block give padding10-0 marginBottom10">
			<div class="title">
				<div class="userhome_fire">
					<span class="user_spn_fire"> </span>
					<span class="user_fire_lis weight700">宣传教育</span>
				</div>
				<div class="more hasColor1">更多</div>
			</div>
			<!-- 首页图片 -->
			<div class="home_container">
				<img src="@/assets/image/img.png" alt="" />
			</div>
			<!-- 首页文章 -->
			<div class="give-list">
				<div class="give-li padding10-0" v-for="(item , index) in list" :key="index">
					<div class="left hasColor3">
						<div class="day fontSize30">
							09/
						</div>
						<div class="time fontSize12">
							<div class="month">12月</div>
							<div class="year">2022</div>
						</div>
					</div>
					<div class="right">
						<div class="name textHide1 fontSize14 blackColor weight700">
							习近平:坚持我国宗教中国化方向
						</div>
						<div class="msg fontSize12 textHide1 hasColor1">
							部分详情内容显示...
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
				list: [1, 2],
			};
		},
		methods: {},
	};
</script>

<style scoped lang="less">
	::v-deep .van-tag {
		padding: 2px 5px;
		margin-left: 10px;
	}

	.container {
		min-height: 100vh;
		background-color: #F6F6F6;
	}
	
	.block{
		background-color: #FFFFFF;
	}

	.home_fire {
		.spn_fire {
			display: inline-block;
			width: 2px;
			height: 12px;
			margin-left: 10px;
			background-image: url("@/assets/image/img001.png");
		}

		.fire {
			font-size: 14px;
			margin-left: 10px;
		}

		// 修改
		.fire_lis {
			font-size: 14px;
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
				width: 44px;
				height: 44px;
			}

			.seeBack {
				background-color: #f3f7fc;
			}
		}
	}

	// 6个按钮
	.userhome_btn {
		height: 9.625rem;
		margin-top: 10px;

		.user_home_btn {
			height: 77px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.userhome_btn1 {
				width: 96px;
				height: 61px;
				margin-left: 25px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao1.png");

				.userhome_btn1_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
				}

				.userhome_btn1_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
				}
			}

			.userhome_btn2 {
				width: 96px;
				height: 61px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao2.png");

				.userhome_btn2_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
				}

				.userhome_btn2_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
				}
			}

			.userhome_btn3 {
				width: 96px;
				height: 61px;
				margin-right: 23px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao3.png");

				.userhome_btn3_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
				}

				.userhome_btn3_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
				}
			}
		}

		.userhome_set {
			height: 77px;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.userhome_btn4 {
				width: 96px;
				height: 61px;
				margin-left: 25px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao4.png");

				.userhome_btn4_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
				}

				.userhome_btn4_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
				}
			}

			.userhome_btn5 {
				width: 96px;
				height: 61px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao5.png");

				.userhome_btn5_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
				}

				.userhome_btn5_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
				}
			}

			.userhome_btn6 {
				width: 96px;
				height: 61px;
				margin-right: 23px;
				border-radius: 10px;
				background-image: url("@/assets/icon_image/icon_tubiao6.png");

				.userhome_btn6_span {
					display: block;
					margin-top: 8px;
					margin-left: 10px;
					color: #3d1c9a;
				}

				.userhome_btn6_spn {
					display: block;
					margin-left: 10px;
					margin-top: 2px;
					color: #3d1c9a;
				}
			}
		}
	}

	//  我的任务
	.list {
		.li {
			padding: 0px 15px;
			background: #ffffff;
			box-shadow: 0px 0px 27px 0px rgba(232, 232, 232, 0.54);
			border-radius: 10px;
			margin-bottom: 10px;

			.top {
				padding: 10px 0px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #e9e9e9;
			}

			.marginLeft14 {
				margin-right: 15px;
			}

			.bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 0px;

				.right {
					.btn {
						padding: 2px 10px;
						background: #9b2e25;
						border-radius: 5px;
					}

					.info {
						background: #1a559a;
					}
				}
			}
		}
	}

	// 宣传教育
	.userhome_fire {
		.user_spn_fire {
			display: inline-block;
			width: 2px;
			height: 12px;
			margin-left: 10px;
			background-image: url("@/assets/image/img001.png");
		}

		.user_fire_lis {
			font-size: 14px;
			margin-left: 10px;
		}
	}

	.home_container {
		height: 4.75rem;
		position: relative;
		margin: 12px 12px 12px 12px;
		border-radius: 55px;
	}

	.home_container img {
		width: 100%;
		height: 100%;
		border-radius: 55px;
	}
	
	.flexCenter{
		display: flex;
		align-items: center;
	}
	
	.flexCenterBetween:extend(.flexCenter){
		justify-content: space-between;
	}

	// 首页文章
	.give{
		.title:extend(.flexCenterBetween){
			.more{
				margin-right: 12px;
			}
		}
		
		.give-list{
			background-color: #ffffff;
			padding: 0px 12px;
			
			.give-li:extend(.flexCenterBetween){
				border-bottom: 1px solid #F2F3F4;
				
				.left:extend(.flexCenterBetween){
					border: 1px dashed #F2F3F4;
					border-radius: 10px;
					padding: 5px 10px;
					
					.time{
						text-align: center;
					}
				}
				
				.right{
					flex: 1;
					margin-left: 20px;
				}
			}
			
			.give-li:last-child{
				border-bottom: none;
			}
		}
	}
</style>
