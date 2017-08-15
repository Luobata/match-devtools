import Vue from 'vue';
import App from './App.vue';
import store from './store';


export function initDevTools (shell) {
    initUi(shell);
};

function initUi (shell) {
    let app = null;

    shell.connect(bridge => {
        window.MATCHBRIDGE = bridge;

        bridge.on('flush', function () {
            store.commit('flush');
        });
    });

    app = new Vue({
        store,
        render (h) {
            return h(App);
        }
    }).$mount('#app');
};
