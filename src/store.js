/**
 * @description vuex 存储全局的match数据
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        matches: [
        ]
    },
    mutations: {
        flush (state, data) {
            console.log(data);
            state.matches = data;
        }
    }
});

export default store;
