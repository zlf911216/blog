<template>
    <div class="my-CV">
    	<header class="top-box" flex="dir:top cross:center">
			<div class="my-headImg"><img :src="img"></div>	
    	</header>
    	<div class="title">基本信息</div>
    	<div class="list-box" flex='dir:top'>
    		<div class="list" flex='dir:left cross:center' flex-box="0" v-for='item in basic'>
    			<div flex-box="0">{{item.title}}</div>
    			<div>:</div>
    			<div flex-box="1">{{item.message}}</div>
    		</div>
    	</div>
    	<div class="title">工作经历</div>
    	<div class="job-box">
	    	<div class="job" flex='dir:top' v-for="item in company">
	    		<div class="list" flex='dir:left cross:center' flex-box="0">
	    			<div flex-box="0">公司</div>
	    			<div>:</div>
	    			<div flex-box="1">{{item.name}}</div>
	    		</div>
	    		<div class="list" flex='dir:left cross:center' flex-box="0">
	    			<div flex-box="0">时间</div>
	    			<div>:</div>
	    			<div flex-box="1">{{item.time}}</div>
	    		</div>
	    		<div class="list" flex='dir:left cross:center' flex-box="0">
	    			<div flex-box="0">职位</div>
	    			<div>:</div>
	    			<div flex-box="1">{{item.job}}</div>
	    		</div>
	    	</div>
    	</div>
    	<div class="title">专业技能</div>
    	<div class="skill-box" flex='dir:top'>
    		<div class="skill" flex='dir:left cross:top' flex-box="0" v-for="(item,index) in skill">
    			<div flex-box="0">{{index+1}}</div>
    			<div>:</div>
    			<div flex-box="1">{{item}}</div>
    		</div>
    	</div>
    	<div class="title">项目经验</div>
    	<div class="list-box" flex='dir:top'>
    		<div class="obj" v-for="item in obj">
    			<div>{{item.name}}</div>
    			<div>{{item.message}}</div>
    		</div>
    	</div>
    	<div class="title">技能评价</div>
    	<div class="list-box" flex='dir:top'>
    		<div class="lv-box" v-for="item in lv">
    			<div class="lv" flex="dir:left main:justify">
	    			<div>{{item.name}}</div>
	    			<div>{{item.explain}}</div>
	    		</div>
	    		<div class="percent-box">
	    			<div class="percent" :style="{width:item.percent}"></div>
	    		</div>
    		</div>	
    	</div>
    	<div class="title">个人评价</div>
    	<div class="list-box" flex='dir:top'>
    		<p class="my">{{my}}</p>
    	</div>
    	<div class="nav"></div>
    </div>
</template>
<script>
	export default {
		name:'my',
		data(){
			return{
				img:require('../../assets/images/my.jpg'),
				basic:[{
					title: '姓名',
					message: '郑灵峰'
				}, {
					title: '性别',
					message: '男'
				}, {
					title: '学历',
					message: '本科'
				}, {
					title: '工作年限',
					message: '1年'
				}, {
					title: '所在城市',
					message: '北京'
				}, {
					title: '电话',
					message: '18600343414'
				}, {
					title: '邮箱',
					message: 'zlf911216@sina.com'
				}, {
					title: '微信',
					message: 'zlf911216'
				}],
				company:[{
					name:'友缘在线',
					time:'2015.11-至今',
					job:'前端工程师'
				}],
				skill:[
					'熟练掌握html/html5，熟悉页面架构和常用布局，可快速编写页面。',
					'熟练掌握css/css3，可以快速处理移动端兼容性问题，了解sass。',
					'熟悉W3C标准，对表现与数据分离，对Web语义化有一定了解。',
					'熟悉javescript，使用jquery，zepto等前端框架。',
					'可以使用vue+webpack构建SPA单页面应用。',
					'了解node，mongodb，可以进行基本操作。',
					'了解Bootstrap ,正在学习ES6。',
					'能够使用PS，svn等工具。'
				],
				lv:[{
					name:'CSS3,HTML5',
					explain:'熟练',
					percent:'85%'
				},{
					name:'JQuery,Zepto',
					explain:'熟练',
					percent:'88%'
				},{
					name:'Vue+Webpack',
					explain:'熟练',
					percent:'81%'
				},{
					name:'Node,Mongodb',
					explain:'了解',
					percent:'62%'
				},{
					name:'Bootstrap,Sass',
					explain:'了解',
					percent:'70%'
				}],
				my:'不推卸责任，能够认清自己，做好自己份内的事情，勇于承担责任；活泼开朗，喜欢结交新朋友，自我调节能力强；再苦再累也能够坚持，自己选择的路跪着也要走完；逻辑思维清晰，有良好的团队合作精神；对前端新技术的发展能够不断跟进，善于自我学习。',
				obj:[{
					name:'公司后台管理系统',
					message:'该项目我负责制作登陆页面和列表选择页，运用了Bootstrap和flex布局来完成页面的样式设计，比较完美的适配移动和pc端。'
				},{
					name:'校招H5宣传页',
					message:'该项目是一个单页H5宣传项目，动画较多。运用了swiper插件来制作这个项目。该项目让我深刻的明白，做事情要先想明白，要追求完美，不能只注重速度和降低质量。'
				},{
					name:'微信拍拖项目',
					message:'该项目是我近期独立负责的一个新产品。该项目从0到1，项目包括注册页，信箱页，聊天页等。项目放弃了传统的mvc框架，运用了mvvm框架的Vuejs+Webpack来构建整体。这样做的好处是整个项目的解耦，视图和逻辑分离，便于项目后期的维护升级和迭代。也是对前端新技术的尝试。'
				}]
			}
		},
		mounted(){
			
		}
	}
