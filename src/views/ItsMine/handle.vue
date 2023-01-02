<template>
	<div class="page padding15">
		<div class="title fontSize14 weight700 blackColor">
			我的任务
		</div>
		<!-- 任务 -->
		<div class="task">
			<div class="top">
				<div class="left fontSize14 blackColor weight700">
					摄像头检查
				</div>
				<div class="right">
					<div v-if="data.type == 1" class="btn weight700 redColor1">十万火急</div>
					<div v-else-if="data.type == 2" class="btn danger weight700 yellowColor1">重要紧急</div>
					<div v-else-if="data.type == 3" class="btn info weight700 blueColor1">一般</div>
				</div>
			</div>
			<div class="bottom hasColor1">
				<div class="bottom-line">
					地址：泽雅镇垟坑基督教堂
				</div>
				<div class="bottom-line">
					时间：2022-12-09 08:21:11
				</div>
				<div class="bottom-line">
					发起者：平台预警
				</div>
				<div class="bottom-line">
					任务描述：摄像头不在线，请及时检查设备及网络.
				</div>
			</div>
		</div>
		<div class="form">
			<div class="block">
				<div class="block-title fontSize14 weight700">我的反馈</div>
				<textarea class="textarea" name="" placeholder="请描述详细内容..."></textarea>
				<div class="images">
					<van-uploader v-model="fileList" :after-read="afterRead" />
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					处理结果
				</div>
				<div class="right">
					<van-radio-group v-model="status" direction="horizontal">
						<van-radio class="weight700" name="1" icon-size="14px">已解决</van-radio>
						<van-radio class="weight700" name="2" icon-size="14px" style="margin-right: 0px">未解决</van-radio>
					</van-radio-group>
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					移交给
				</div>
				<div class="right blueColor1">
					<van-icon name="add-o" size="18" />
				</div>
			</div>
			<div class="block block-line">
				<div class="left fontSize14 weight700">
					抄送给
				</div>
				<div class="right blueColor1">
					<van-icon name="add-o" size="18" />
				</div>
			</div>
			<div class="submit fontSize14 whiteColor weight700">
				提交
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				data: {
					type: 1
				},
				fileList: [],
				status: '1'
			}
		},
		created() {
			this.id = this.$route.query.id;
			this.getData();
		},
		methods: {
			/**
			 * 获取任务内容
			 */
			async getData() {

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

	.task {
		background: #FAF1ED;
		border: 1px solid #9B2E25;
		border-radius: 10px;
		padding: 0px 15px;
		margin-top: 20px;

		.top {
			padding: 10px 0px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px dashed #000000;

			.right {
				.btn {
					border: 1px solid #9B2E25;
					background-color: #FCEFEE;
					;
					padding: 2px 10px;
					border-radius: 20px;
				}

				.info {
					border-color: #135097;
					background-color: #E9F2F8;
				}

				.danger {
					border-color: #9A7A19;
					background-color: #FAF1ED;
				}
			}
		}

		.bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 10px 0px;
		}
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
