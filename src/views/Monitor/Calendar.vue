<template>
	<div class="page">
		<Calendar @change="change"></Calendar>
	</div>
</template>

<script>
	import Calendar from '@/components/Calendar/Calendar.vue';
	export default{
		components: {
			Calendar
		},
		data() {
			return {
				
			}
		},
		methods: {
			change(e){
				console.log('change' , e);
			}
		}
	}
</script>

<style scoped lang="less">
</style>