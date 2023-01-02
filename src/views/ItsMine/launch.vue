<template>
	<div class="page padding15">
		<div class="title fontSize14 weight700 blackColor">
			我的任务
		</div>
		<div class="form">
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					任务名称
				</div>
				<div class="right hasColor1 marginLeft15">
					<div class="block-line" @click="showPicker = true">
						<div class="left blackColor" v-if="type.name">{{ type.name }}</div>
						<div class="left" v-else>请选择任务类别</div>
						<van-icon name="arrow-down" />
					</div>
					<van-popup v-model="showPicker" position="bottom">
						<van-picker
							show-toolbar
							:columns="columns"
							@confirm="onConfirm"
							value-key="name"
							@cancel="showPicker = false"
						/>
					</van-popup>
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					任务时间
				</div>
				<div class="right hasColor1 marginLeft15">
					<div class="block-line" @click="showTimePicker = true">
						<div class="left blackColor" v-if="date">{{ date }}</div>
						<div class="left" v-else>请选择发起时间</div>
						<van-icon name="arrow-down" />
					</div>
					<van-popup v-model="showTimePicker" position="bottom">
						<van-datetime-picker
							type="date"
							title="选择年月日"
							@confirm="onTimeConfirm"
							@cancel="showTimePicker = false"
						/>
					</van-popup>
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					任务地点
				</div>
				<div class="right blueColor1 marginLeft15">
					<input class="input" type="text" placeholder="请填写准确地点">
				</div>
			</div>
			<div class="block">
				<div class="block-title fontSize14 weight700">任务内容</div>
				<textarea class="textarea" name="" placeholder="请详细描述发生事件并上传照片..."></textarea>
				<div class="images">
					<van-uploader v-model="fileList" :after-read="afterRead" />
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					移交给
				</div>
				<van-icon class="blueColor1" name="add-o" size="18" />
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					抄送给
				</div>
				<van-icon class="blueColor1" name="add-o" size="18" />
			</div>
			<div class="submit fontSize14 whiteColor weight700">
				提交
			</div>
		</div>
	</div>
</template>

<script>
	import { parseTime } from '@/utils/util'
	export default{
		data() {
			return {
				type: {id: 0,name: ''},
				date: '2023-01-05',
				showPicker: false,
				showTimePicker: false,
				fileList: [],
				columns: [
					{id: 1, name: '杭州'},
					{id: 2, name: '宁波'},
					{id: 3, name: '温州'},
				],
			}
		},
		methods: {
			/**
			 * 选择任务类型
			 * @param {Object} e
			 */
			onConfirm(e){
				console.log('选择任务类型' , e);
				this.type = e;
				this.showPicker = false;
			},
			/**
			 * 选择发起时间
			 * @param {Object} e
			 */
			onTimeConfirm(e){
				this.date = parseTime(e , '{y}-{m}-{d}');
				this.showTimePicker = false;
			},
			/**
			 * 图片上传
			 * @param {Object} file
			 */
			afterRead(file) {
				// 此时可以自行将文件上传至服务器
				console.log('图片上传', file);
				file.status = 'uploading';
				file.message = '上传中...';
			
				setTimeout(() => {
					file.status = 'failed';
					file.message = '上传失败';
					console.log('图片上传1', file);
				}, 1000);
			},
		}
	}
</script>

<style scoped lang="less">
	.title {
		position: relative;
		padding-left: 10px;
	}
	
	.title::before {
		width: 2px;
		height: 13px;
		content: '';
		background-color: #9b2e25;
		position: absolute;
		left: 0px;
		top: 5px;
	}
	
	.form {
		.block {
			background: #FFFFFF;
			border: 1px solid #E2E2E2;
			border-radius: 10px;
			margin-top: 15px;
			padding: 10px 25px;
			
			.block-title {
				border-bottom: 1px solid #E2E2E2;
				padding-bottom: 10px;
			}
			
			.textarea {
				border: none;
				width: 100%;
				height: 100px;
				padding: 10px 0px;
			}
			
			.right{
				flex: 1;
				
				.input{
					width: 100%;
					border: none;
				}
			}
		}
		
		.block-line{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		
		.submit{
			width: 80vw;
			height: 40px;
			line-height: 40px;
			margin: 10px auto 60px;
			background: #9B2E25;
			border-radius: 10px;
			text-align: center;
		}
	}
</style>