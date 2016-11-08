<template>	
	<div class="travel_list">
		<div class="travel_box" v-for="item in message">
			<p class="travel_title" flex="dir:left main:justify cross:center">
				<span class="travel_name">
					<span>-- </span>
					<span>{{item.title}}</span>
					<span> --</span>
				</span>
				<span class="travel_time">{{item.date}}</span>
			</p>
			<div class="travel_top_img">
				<img :src='item.topimg'>
			</div>
			<p class="travel_message">{{item.explain}}</p>
			<div class="see_more" flex="dir:top cross:center">查看全文</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				message:null
			}
		},
		mounted(){
		    this.$http.get('http://localhost:8000/getone', {
		        params: {
		            kind:'旅游'
		        }
		    }).then((response) => {
		       	this.message=response.data.docs[0].message
		    })
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
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		display: block;
		width: auto;
		height: 100%;
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
