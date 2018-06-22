<template>
    <div>
        <h1>使用Vuex</h1>

        <div>
            <h2>父组件</h2>
            <div>
                获取count:{{$store.state.count}}
            </div>
            <div>
                获取arr长度: {{arrLength}}
            </div>
        </div>
        <div>
            <h2>子组件</h2>
            <sub-component></sub-component>
        </div>

        <div>
            <router-link to="/HelloWorld">返回</router-link>
        </div>
    </div>
</template>
<script>
import SubComponent from "./Sub1";
import {mapGetters} from 'vuex';
export default {
    components: {
        SubComponent
    },
    computed:{
        ...mapGetters(['arrLength'])
    }
};
</script>
