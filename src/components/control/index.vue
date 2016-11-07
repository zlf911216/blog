<template>
	<div class="control">
		<div class="add" @click="addkind">
			<div>添加分类</div>
		</div>
		<div class="kind" flex-box="0" v-for="(item,index) in message" flex="dir:left">
			<div flex-box="1" @click='golink(item._id)'>{{item.kind}}</div>
			<div class="change" flex-box="0" @click="change(item._id,index)">修改</div>
			<div class="delete" flex-box="0" @click="delkind(item._id,index)">删除</div>
		</div>
		<div class="nav" flex-box="0"></div>

		<div v-show="alert" class="shandow"></div>
		<div v-show="alert" class="alert-changename">
			<div flex="dir:left">
				<div flex-box="0" class="name">名称</div>
				<input flex-box="1" class="change-name" v-model="title">
			</div>
			<div flex="dir:left box:mean">
				<div class="confirm" @click="addorchange">确定</div>
				<div class="cancel" @click="back">取消</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:"control",
		data(){
			return{
				message:null,
				alert:false,
				add:true,
				title:null,
				num:null,
			}
		},
		methods: {
	       	golink:function(id){
				this.$router.push({path:'/controlMsg'})
			},
			addkind:function(){
				this.alert=true
				this.add=true
			},
			delkind:function(id,num){
				this.$http.get('http://localhost:8000/delkind', {
			        params: {
			            _id:id,
			        }
			    }).then((response) => {
			        this.message.splice(num,1)
			    }, (response) => {
			        
			    })
			},
			change:function(id,num){
				this.alert=true
				this.add=false
				this.id=id
				this.num=num
			},
			addorchange:function(){
				if(this.title==null){
					alert('请输入名称')
					return 
				}
				if(this.add){
					this.$http.get('http://localhost:8000/addkind', {
					    params: {
					        kind:this.title,
					    }
				    }).then((response) => {
				    	this.message.push(response.data.message)
				    	this.alert=false
				    })
				}else{
					this.$http.get('http://localhost:8000/changekind', {
				        params: {
				            _id:this.id,
				            kind:this.title
				        }
				    }).then((response) => {
				        this.message[this.num].kind=this.title
				        console.log(this.num)
				    	this.alert=false
				    })
				}	    
			},
			back:function(){
				this.alert=false
			}
	    },
		mounted:function(){
			this.$http.get('http://localhost:8000/getkind').then((response) => {
		        this.message=response.data.docs
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
	.kind:last-child{
		border-right: none;
	}
	.delete{
		padding:0 1rem;
		background: #d20e0e;
		color: white;
		font-size: 0.95rem;
	}
	.change{
		padding:0 1rem;
		background: #945f1b;
		color: white;
		font-size: 0.95rem;
		margin-right: 2px;
	}
	.shandow{
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		left:0;
		background: rgba(0,0,0,0.6);
		z-index: 100;
	}
	.alert-changename{
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		position: fixed;
		width: 80%;
		background: white;
		z-index: 101;
		border-radius: 8px;
	}
	.alert-changename>div{
		padding:10% 1rem 10% 0;
	}
	.alert-changename>div:last-child{
		padding: 0;
		border-bottom: none;
	}
	.name{
		height: 2.5rem;
		line-height: 2.5rem;
		padding: 0 1rem;
	}
	.change-name{
		border-radius: 6px;
		border:1px solid rgba(0,0,0,0.5);
		text-indent:1rem;
		outline: none;
	}
	.confirm,.cancel{
		height: 2.5rem;
		line-height: 2.5rem;
		text-align: center;
		border-top: 1px solid rgba(0,0,0,0.15);
	}
	.confirm{
		color: #30ab0a;
		box-sizing: border-box;
		border-right: 1px solid rgba(0,0,0,0.15);
	}
	.cancel{
		color: #d20e0e;
	}
</style>
