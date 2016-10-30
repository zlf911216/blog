<template>
	<div class="write">
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">题目:</div>
			<input type="text" flex-box="1">
		</div>
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">时间:</div>
			<input type="text" flex-box="1">
		</div>
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">说明:</div>
			<input type="text" flex-box="1">
		</div>
	</div>		
</template>
<script>
	export default {
		name:"artWrite",
		data(){
			return{
				
			}
		}
	}
</script>
<style scoped>
	.write{
		max-width: 600px;
		margin:auto;
	}
	input{
		margin-left: 4%;
		height: 2rem;
		border-radius: 8px;
		border:1px solid rgba(0,0,0,0.15);
	}
	.title{
		background: white;
		font-size: 1.2rem;
		height: 3.2rem;
		padding: 0 6% 0 3%;
		border-bottom:1px solid rgba(0,0,0,0.15);
	}
</style>
