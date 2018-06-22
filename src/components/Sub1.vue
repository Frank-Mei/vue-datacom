<template>
    <div>
        <div>
            获取count: {{count}}
        </div>
        <div>
            获取count类型: {{countType}}
        </div>
        <div>
            获取arr长度: {{arrLength}}
        </div>
        <div>
            修改count:
            <button @click="updateCount">+</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
    props: ["mainData"],
    data() {
        return {};
    },
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["countType", "arrLength"])
        
    },
    methods: {
        ...mapMutations(["INCREMENT"]),
        ...mapActions(["incrementAsync"]),
        updateCount() {
            this.incrementAsync({
                amount: 2
            })
        },
    }
};
</script>
