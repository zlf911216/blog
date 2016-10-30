<template>
	<div class="list">
		<public-message></public-message>
		<div class="down_nav"></div>
		<public-load></public-load>
	</div>		
</template>
<script>
import { mapMutations } from 'vuex'
import publicMessage from './list-message' 
import publicLoad from './loading' 
	export default {
		name:"artList",
		methods: {
			...mapMutations([
				'change'
			]),
			writeNew:function(){
				this.$router.push({ 
					path: '/articleWrite'
				})
			}
		},
		data(){
			return{
				
			}
		},
		components:{
			publicMessage,publicLoad
		}
	}
</script>
<style scoped>
	.down_nav{
		margin-top: 1.5rem;
		height: 2.8rem;
		visibility: hidden;
	}
	.new_travel_message{
		font-weight: bold;
		line-height: 2.8rem;
		word-spacing: 0.1rem;
		letter-spacing: 0.1rem;
		font-size: 1.1rem;
		background: url(../../assets/images/travel_back.jpg) white no-repeat;
		background-size: 130% auto;
		background-position:85% 29%;
		color: #5d3d00;
	}
	.new_travel_message i{
		height: 1.5rem;
	}
	.new_travel_message i img{
		display: block;
		height: 100%;
	}
</style>
