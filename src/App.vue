<template>
  <div>
    <component :is="currentLayout">
		  <router-view></router-view>
	  </component>
  </div>
</template>


<script>
	import { useRoute } from 'vue-router';

	export default {  
		name: 'App',

		data() {
			return {
				currentLayout: '',
			};
		},
    
    

    beforeMounted(){
      
      const route = useRoute();
      this.currentLayout = route.meta.layout;

      if(this.currentLayout === '' || this.currentLayout !== 'admin-layout') {
        this.currentLayout = 'font-layout';
      }
    },
    
    watch: {
      $route(to, from) {
				this.currentLayout = to.meta.layout
      }
    },
  }
</script>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
