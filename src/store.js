/**
 * @description vuex 存储全局的match数据
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        matches: [
        ],
        showMatch: [
        ]
    },
    mutations: {
        flush (state, data) {
            state.matches = data;
        },
        chooseItem (state, item) {
            state.showMatch = [item];
        }
    }
});

export default store;
