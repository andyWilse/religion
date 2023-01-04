<template>
	<div class="church-con">
		<!-- 联系人信息 -->
		<div class="people">
			<van-image class="people-thumb flexShrink0" width="90" height="90" fit="cover" :src="thumb"/>
			<div class="people-con">
				<div class="people-name fontSize18 blackColor weight700">
					陈阳阳
				</div>
				<div class="people-content hasColor1">
					<div class="people-content-line">
						身份证号：3303***********017
					</div>
					<div class="people-content-line">
						手机号码：<span class="blueColor">138****744</span>
					</div>
					<div class="people-content-line">
						关联教派：基督教
					</div>
				</div>
			</div>
		</div>
		<!-- 信息块 -->
		<div class="block">
			<div class="block-title fontSize16 blackColor weight700">
				关联场所
				<van-icon name="arrow" color="#c8c8c8" />
			</div>
			<div class="block-con">
				<div class="block-con-line" v-for="(item , index) in church" :key="index">
					<van-image class="church-thumb flexShrink0" radius="10" width="120" height="80" fit="cover" :src="thumb"/>
					<div class="church-content">
						<div class="church-name fontSize16 weight700">
							洋坑基督教
						</div>
						<div class="church-bottom">
							<div class="church-type">
								<van-image class="flexShrink0" width="16" height="16" src="/userimage/D.png"/>
								<div class="church-type-text">
									基督教
								</div>
							</div>
							<div class="church-text hasColor1">
								所属机构：甄海区 泽雅镇
							</div>
							<div class="church-text hasColor1">
								职务身份：第一负责人
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 信息块 -->
		<div class="block">
			<div class="block-title fontSize16 blackColor weight700">
				基本信息
				<van-icon name="arrow-down" color="#c8c8c8" />
			</div>
		</div>
		<!-- 信息块 -->
		<div class="block">
			<div class="block-title fontSize16 blackColor weight700">
				关联活动
				<van-icon name="arrow-down" color="#c8c8c8" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				thumb: '/images/img001.jpg',
				church: [1,2]
			}
		},
	}
</script>

<style scoped lang="less">
	.church-con{
		width: 100%;
		max-width: 100%;
		height: 64vh;
		overflow-x: auto;
		padding: 5%;
		// padding-top: 10vh;
		background-color: #FFFFFF;
		position: absolute;
		bottom: 0px;
		left: 0px;
		box-sizing: border-box;
		border-radius: 10px 10px 0px 0px;
	}
	
	.people{
		display: flex;
		
		.people-thumb{
			margin-right: 10px;
		}
		
		.people-con{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
	}
	
	.block{
		.block-title{
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom-width: 1px;
			border-bottom-style: dashed;
			border-bottom-color: #c8c8c8;
			padding: 10px 0px;
		}
		
		.block-con{
			.block-con-line{
				padding: 5px 0px;
				display: flex;
				
				.church-thumb{
					margin-right: 10px;
				}
				
				.church-content{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					
					.church-type{
						display: flex;
						align-items: center;
						
						.church-type-text{
							margin-left: 5px;
						}
					}
				}
			}
		}
	}
</style>