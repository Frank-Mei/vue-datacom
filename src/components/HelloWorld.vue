<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<ul>
			<li>
				<router-link to="index">基本数据通讯</router-link>
			</li>
			<li>
				<router-link to="vuex">Vuex</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
			write: '',
            msg: "组件间数据通讯"
        };
	},
	components:{
		
	}
};
</script>

<style>

</style>
