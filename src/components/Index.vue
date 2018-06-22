<template>
    <div>
        <h1>基本数据通讯</h1>
        <div class="item">
            <h2>我是父组件</h2>
            <div>
                父组件数据：<input type="text" v-model="write"><button @click="handler">清除数据</button>
            </div>

            <div>
                <button @click="getSub">点击获取子组件数据</button>
                <span>{{subData}}</span>
            </div>
            <div>
                <button @click="getSubMethod">父组件触发子组件清除事件</button>
            </div>
        </div>

        <div class="item">
            <h2>我是子组件</h2>
            <sub-component :mainData="write" ref="sub" @mainMethod="handler"></sub-component>
        </div>

        <div>
            <router-link to="/HelloWorld">返回</router-link>
        </div>
    </div>
</template>
<script>
import SubComponent from "./Sub";
export default {
    data() {
        return {
            write: "父组件",
            subData: ''
        };
    },
    components: {
        SubComponent
    },
    mounted() {},
    methods: {
        getSub() {
            this.subData = this.$refs.sub.subData
        },
        handler() {
           this.write = ""
        },
        getSubMethod() {
            this.$refs.sub.handler();
        }
    }
};
</script>
<style scoped>
.item {
    padding: 20px;
    border: 1px dashed #42b983;
    margin-top: 20px;
}
</style>

