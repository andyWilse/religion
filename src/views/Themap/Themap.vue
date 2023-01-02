<template>
	<div class="container">
		<Search class="sar" />
		<!-- <div class="search-con">
			<van-search 
				v-model="inputObject.userInput"
				:id="inputObject.inputId" 
				placeholder="输入场所、教职人员关键字搜索" 
				@search="onSearch" 
				type="text"
			/>
		</div> -->
		<map-container ref="map" @clickMarker="clickMarker" @setPosition="setPosition" />
		<Loglis />
		<van-popup 
			v-model:show="show" 
			position="bottom" 
			round 
			closeable
			:style="{width: '90vw',marginLeft: '5vw',height: '70vh'}">
			<Church v-bind:data="church" @see="see"></Church>
		</van-popup>
		<van-popup
			v-model:show="seeShow" 
			position="bottom" 
			round 
			closeable
			:style="{width: '90vw',marginLeft: '5vw',height: '70vh'}">
			<ChurchPerson></ChurchPerson>
		</van-popup>
	</div>
</template>

<script>
	import MapContainer from "@/components/MapContainer/MapContainer.vue";
	import Search from "@/components/Search/Search.vue";
	//精灵图
	import Loglis from "@/components/Log/Log.vue";
	import Church from "@/components/Church/Church.vue";
	import ChurchPerson from "@/components/Church/ChurchPerson.vue";
	export default {
		name: "Themap",
		data() {
			return {
				active: "home",
				inputObje: {
					input: "",
				},
				show: false,
				seeShow: false,
				church: {}, // 教会信息
				person: {}, // 负责人信息
				position: '', // 用户经纬度
				// searchInput: '', // 搜索内容
				inputObject: {
					userInput: "",
					inputId: "searchInput",
				},
			};
		},
		methods: {
			/**
			 * 标点-查看
			 * @param {Object} e
			 */
			clickMarker(e){
				this.church = e;
				this.church.myPosition = this.position;
				this.show = true;
			},
			/**
			 * 查看负责人
			 */
			see(){
				this.show = false;
				this.seeShow = true;
			},
			/**
			 * 设置用户经纬度
			 * @param {Object} data
			 */
			setPosition(data){
				console.log('设置用户经纬度' , data);
				this.position = data.position;
			},
			/**
			 * 搜索
			 */
			onSearch(){
				this.$refs.map.onSearch(this.inputObject);
			}
		},
		components: {
			MapContainer,
			Search,
			Loglis,
			Church,
			ChurchPerson
		},
	};
</script>

<style scoped lang="less">
	.sear {
		width: 100%;
		z-index: 999;
		display: flex;
		position: absolute;
		margin-top: 20px;
	}

	.sar {
		flex: 1;
		background-color: rgba(248, 244, 244, 0.1);
	}

	.btn {
		width: 60px;
		margin-top: 10px;
		margin-right: 5px;
	}
	
	.van-popup{
		background-color: rgba(255, 255, 255, 0);
		// position: relative;
	}
	
	.search-con{
		width: 90vw;
		margin: 5vw;
		position: fixed;
		top: 0px;
		z-index: 9;
		border-radius: 10px;
		overflow: hidden;
	}
	
	.van-search{
		padding: 5px 7px;
	}
	
	.van-search__content,.van-search .van-cell{
		background-color: #FFFFFF;
	}
</style>
