import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutation-types'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        count: 0,
        arr: [{
            type: 1,
            name: "w"
        }, {
            type: 2,
            name: "M"
        }]
    },
    getters: {
        countType: state => {
            return typeof state.count
        },
        arrLength: state => {
            return state.arr.length
        }
    },
    mutations: {
        [INCREMENT](state, payload) {
            state.count += payload.amount
        }
    },
    actions: {
        incrementAsync ({commit},payload){
            setTimeout(()=>{
                commit('INCREMENT',payload)
            },1000)            
        }
    }
})