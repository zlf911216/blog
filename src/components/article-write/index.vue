<template>
	<div class="write">
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">题目:</div>
			<input type="text" flex-box="1">
		</div>
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">图片:</div>
			<input flex-box="1" id="file" type="file" name="wangEditorH5File">
			<div flex-box="0" class="upload" @click="upload" accept='images/*'>上传</div>
		</div>
		<div class="top-logo">	
			<img :src="top" v-if="top!=''">
		</div>
		<div class="title" flex='dir:left cross:center'>
			<div class="title-name" flex-box="0">说明:</div>
			<input type="text" flex-box="1">
		</div>
		<v-editor 
			:input-content="inputContent" 
			:upload-url="uploadURL" 
			v-model="outputContent">
		</v-editor>	
		<div class="nav"></div>
		<div class="save" @click='save'>保存记录</div>
	</div>
</template>
<script>
import Editor from './Editor'
	export default {
		name:"artWrite",
		data(){
			return{
				top:'',
				outputContent: '',
				inputContent:'',
				uploadURL:'http://localhost:3000/file/uploading'
			}
		},
		methods: {
	       upload(){
	       		var data = new FormData()
				var files = document.querySelector('#file').files
				if(!files[0]){return false}
				data.append("wangEditorH5File", files[0])
				this.$http.post('http://localhost:3000/file/uploading',data)
				.then((response) => {
					this.top=response.data
				})
	       },
	       save(){

	       }
	    },
		mounted:function(){
			
		},
		components: {
	        'v-editor': Editor
	    }
	}
</script>
<style scoped>
	.top-logo img{
		display: block;
		width: 100%;
	}
	.save{
		position: fixed;
		max-width: 600px;
		width: 100%;
		bottom: 0;
		height: 3rem;
		line-height: 3rem;
		font-size: 1.3rem;
		text-align: center;
		z-index: 5000;
		background:#a4d486;
		color: white;
	}
	.nav{
		height: 3rem;
	}
	.write{
		margin:auto;
		max-width: 600px;
		border-left:1px solid rgba(0,0,0,0.15);
		border-right:1px solid rgba(0,0,0,0.15);
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
    .upload{
    	padding: 0 1rem;
    	line-height:2rem; 
    	background:#666;
    	color:white;
    	border-radius: 6px;
    	margin-left: 2rem;
    }
    #file{
		border: none;
		line-height: 2rem;
		border-radius: 0;
	}
</style>
