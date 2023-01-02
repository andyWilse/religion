<template>
	<div class="page padding15">
		<div class="title fontSize14 weight700 blackColor">
			我的任务
		</div>
		<div class="typeList">
			<van-badge class="badge" content="85例" color="#2C9A35">
				<div class="type textAlignCenter">
					<div class="type-icon backgColor1">
						<van-icon class="weight700" name="apps-o" color="#2C9A35" />
					</div>
					<div class="type-name fontSize12 blackColor weight700">全部</div>
				</div>
			</van-badge>
			<van-badge content="84例" color="#9A7A19">
				<div class="type textAlignCenter">
					<div class="type-icon backgColor2">
						<van-icon class="weight700" name="apps-o" color="#9A7A19" />
					</div>
					<div class="type-name fontSize12 blackColor weight700">我执行的</div>
				</div>
			</van-badge>
			<van-badge content="1例" color="#1052A1">
				<div class="type textAlignCenter">
					<div class="type-icon backgColor3">
						<van-icon class="weight700" name="apps-o" color="#1052A1" />
					</div>
					<div class="type-name fontSize12 blackColor weight700">抄送我的</div>
				</div>
			</van-badge>
			<van-badge content="" color="#3d1c9a">
				<div class="type textAlignCenter">
					<div class="type-icon backgColor4">
						<van-icon class="weight700" name="apps-o" color="#3d1c9a" />
					</div>
					<div class="type-name fontSize12 blackColor weight700">我发起的</div>
				</div>
			</van-badge>
		</div>
	
		<div class="list">
			<div class="li" v-for="(item , index) in list" :key="index" @click="jump(item)">
				<div class="top">
					<div class="left fontSize14 blackColor weight700">摄像头检查</div>
					<div class="right">
						<div v-if="item.type == 1" class="btn weight700 redColor1">十万火急</div>
						<div v-else-if="item.type == 2" class="btn danger weight700 yellowColor1">重要紧急</div>
						<div v-else-if="item.type == 3" class="btn info weight700 blueColor1">一般</div>
					</div>
				</div>
				<div class="bottom">
					<div class="left">
						<div class="left-line hasColor1">
							地址：泽雅镇垟坑基督教堂
						</div>
						<div class="left-line hasColor1">
							时间：2022-12-09 08:21:11
						</div>
					</div>
					<div class="right fontSize14 weight700">
						<span class="redColor1" v-if="item.status == 1">待完成</span>
						<span class="hasColor2" v-else-if="item.status == 2">已完成</span>
					</div>
				</div>
			</div>
		</div>
		<img class="addBtn" src="/images/icon003.png" @click="$router.push('/ltsmine/launch')">
	</div>
</template>

<script>
	export default {
		name: "ItsMine",
		data() {
			return {
				list: [
					{id: 1,type: 1,status: 1},
					{id: 2,type: 2,status: 1},
					{id: 3,type: 3,status: 2},
					{id: 4,type: 2,status: 1},
					{id: 5,type: 2,status: 1},
					{id: 6,type: 2,status: 1},
				]
			}
		},
		methods: {
			/**
			 * 跳转
			 * @param {Object} item
			 */
			jump(item){
				this.$router.push({name: 'handle', query: {id: item.id}});
			}
		}
	};
</script>

<style scoped lang="less">
	.title{
		position: relative;
		padding-left: 10px;
	}
	
	.title::before{
		width: 2px;
		height: 13px;
		content: '';
		background-color: #9b2e25;
		position: absolute;
		left: 0px;
		top: 5px;
	}	
	
	.typeList{
		display: flex;
		justify-content: space-between;
		margin: 20px 10px 10px 10px;
		
		.type{
			.type-icon{
				width: 54px;
				height: 54px;
				line-height: 54px;
				border-radius: 10px;
				text-align: center;
				font-size: 30px;
			}
			
			.backgColor1{
				background-color: #ecf6e5;
			}
			
			.backgColor2{
				background-color: #faf1ed;
			}
			
			.backgColor3{
				background-color: #e9f2f8;
			}
			
			.backgColor4{
				background-color: #f0f2ff;
			}
			
			.type-name{
				line-height: 30px;
			}
		}
	}

	.list{
		width: 100%;
		
		.li{
			padding: 0px 15px;
			background: #FFFFFF;
			box-shadow: 0px 0px 27px 0px rgba(232,232,232,0.54);
			border-radius: 10px;
			margin-bottom: 10px;
			
			.top{
				padding: 10px 0px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1px solid #E9E9E9;
				
				.right{
					.btn{
						border: 1px solid #9B2E25;
						background-color: #FCEFEE;;
						padding: 2px 10px;
						border-radius: 20px;
					}
					
					.info{
						border-color: #135097;
						background-color: #E9F2F8;
					}
					
					.danger{
						border-color: #9A7A19;
						background-color: #FAF1ED;
					}
				}
			}
			
			.bottom{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 10px 0px;
			}
		}
	}

	.addBtn{
		width: 100px;
		height: auto;
		position: fixed;
		bottom: 70px;
		left: 35vw;
		z-index: 10;
	}
</style>
