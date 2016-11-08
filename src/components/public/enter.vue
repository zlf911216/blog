<template>
    <div class="phone_top" flex="dir:left box:mean">
    	<router-link :to="{path:'/index/my'}" tag="div">关于我</router-link>
    	<router-link :to="{path:'/index/articleList'}" tag="div">笔记</router-link>
    	<router-link :to="{path:'/index/travelList'}" tag="div">旅游日记</router-link>
    	<router-link :to="{path:'/index/eatList'}" tag="div">吃~</router-link>
    </div>
</template>
<script>
	export default {
		name:'enter',
		data(){
			return{
				msg:"zlf",
				message:null
			}
		}
	}
</script>
<style scoped>
	.phone_top{
		text-align: center;
		background:rgba(34,8,7,0.7);
		box-shadow: 1px 1px 1px rgba(0,0,0,0.8)
	}
	.phone_top>div{
		color: white;
		font-size: 0.8rem;
		padding: 10px 0;
		border-right: 1px solid rgba(255,255,255,0.5)
	}
	.phone_top>div:last-child{
		border:none;
	}
	.router-link-active{
		background: rgb(39,72,98);
	}
</style>
