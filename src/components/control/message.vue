<template>
	<div class="control">
		<div class="add" @click="addkind($route.params.id)">
			<div>添加文章</div>
		</div>
		<div class="kind" flex-box="0" v-for="(item,index) in message" flex="dir:left">
			<div flex-box="0" class="top-img" flex="cross:center">
				<img :src="item.topimg">
			</div>
			<div flex-box="1" @click="change(item._id)">{{item.title}}</div>
			<div class="delete" flex-box="0" @click="delkind(item._id,index)">删除</div>
		</div>
		<div class="nav" flex-box="0"></div>
	</div>
</template>
<script>
	export default {
		name:"control",
		data(){
			return{
				message:null
			}
		},
		methods: {
			addkind:function(id){
				this.$router.push({path:'/add/'+id})
			},
			delkind:function(id,num){
				this.$http.get('http://localhost:8000/delexplain', {
			        params: {
			        	ID:this.$route.params.id,
			            _id:id
			        }
			    }).then((response) => {
			        this.message.splice(num,1)
			    })
			},
			change:function(id){
				this.$router.push({path:'/change/'+id,query: { kindId: this.$route.params.id }})
			}
	    },
		mounted:function(){
		    this.$http.get('http://localhost:8000/getmessage', {
		        params: {
		        	_id:this.$route.params.id,
		        }
		    }).then((response) => {
		        this.message=response.data.docs.message
		    })
		},
		components: {
	        
	    }
	}
</script>
<style scoped>
	.nav{
		height: 3rem;
	}
	.add{
		position: fixed;
		width: 100%;
		bottom: 0;
		background: #30ab0a;
		color: white;
	}
	.add,.kind{
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(0,0,0,.15);
	}
	.top-img{
		width: 20%;
	}
	.top-img img{
		display: block;
		width: 100%;
	}
	.kind:last-child{
		border-right: none;
	}
	.delete{
		padding:0 1rem;
		background: #d20e0e;
		color: white;
		font-size: 0.95rem;
	}
</style>
