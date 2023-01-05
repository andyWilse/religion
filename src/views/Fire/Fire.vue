<template>
	<div class="container">
		<!-- 导航部分 -->
		<div class="fire_head padding15">
			<div class="fire_img">
				<img src="@/assets/imagee.jpg" alt="" class="img" />
			</div>

			<div class="fire_text">
				<div class="fire_d">
					<span class="blackColor weight700 fontSize14">垟坑基督教堂</span>
					<img class="fire_log" src="@/assets/icon_image/img.png" alt="">
					<span class="fire_span blackColor">基督教 </span>
				</div>
				<span class="span hasColor1">所属机构：瓯海区 泽雅镇 </span>
				<span class="hasColor1">地址：泽雅镇垟坑基督教堂</span>
				<div class="fire_daohang">
					<span class="fire_icon"></span>
					<span class="fire_icon_span blackColor weight700">一键导航</span>
				</div>
			</div>
		</div>
		<!-- 中间 图片 -->
		<div class="fire_icon_img marginTop10">
			<img class="icon_img" src="@/assets/imagee.jpg" alt="" />
		</div>
		<div class="fire_conter padding15">
			<!--下面文字 -->
			<div class="fire_wenzi">
				<span class="fire_wenzi_span blackColor">预警设备：OH220856 09:23:51
				</span>
				<span class="fire_wenzi_span blackColor">预警时间：2022-12-10</span>
				<span class="wenzi_span">事件动态：</span>
				<span class="wenzi_span blueColor">处理完成</span>
			</div>
			<img class="fire_conter_icon" src="@/assets/icon_image/huozai.png" alt="">
		</div>
		<!-- 查看监控 -->
		<div class="fire_view padding15">
			<div class="fire_view_yi">
				<div class="fire_view_yi_span">
					<img src="@/assets/icon_image/shuju.png" alt="">
				</div>
				<div class="blackColor fire_report weight700">一键上报</div>
			</div>
			<div class="fire_view_yi">
				<div class="fire_icon">
					<img src="@/assets/icon_image/jk.png" alt="">
				</div>
				<div class="blackColor fire_report weight700">调看监控</div>
			</div>
			<div class="fire_view_yi">
				<div class="fire_view_icon">
					<img src="@/assets/icon_image/kaisuo.png" alt="">
				</div>
				<div class="blackColor fire_report weight700">误报解除</div>
			</div>
		</div>
		<div class="fire_view padding15 weight700" style="padding-top: 0px;">
			<div class="block">
				<div class="top padding5-0">15888888888</div>
				<div class="bottom1 padding5-0 redColor1">拨打负责人电话</div>
			</div>
			<div class="block">
				<div class="top padding5-0">0577-88511932</div>
				<div class="bottom2 padding5-0 greenColor">拨打场所电话</div>
			</div>
			<div class="block">
				<div class="top padding5-0">119</div>
				<div class="bottom3 padding5-0 blueColor1">拨打火警119</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: "fire",
	};
</script>
<style scoped lang="less">
	.container{
		min-height: 100vh;
		background-color: #F6F6F6;
	}
	
	.fire_head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;

		.fire_img {
			width: 112px;
			height: 96px;
			border-radius: 10px;
		}

		.fire_text {
			flex: 1;
			margin-left: 18px;

			.fire_log {
				width: 16px;
				height: 16px;
				margin-left: 14px;
			}

			.fire_d {
				margin-bottom: 10px;
			}

			.fire_span {
				margin-left: 8px;
			}

			.span {
				position: relative;
				display: block;
			}
		}

		.fire_daohang {
			width: 100px;
			padding: 2px 0px;
			background: #FFFFFF;
			border-radius: 60px;
			box-shadow: 0px 0px 27px 0px rgba(232,232,232,0.54);
			display: flex;
			align-items: center;
			justify-content: space-between;

			.fire_icon {
				display: inline-block;
				width: 29px;
				height: 29px;
				vertical-align: middle;
				background-image: url("@/assets/icon_image/daohang.png");
			}
			
			.fire_icon_span{
				flex: 1;
				text-align: center;
				padding-right: 10px;
			}
		}
	}

	.img {
		width: 100%;
		height: 100%;
		border-radius: 10px;
	}
	
	.fire_icon_img {
		height: 15.375rem;
	}

	// 图片
	.fire_conter {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #FFFFFF;

		.fire_wenzi {
			flex: 1;
		}

		.fire_conter_icon {
			width: 91px;
			height: 26px;
		}

		.fire_wenzi_span {
			display: block;
		}

		.wenzi_span {
			display: inline-block;
		}
	}

	.icon_img {
		width: 100%;
		height: 100%;
	}

	// 查看监控
	.fire_view {
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #f6f6f6;

		.fire_view_yi {
			width: 104px;
			height: 35px;
			display: flex;
			line-height: 35px;
			border-radius: 8px;
			background-color: #fff;

			.fire_view_yi_span {
				width: 50px;
				height: 35px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(-75deg, transparent 10px, #EAF3F8 0);
			}

			.fire_icon {
				width: 50px;
				height: 35px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(-75deg, transparent 10px, #FCEFEE 0);
			}

			.fire_view_icon {
				width: 50px;
				height: 35px;
				display: flex;
				align-items: center;
				justify-content: center;
				background: linear-gradient(-75deg, transparent 10px, #FAF1ED 0);
			}

			.fire_report {
				padding-right: 5px;
			}
		}
	
		.block{
			width: 104px;
			background-color: #FFFFFF;
			border-radius: 8px;
			text-align: center;
			overflow: hidden;
			
			.bottom1{
				background-color: #FCEFEE;
			}
			
			.bottom2{
				background-color: #ecf6e5;
			}
			
			.bottom3{
				background-color: #e9f2f8;
			}
		}
	}
</style>
