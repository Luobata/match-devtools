/**
 * @description vuex 存储全局的match数据
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        matches: [
            {
                beforeParams: {
                    id: 1,
                    pid: {
                        id:1
                    }
                },
                afterParams: {
                    pid: 2,
                    data: {
                        type: 1,
                        id: 'sdf'
                    }
                }
            }
        ]
    },
    mutations: {
        flush (state) {
            console.log(window.MATCH_STACK);
        }
    }
});

export default store;
