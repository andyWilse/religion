<template>
	<div class="page">
		<van-search v-model="searchName" background="#F6F6F6" placeholder="输入场所名称、设备编号查询" />
		<div class="screen">
			<div class="screen-block" @click="showChurch = true">
				<div class="screen-block-name fontSize14 weight700">{{ church.name || '选择教派' }}</div>
				<img class="screen-block-icon" src="/images/icon004.png">
			</div>
			<div class="screen-block marginLeft15" @click="showStreet = true">
				<div class="screen-block-name fontSize14 weight700">{{ street.name || '选择街道' }}</div>
				<img class="screen-block-icon" src="/images/icon004.png">
			</div>
		</div>
		<div class="video">
			<img src="/images/img001.jpg">
		</div>
		<div class="con padding15">
			<div class="block">
				<div class="title">
					<div class="title-name fontSize14 weight700">切换摄像头</div>
					<van-icon class="hasColor1" name="arrow-down" />
				</div>
			</div>
			<div class="block">
				<div class="title">
					<div class="title-name fontSize14 weight700">历史回看</div>
					<van-icon class="hasColor1" name="arrow-down" />
				</div>
			</div>
			<div class="block">
				<div class="title">
					<div class="title-name fontSize14 weight700">场所概况</div>
					<van-icon class="hasColor1" name="arrow" />
				</div>
				<div class="content hasColor1">
					<div class="line">
						场所名称：**寺
					</div>
					<div class="line">
						设备编号：fj4659601
					</div>
					<div class="line">
						所属机构：瓯海区 泽雅镇
					</div>
					<div class="line">
						登记证号：宗教证字（浙）J030030096
					</div>
					<div class="line">
						第一负责人：陈*旺 <span class="blueColor1" @click="tel('138****744')">138****744</span>
					</div>
					<div class="line">
						工作联络员：陈*旺 <span class="blueColor1" @click="tel('138****744')">138****744</span>
					</div>
					<div class="line">
						场所电话：<span class="blueColor1" @click="tel('0577-88511932')">0577-88511932</span> 
					</div>
				</div>
			</div>
		</div>
		<DialTel :telShow="telShow" :tel="phone" @close="telShow = false"></DialTel>
		<!-- 选择教派 -->
		<van-popup v-model="showChurch" position="bottom">
			<van-picker
				show-toolbar
				:columns="churchList"
				@confirm="confirmChurch"
				value-key="name"
				@cancel="showChurch = false"
			/>
		</van-popup>
		<!-- 选择街道 -->
		<van-popup v-model="showStreet" position="bottom">
			<van-picker
				show-toolbar
				:columns="streetList"
				@confirm="confirmStreet"
				value-key="name"
				@cancel="showStreet = false"
			/>
		</van-popup>
	</div>
</template>

<script>
	import DialTel from "@/components/DialTel/DialTel.vue";
	export default {
		components: {
			DialTel,
		},
		data() {
			return {
				searchName: '',
				telShow: false,
				phone: '',
				
				// 教派
				showChurch: false,
				church: {id: 0,name: ''},
				churchList: [
					{id: 1, name: '杭州'},
					{id: 2, name: '宁波'},
					{id: 3, name: '温州'},
				],
				
				// 街道
				showStreet: false,
				street: {},
				streetList: [
					{id: 1, name: '街道1'},
					{id: 2, name: '街道2'},
					{id: 3, name: '街道3'},
				],
			}
		},
		methods: {
			/**
			 * 拨打电话
			 * @param {Object} phone
			 */
			tel(phone){
				this.telShow = true;
				this.phone = phone;
			},
			/**
			 * 选择教派
			 * @param {Object} e
			 */
			confirmChurch(e){
				console.log('选择教派' , e);
				this.church = e;
				this.showChurch = false;
			},
			/**
			 * 选择街道
			 * @param {Object} e
			 */
			confirmStreet(e){
				this.street = e;
				this.showStreet = false;
			}
		}
	}
</script>

<style scoped lang="less">
	.van-search{
		padding: 15px;
	}
	
	.van-search__content{
		background-color: #fff;
		border-radius: 5px;
	}
	
	.van-search .van-cell{
		padding: 10px 8px 10px 0;
	}
	
	.screen{
		display: flex;
		align-items: center;
		background-color: #F6F6F6;
		padding: 0px 15px 10px;
		
		.screen-block{
			display: flex;
			align-items: center;
			
			.screen-block-icon{
				width: 10px;
				height: auto;
				margin-left: 5px;
			}
		}
	}
	
	.video{
		background-color: #F6F6F6;
		padding: 0px 15px 10px;
		height: 200px;
		
		img{
			width: 100%;
			height: 200px;
		}
	}
	
	.con{
		.block{
			.title{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px dashed #C8C8C8;
				padding: 10px 0px;
			}
			
			.content{
				padding: 10px 0px;
			}
		}
	}
</style>