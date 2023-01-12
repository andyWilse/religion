<template>
	<van-popup v-model="show" round position="bottom" closeable>
		<div class="popup-title fontSize16 weight700 hasColor1">抄送给</div>
		<div class="peopleList">
			<van-checkbox-group v-model="result">
				<van-checkbox class="people padding10-0" v-for="(item , index) in list" :key="index" :name="item.id" >{{ item.name }}</van-checkbox>
			</van-checkbox-group>
		</div>
		<div class="popup-submit fontSize16 weight700" @click="confirm">{{ confirmText }}</div>
	</van-popup>
</template>

<script>
	export default{
		props: {
			confirmText: {
				type: String,
				default: '确定'
			}
		},
		data() {
			return {
				show: false,
				result: [],
				list: [{id: 1,name: '小王'},{id: 2,name: '小刘'}],
			}
		},
		methods: {
			open(){
				this.show = true;
			},
			confirm(){
				console.log('确定' , this.result);
				this.$emit('confirm' ,this.result );
			}
		}
	}
</script>

<style scoped lang="less">
	.popup-title{
		line-height: 48px;
		text-align: center;
	}
	
	.peopleList{
		width: 100%;
		max-height: 60vh;
		overflow-y: auto;
		
		.people{
			border-bottom: 1px solid #E2E2E2;
			justify-content: center;
		}
		
		.people:last-child{
			border-bottom: none;
		}
	}
	
	.popup-submit{
		padding: 14px 16px;
		font-size: 16px;
		background-color: #fff;
		border-top: 8px solid #f7f8fa;
		cursor: pointer;
		text-align: center;
	}
</style>