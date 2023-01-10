<template>
	<div class="page">
		<div class="record-page">
			<div style="margin-bottom: 15px;">
				<button @click="btnRecordClicked" :disabled="recording">录制</button>
				<button @click="btnPauseClicked" :disabled="paused||!recording">暂停</button>
				<button @click="btnResumeClicked" :disabled="!paused||!recording">继续</button>
				<button @click="btnStopClicked" :disabled="!recording">停止</button>
				<button :disabled="!currentWebmData" @click="btnPlayClicked">播放</button>
				<button :disabled="!currentWebmData" @click="recordingSave">保存到本地</button>
			</div>
			<video controls ref="player"></video>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				currentWebmData: 0,
				recording: false,
				paused: false
			}
		},
		mounted() {
			this._initApp();
		},
		methods: {
			async _initApp() {
				// this._stream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});
				this._stream = await navigator.mediaDevices.getDisplayMedia();
				this._recorder = new MediaRecorder(this._stream, {
					mimeType: "video/webm;codecs=h264"
				});
				this._recorder.ondataavailable = this.recorder_dataAvailableHandler.bind(this);
			},
			/**
			 * 保存视频数据
			 * @param {Object} e
			 */
			recorder_dataAvailableHandler(e) {
				console.log('保存视频数据' , e);
				this.currentWebmData = e.data;
			},
			/**
			 * 录制
			 */
			btnRecordClicked() {
				this.recording = true;
				this.paused = false;
				this._recorder.start();
			},
			/**
			 * 录制
			 */
			btnPauseClicked() {
				this.paused = true;
				this._recorder.pause();
			},
			/**
			 * 暂停
			 */
			btnResumeClicked() {
				this.paused = false;
				this._recorder.resume();
			},
			/**
			 * 停止
			 */
			btnStopClicked() {
				this.recording = false;
				this._recorder.stop();
			},
			/**
			 * 播放
			 */
			btnPlayClicked() {
				this.$refs.player.src = URL.createObjectURL(this.currentWebmData);
			},
			/**
			 * 将blob数据转化为mp4格式，并保存到本地
			 */
			async recordingSave() {
				const blob = new Blob([this.currentWebmData], {
					type: 'video/mp4'
				})
				const url = URL.createObjectURL(blob)
				const a = document.createElement('a')
				document.body.appendChild(a)
				a.style.display = 'none'
				a.href = url;
				a.download = new Date() + '.mp4'
				// 下载文件
				a.click()
				// 释放内存
				window.URL.revokeObjectURL(url);
			},
		}
	}
</script>

<style>
</style>