</script>	
<style scoped>
	.nav{
		height: 3rem;
	}
	.top-box{
		background: white;
		margin: 1rem auto 0;
		width: 100%;
		padding: 2% 0;
		width: 97%;
		border-radius: 8px;
		border:1px solid rgba(0,0,0,0.1);
	}
	.my-headImg{
		width: 25%;
		height: 0;
		padding-bottom: 25%;
		border-radius: 50%;
		border: 1px solid #544e4e
	}
	.title{
		margin: 1rem 0;
		padding: 0 3%;
		font-size: 1.25rem;
		font-weight: bold;
	}
	.my-headImg img{
		display: block;
		width: 100%;
	}
	.list-box,.skill-box{
		line-height: 2.1rem;
		font-size: 1rem;
		padding:0.5rem 5%;
		background: white;
		margin: 0 auto;
		border-radius: 8px;
		width: 87%;
		border:1px solid rgba(0,0,0,0.1);
	}
	.lv-box{
		margin-bottom: 1rem;
	}
	.job{
		position: relative;
		line-height: 2.3rem;
		font-size: 1rem;
		padding:0 9%;
		background: white;
		margin: 0 auto;
		width: 79%;
		border-left:1px solid rgba(0,0,0,0.1);
		border-right:1px solid rgba(0,0,0,0.1);
	}
	.job:first-child{
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
		border-top:1px solid rgba(0,0,0,0.1);
	}
	.job:last-child{
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		border-bottom:1px solid rgba(0,0,0,0.1);
	}
	.job::before{
		content: "";
		height: 7px;
		width: 7px;
		border-radius: 50%;
		background: #33d029;
		position: absolute;
		box-shadow: 0px 0px 0px 5px rgba(41,185,53,0.15);
		top: 0.9rem;
		left: 4%;
	}
	.job::after{
		content: "";
		height: 100%;
		width: 2px;
		background:rgba(0,0,0,0.15);
		position: absolute;
		top: 0;
		left: 4%;
		transform: translate(2.25px,0);
	}
	.job:first-child:after{
		content: "";
		height: 85%;
		width: 2px;
		background:rgba(0,0,0,0.15);
		position: absolute;
		top: 1.3rem;
		left: 4%;
		transform: translate(2.25px,0);
	}
	.skill>div:first-child{
		font-weight: bold;
		text-align: justify;
		text-align-last:justify;
	}
	.skill>div:nth-child(2){
		width: 1rem;
		text-align: center;
	}
	.skill>div:last-child{
		word-break:break-all;
	}
	.list>div:first-child{
		width: 5.6rem;
		text-align: justify;
		text-align-last:justify;
	}
	.list>div:nth-child(2){
		width: 1rem;
		text-align: center;
	}
	.lv>div:first-child{
		font-size: 1.05rem;
	}
	.lv>div:last-child{
		font-size: 0.95rem;
		color: #888;
	}
	.obj>div:first-child{
		font-weight: bold;
		color:#666;
		font-size: 1rem;
	}
	.obj>div:last-child{
		word-break:break-all;
		font-size: 0.95rem;
		text-indent: 2rem; 
	}
	.percent-box{
		margin-top: 0.3rem;
		height: 0.5rem;
		border-radius: 1rem;
		background: rgba(0,0,0,0.1);
		width: 100%;
	}
	.percent{
		height: 100%;
		border-radius: 1rem;
		background: rgba(91,183,86,0.81);
		width: 0;
	}
	.my{
		text-indent: 2rem; 
	}
</style>	