<template>	
	<div class="loading_more" @click="change">点击加载更多</div>
</template>
<script>
import { mapMutations } from 'vuex'
	export default {
		methods: {
			...mapMutations([
				'change'
			])
		}
	}
</script>
<style scoped>
	.loading_more{
		position: fixed;
		left:0;
		bottom: 0;
		width: 100%;
		text-align: center;
		line-height: 2.8rem;
		background: rgba(174,211,129,0.85);
		color: white;
		word-spacing: 0.1rem;
		letter-spacing: 0.1rem;
	}
</style>
