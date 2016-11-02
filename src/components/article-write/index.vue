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
		<div id="editor" v-html="inputContent" @input="outputContent"></div>
		<div @click="aab">123123</div>
	</div>		
</template>
<script>
import WangEditor from 'wangeditor'
	export default {
		name:"artWrite",
		data(){
			return{
				content: '',
				inputContent:'',
				uploadUrl:'/upload'
			}
		},
		methods: {
	        formatContent(content) {
	            this.content = content
	            this.outputContent()
	        },
	        outputContent() {
	            this.$emit('input', this.content)
	        },
	        aab(){
	        	console.log(this.content)
	        }
	    },
		mounted:function(){
			const self = this
            const editor = new WangEditor('editor')
            editor.config.menus = ['source', '|', 'bold', 'underline', 'italic', 'strikethrough', 'eraser', 'forecolor', 'bgcolor', '|', 'quote', 'fontfamily', 'fontsize', 'head', 'unorderlist', 'orderlist', 'alignleft', 'aligncenter', 'alignright',
                '|', 'link', 'unlink', 'table', 'img', 'insertcode', '|', 'undo', 'redo', 'fullscreen'
            ]
            editor.config.uploadImgUrl = this.uploadUrl
            editor.onchange = function() {
                self.formatContent(this.$txt.html())
            }
            editor.create()
		}
	}
</script>
<style scoped>
	.write{
		margin:auto;
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
	#editor{
        height: 500px;
    }
    .wangEditor-container{
        border-radius: 2px;
        overflow: hidden;
        border: 1px solid #CCC;
    }
</style>
