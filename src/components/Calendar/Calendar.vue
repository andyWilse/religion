<template>
	<div class="page">
		<div class="top">
			<img class="btnImg" src="/images/icon022.png" @click="last">
			<div class="top-name fontSize14 weight700">
				{{ today == checkDate ? '今天' : checkDate }}
			</div>
			<img class="btnImg" src="/images/icon023.png" @click="next">
		</div>
		<div class="day-list" >
			<div class="day" :class="{check: checkDate == item.fullDate}" v-for="(item , index) in checkWeeks" :key="index"  @click="selectDay(item.fullDate)">
				<div class="week">{{ item.lunar.ncWeek.charAt(2) }}</div>
				<div class="day-con fontSize18 weight700">{{ item.date }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Calendar from './util.js';
	export default {
		data() {
			return {
				weeks: [],
				calendar: {},
				nowDate: '',
				today: '',
				checkDate: '',
				tallyDate: [],
				checkWeeks: [],
				weeksIndex: -1,
			}
		},
		created() {
			// 获取日历方法实例
			this.cale = new Calendar();
			this.init();
		},
		methods: {
			/**
			 * 初始化日期显示
			 */
			init() {
				this.cale.setDate()
				this.weeks = this.cale.weeks
				this.nowDate = this.calendar = this.cale.getInfo();
				this.today = this.nowDate.fullDate;
				this.checkDate = this.nowDate.fullDate;
				this.tallyDate.push(this.nowDate.fullDate);
				
				this.weeks.forEach((item , index) => {
					item.forEach((v , k) => {
						if(v.fullDate == this.checkDate){
							this.weeksIndex = index;
							this.checkWeeks = item;
						}
					});
				});
				
				this.change();
			},
			/**
			 * 选择天
			 * @param {Object} day
			 */
			selectDay(day){
				this.checkDate = day;
				this.change();
			},
			/**
			 * 上一页
			 */
			last(){
				if(this.weeksIndex == 0){
					this.lastMonth();
				}
				
				this.weeksIndex = this.weeksIndex - 1;
				this.checkWeeks = this.weeks[this.weeksIndex];
			},
			/**
			 * 下一页
			 */
			next(){
				if(this.weeksIndex == this.weeks.length - 1){
					this.nextMonth();
				}
				
				this.weeksIndex = this.weeksIndex + 1;
				this.checkWeeks = this.weeks[this.weeksIndex];
			},
			/**
			 * 上个月
			 */
			lastMonth() {
				let dateArr = this.tallyDate[0].split('-');
				let date = `${dateArr[0]}-${dateArr[1]}-${dateArr[2] == 31 ? 30 : dateArr[2]}`;
				const preDate = this.cale.getDate(date, -1, 'month').fullDate;
				this.setDate(preDate , 'lastMonth')
			},
			/**
			 * 下个月
			 */
			nextMonth() {
				let fullDate = this.tallyDate[this.tallyDate.length - 1];
				const nextDate = this.cale.getDate(fullDate, +1, 'month').fullDate;
				this.setDate(nextDate , 'nextMonth');
			},
			
			/**
			 * 设置日期
			 * @param {Object} date
			 * @param {String} type
			 */
			setDate(date , type = '') {
				this.cale.setDate(date)
				this.nowDate = this.cale.getInfo(date);
				
				let weeks = this.cale.weeks;
				let weeksAll = this.weeks;
				
				if(type == 'lastMonth'){ // 上个月
					let date = this.weeks[0][0].fullDate;
					let weeksIndex = -1;
					
					weeks.forEach((item , index) => {
						item.forEach(v => {
							if(v.fullDate == date){
								weeksIndex = index - 1;
								this.weeksIndex = index;
							}
						});
					});
					
					for (let i = weeksIndex; i >= 0; i--) {
						weeksAll.unshift(weeks[i]);
					}
					
					this.tallyDate.unshift(this.nowDate.fullDate);
				}else{ // 下个月
					let len = this.weeks.length - 1;
					let date = this.weeks[len][0].fullDate;
					let weeksIndex = -1;
					
					weeks.forEach((item , index) => {
						item.forEach(v => {
							if(v.fullDate == date){
								weeksIndex = index + 1;
							}
						});
					});
					
					for (let i = weeksIndex; i < weeks.length; i++) {
						weeksAll.push(weeks[i]);
					}
					
					this.tallyDate.push(this.nowDate.fullDate);
				}
				
				this.weeks = weeksAll;
			},
			change(){
				this.$emit('change' , {date: this.checkDate});
			}
		}
	}
</script>

<style scoped lang="less">
	.flexCenter {
		display: flex;
		align-items: center;
	}

	.flexCenterBetween:extend(.flexCenter) {
		justify-content: space-between;
	}

	.top:extend(.flexCenterBetween){
		padding: 10px 20px;
		
		.btnImg{
			width: 20px;
			height: 20px;
		}
	}
		
	.day-list:extend(.flexCenterBetween){
		.day{
			width: 45px;
			height: 45px;
			border-radius: 30px;
			text-align: center;
	
			.week{
				color: #a0a0a0;
			}
			
			.day-con{
				color: #000000;
			}
		}
		
		.check{
			background-color: #f0f0f0;
		}
	}
</style>