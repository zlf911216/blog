<template>	
	<div class="travel_list">
		<div class="travel_box" v-for="item in message">
			<p class="travel_title" flex="dir:left main:justify cross:center">
				<span class="travel_name">
					<span>-- </span>
					<span>{{item.name}}</span>
					<span> --</span>
				</span>
				<span class="travel_time">{{item.time}}</span>
			</p>
			<div class="travel_top_img">
				<img :src='item.top_img'>
			</div>
			<p class="travel_message">{{item.message}}</p>
			<div class="see_more" flex="dir:top cross:center">查看全文</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				message:[{
					name:'糖醋鲤鱼',
					time:'2016-8-12',
					top_img:(''),
					message:'“糖醋鲤鱼”也是山东济南的传统名菜。济南北临黄河，黄河鲤鱼不仅肥嫩鲜美，而且金鳞赤尾，形态可爱，是宴会上的佳肴。据说“糖醋鲤鱼”最早始于黄河重镇——洛口镇。当...',
					userid:"11889"
		        }]
			}
		}
	}
</script>
<style scoped>
	.travel_list{
		position: relative;
		background:white;
		margin-top: 1.5rem;
	}
	.travel_box{
		padding: 1rem 0;
	}
	.travel_title{
		width: 90%;
		margin:auto;
	}
	.travel_name{
		color: rgb(89,61,67);
		font-size:1rem;
		font-weight: bold;
	}
	.travel_time{
		font-size:0.8rem;
		color:#666;
	}
	.travel_top_img{
		position: relative;
		width: 90%;
		margin: 0.5rem auto 0 auto;
		height: 0;
		padding-bottom: 35%;
		overflow: hidden;
		border-radius: 0.6rem;
		border:0.2rem solid rgba(131,175,155,0.5);
	}
	.travel_top_img img{
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(0,-50%);
		display: block;
		width: 100%;
		height: auto;
	}
	.travel_message{
		position: relative;
		width: 90%;
		height: 3.5rem;
		line-height:1.5em;
		margin: 0.5rem auto 0 auto;
		overflow: hidden;
		font-size: 0.8rem;
	}
	.see_more{
		position: absolute;
		bottom:0;
		left: 50%;
		font-size: 0.9rem;
		transform: translate(-50%,50%);
		background: white;
		color: rgb(248,147,29);
		border-radius: 0.5rem;
		border:0.1rem solid rgb(248,147,29);
		padding: 0 0.8rem;
		line-height: 1.4rem;
	}
</style>
