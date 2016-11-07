<template>
	<div class="top">
	    <banner></banner>
	  	<enter></enter>
	  	<router-view></router-view>	
	</div>
</template>
<script>
import banner from './components/public/banner'
import enter from './components/public/enter'
	export default {
		name:'top',
		components:{
			banner,
			enter
		}
	}
</script>
