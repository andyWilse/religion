<template>
	<div class="container">
		<!-- 头部 -->
		<div class="fire_hear">
			<div class="fire_cone">
				<img src="@/assets/image/image.jpg" alt="" />
			</div>
			<div class="fire_jidujiao">
				<h3>垟坑基督教堂</h3>
				<span></span>
				<span class="jidujiao">基督教</span>
				<div>
					<span class="dizhi">所属机构: 瓯海区 泽雅镇</span>
					<span class="dizhi">地址: 瓯海区泾雅镇垟坑村</span>
				</div>
			</div>
			<div class="fire_map" @click="$router.push('/themap')">
				<img src="@/assets/image/map.jpg" alt="" />
			</div>
		</div>
		<!--  预警设备 -->
		<div class="fire_alerts">
			<div class="alerts_span">
				<span class="span">预警设备：OH220856</span>
				<span>预蟼时间：22-12-10</span>
				<span class="spa">09:23:51</span>
			</div>
			<h3 class="alerts_h3">人流集聚</h3>
		</div>
		<!-- 图片 -->
		<div class="fire_log">
			<img src="@/assets/image/jdj.pic.jpg" alt="" />
		</div>
		<!-- 上报 -->
		<div class="fire_shangbao">
			<div class="shangbao_fire">
				<div class="div_fire">
					<img src="@/assets/image/shangbao1.jpg" alt="" @click="showFire" />
				</div>
				<div class="div_fire">
					<img src="@/assets/image/shangbao2.jpg" alt="" @click="Fire" />
				</div>
				<div class="div_fire">
					<img src="@/assets/image/shangbao3.jpg" alt="" @click="Firejingbao" />
				</div>
			</div>
			<div class="fire_dh">
				<div class="dh_fire">
					<img src="@/assets/image/hj1.jpg" alt="" />
				</div>
				<div class="dh_fire">
					<img src="@/assets/image/hj2.jpg" alt="" />
				</div>
				<div class="dh_fire">
					<img src="@/assets/image/hd3.jpg" alt="" />
				</div>
			</div>
		</div>
		<!-- 消息通知 -->
	</div>
</template>

<script>
	export default {
		name: "Fire",
		data() {
			return {
				show: false,
			};
		},
		mounted() {},
		methods: {
			//上报
			showFire() {
				this.show = true;
				this.$dialog
					.confirm({
						message: "是否确定上报",
					})
					.then(() => {
						// on confirm
						this.$toast({
							message: "上报成功",
							icon: "success"
						});
					})
					.catch(() => {
						// on cancel
						this.$toast({
							message: "上报失败",
							icon: "fail"
						});
					});
			},
			//查看监控
			Fire() {
				this.show = true;
				this.$dialog
					.confirm({
						message: "是否确定查看监控",
					})
					.then(() => {
						// on confirm
						this.$toast({
							message: "查看监控成功",
							icon: "success"
						});
					})
					.catch(() => {
						// on cancel
						this.$toast({
							message: "上报失败",
							icon: "fail"
						});
					});
			},
			// 误报解除
			Firejingbao() {
				this.show = true;
				this.$dialog
					.confirm({
						message: "是否确定解除误报",
					})
					.then(() => {
						// on confirm
						this.$toast({
							message: "查看监控成功",
							icon: "success"
						});
					})
					.catch(() => {
						// on cancel
						this.$toast({
							message: "上报失败",
							icon: "fail"
						});
					});
			},
		},
	};
</script>

<style scoped lang="less">
	// 头部
	.fire_hear {
		display: flex;
		height: 4.9375rem;
		margin-top: 0.9375rem;

		.fire_cone {
			width: 6.25rem;
			height: 4.9375rem;
			margin-left: 1.25rem;
		}

		.fire_cone img {
			width: 7.1875rem;
			height: 100%;
			border-radius: 4%;
		}

		.fire_jidujiao {
			width: 10.375rem;
			height: 4.9375rem;
			margin-left: 0.9375rem;

			h3 {
				font-weight: 900;
				color: #000;
				margin-left: 0.9375rem;
			}

			.jidujiao {
				margin-left: 0.9375rem;
			}

			.dizhi {
				display: block;
				color: #666;
				margin-left: 0.625rem;
			}
		}

		.fire_map {
			width: 6.25rem;
			height: 4.9375rem;
			text-align: center;
			justify-items: center;
		}

		.fire_map img {
			width: 100%;
			height: 100%;
		}
	}

	// 预警设备
	.fire_alerts {
		margin-top: 1.25rem;
		height: 2.5rem;
		display: flex;

		.alerts_span {
			flex: 1;
			margin-left: 1.25rem;
		}

		.span {
			display: block;
		}

		.spa {
			margin-left: 0.9375rem;
		}

		.alerts_h3 {
			color: #0074b8;
			margin-top: 15px;
			margin-right: 20px;
		}
	}

	// 图片
	.fire_log {
		height: 16.875rem;
		margin-top: 0.625rem;
	}

	.fire_log img {
		width: 100%;
		height: 100%;
	}

	// 上报
	.fire_shangbao {
		margin-top: 0.9375rem;
		height: 8.75rem;

		.shangbao_fire {
			height: 4.375rem;
			display: flex;
			align-items: center;
			justify-items: center;
		}

		.div_fire {
			width: 6.1875rem;
			height: 3.1875rem;

			margin-left: 1.25rem;
		}

		.fire_dh {
			height: 4.375rem;
			display: flex;
			align-items: center;
			justify-items: center;
		}

		.dh_fire {
			width: 6.1875rem;
			height: 3.1875rem;
			margin-left: 1.25rem;
		}
	}
</style>
