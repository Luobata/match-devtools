import ActionHeader from './actionTab.vue';

export default {
    data () {
        return {
            filterKey: '',
            activeItem: {}
        }
    },
    computed: {
        matchArr () {
            return this.$store.state.matches;
        }
    },
    components: {
        ActionHeader
    },
    methods: {
        filterStacks (e) {
            this.filterKey = e.target.value;
        },
        chooseItem (item) {
            this.activeItem = item;
            this.$store.commit('chooseItem', item);
        }
    }
};
