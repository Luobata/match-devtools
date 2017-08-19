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
            let matches = this.$store.state.matches.slice();
            if (this.filterKey === '') return matches;

            for (let i = 0; i < matches.length;) {
                if (matches[i].url.indexOf(this.filterKey) === -1) {
                    matches.splice(i, 1);
                } else {
                    i++;
                }
            }

            return matches;
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
