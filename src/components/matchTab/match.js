import ActionHeader from './actionTab.vue';

export default {
    data () {
        return {
            matchArr: []
        }
    },
    components: {
        ActionHeader
    },
    beforeMount () {
        this.matchArr = window.MATCH_STACK;
        console.log(this.matchArr);
    },
    methods: {
        filterStacks () {
        }
    }
};
