<template>
    <div>

        <div>通过props获取父组件数据：{{mainData}}</div>
        <div>不通过props获取父组件数据：{{$parent.write}}</div>

        <div>
            <span>子组件数据：</span>
            <input type="text" v-model="subData">
            <button @click="handler">清除数据</button>
        </div>
        <div>
            <button @click="mainHandler">子组件触发父组件清除事件</button>
        </div>

    </div>
</template>
<script>
export default {
    props: ["mainData"],
    data() {
        return {
            subData: "子组件"
        };
    },
    methods: {
        handler() {
            this.subData = ''
        },
        mainHandler() {
            this.$emit("mainMethod",this.subData);
        }
    }
};
</script>
