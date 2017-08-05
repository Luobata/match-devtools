import Vue from 'vue';
import App from './App.vue';


export function initDevTools () {
    initUi();
};

function initUi () {
    let app = null;
    app = new Vue({
        render (h) {
            return h(App);
        }
    }).$mount('#app');
};