<template>
	<div id="dplayer"></div>
</template>

<script>
	import flvjs from 'flv.js';
	import DPlayer from 'dplayer';
	export default{
		data(){
			return {
				dp: {},
				duration: 0,
				live: false,
				videoUrl: '/11.flv',
				// videoUrl: 'http://wz10.qqy189.com:12321/live/12209800010000758301.flv',
			}
		},
		watch: {
			live(n , o){
				console.log('live-n' , n);
				console.log('live-o' , o);
				if(n) this.loadVideo();
			}
		},
		mounted() {
			this.loadVideo();
		},
		methods: {
			loadVideo(){
				let that = this;
				
				that.dp = new DPlayer({
				    container: document.getElementById('dplayer'),
					live: that.live,
				    video: {
				        url: that.videoUrl,
				        type: 'customFlv',
				        customType: {
				            customFlv: function (video, player) {
								console.log('customFlv' , video);
				                const flvPlayer = flvjs.createPlayer({
				                    type: 'flv',
				                    url: that.videoUrl,
				                });
				                flvPlayer.attachMediaElement(video);
				                flvPlayer.load();
				            },
				        },
				    },
				});
				
				that.dp.on('canplay' , function(){
					that.duration = that.dp.video.duration;
					that.live = that.duration == 'Infinity' ? true : false;
				});
			}
		}
	}
</script>

<style>
</style>