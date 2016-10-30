<template>
	<div class="top">
	    <banner></banner>
	  	<enter></enter>
	  	<router-view></router-view>	
	</div>
</template>
<script>
import store from './vuex/store'
import banner from './components/public/banner'
import enter from './components/public/enter'
	export default {
		name:'top',
		store,
		components:{
			banner,
			enter
		}
	}
</script>
