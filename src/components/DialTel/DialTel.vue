<template>
	<div class="tel">
		<van-popup
			v-model:show="telShow" 
			position="bottom"
			round
			:style="{width: '90vw',marginLeft: '5vw'}"
		>
			<div class="tel-con" @click="dial">
				<div class="tel-msg padding5-0 hasColor1">是否拨打电话？</div>
				<div class="tel-phone padding5-0 blueColor">{{ tel }}</div>
			</div>
			<div class="tel-cannel" @click="close">取消</div>
		</van-popup>
	</div>
</template>

<script>
	export default {
		props: {
			tel: {
				type: String|Number,
				default: ''
			},
			telShow: Boolean
		},
		methods: {
			dial() {
				let a = document.createElement('a');
				a.href = `tel: ${this.tel}`;
				a.click();
				this.close();
			},
			close(){
				this.$emit('close');
			}
		},
	}
</script>

<style scoped lang="less">
	.tel-con{
		text-align: center;
	}
	
	.tel-cannel{
		text-align: center;
		padding: 5px 0px;
		border-top: 5px solid #e6e6e6;
	}
</style>