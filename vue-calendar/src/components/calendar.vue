<template>
	<div id="calendar-component" class="calender">
		<div class="table-box1">
			<table class="bg-table">
				<!-- <caption>{{currentTime}}</caption> -->
				<thead>
					<tr>
						<th v-for="(item,index) in headerFields">{{item}}</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(week,index) in getWeeks()" v-if="0 != week.length">
						<td v-for="(item,index2) in week" v-bind:class="{'no-month-day' : item.preMonth || item.nextMonth,'current-day':item.currentDay}">
							{{item.day}}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="table-box2">
			<!-- {{schedules}} -->
			<div class="row" v-for="(schedule,index1) in schedules">
				<table class="schedule-table">
					<tr v-for="(row,index2) in schedule">
						<td v-for="(item,index2) in row" :colspan="item.colspan">
							<div :class="['s',item.type]">
								{{item.title}}
							</div>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	import {schedules} from '../data/schedule'
	export default {
		name: 'calendar-component',
		mounted: function () {
			// console.log("schedules:",schedules);
			let firstWeekDayOfThisMonth = new Date(this.currentYear,this.currentMonth,1).getDay();
			let lastDayOfLastMonth = new Date(new Date(this.currentYear,this.currentMonth,1) - 1).getDate();
			let totalDaysOfThisMonth = new Date(new Date(this.currentYear,this.currentMonth + 1,1) - 1).getDate();
			let currentDayOfThisMonth = new Date().getDate();

			// console.log(firstWeekDayOfThisMonth);

			//上一个月日期
			while(firstWeekDayOfThisMonth-- > 0) {
				this.days.unshift({'day': lastDayOfLastMonth--,'preMonth' : true});
			}
			//本月日期
			let index = 0;
			while(totalDaysOfThisMonth-- > 0) {
				if (index == currentDayOfThisMonth) {
					this.days.push({'day' : ++index,'currentDay' : true});
				} else {
					this.days.push({'day' : ++index});
				}
			}
			//下一个月日期
			index = 0;
			if (this.days.length < 35) {
				while(this.days.length != 35) {
					this.days.push({'day' : ++index,'nextMonth' : true});
				}
			} else {
				while(this.days.length != 42) {
					this.days.push({'day' : ++index,'nextMonth' : true});
				}
			}
		},
		data () {
			return {
				headerFields: ['周日','周一','周二','周三','周四','周五','周六'],
				days: [],	//存放当前月日期,
				currentYear: new Date(2017).getFullYear(),
				currentMonth: new Date(2017,7).getMonth(),
				schedules: schedules
			}
		},
		methods: {
			getWeeks: function() {
				if (0 === this.days.length) {
					return [];
				}
				// console.log(this.firstDayOfThisMonth);
				let weeks = [[],[],[],[],[],[]];
				for (var i = 0; i < this.days.length / 7; ++i) {
					var _weeks = [];
					for (var j = 0; j < 7; ++j) {
						_weeks[j] = this.days[i * 7 + j];
					}
					weeks.push(_weeks);
				}
				return weeks;
			}
		}
	}
</script>
<style>
	.calender {
		width: 1050px;
		margin: 0 auto;
		height: 530px;
		/*border: 1px solid red;*/
	}
	.bg-table {
		width: 100%;
		border-collapse: collapse;
		/*border: 1px solid #ccc;*/
	}
	.bg-table thead th {
		background-color: #7cc699;
		color: white;
		height: 30px;
		text-align: center;
		width: 150px;
	}
	.bg-table tbody tr td {
		border: 1px solid #ccc;
		text-align: right;
		vertical-align: top;
		padding: 5px;
		box-sizing: border-box;
		color: #7cc699;
		height: 100px;
		width: 150px;
	}
	.current-day {
		background-color: #ececec;
		color: white;
	}
	.bg-table tbody tr td.no-month-day {
		background-color: #eee;
		color: #ccc;
	}
	.bg-table tbody tr td.current-day {
		background-color: #99cc99;
		color: #fff;
	}

	.table-box2 {
		position: absolute;
		top: 30px;
		width: 1050px;
		height: 600px;
		/*border: 1px solid red;*/
	}
	.table-box2 .row {
		box-sizing: border-box;
		/*border: 1px solid green;*/
		height: 100px;
		padding-top: 30px;
	}
	.table-box2 .row .schedule-table {
		width: 100%;
		height: 70px;
		border-collapse: collapse;
		/*background-color: pink;*/
	}
	.table-box2 .row .schedule-table tr{
		width: 100%;
		height: 20px;
	}
	.table-box2 .row .schedule-table tr .s {
		border-radius: 15px;
		font-size: 12px;
		height: 20px;
		line-height: 20px;
		padding-left: 10px;
		color: #fff;
	}
	.table-box2 .row .schedule-table tr .s.life {
		background-color: #99cc99;
	}
	.table-box2 .row .schedule-table tr .s.work {
		background-color: #d79691;
	}
	.table-box2 .row .schedule-table tr .s.weekend {
		background-color: #68a2a9;
	}
	.table-box2 .row .schedule-table tr .s.sport {
		background-color: #5580a1;
	}
	.table-box2 .row .schedule-table tr td {
		width: 150px;
		padding: 0 2px;
		/*padding: 5px;*/
		/*background: -webkit-linear-gradient(left,#99cc99,white);*/
		/*border: 1px solid red;*/
		box-sizing: border-box;
	}
</style>