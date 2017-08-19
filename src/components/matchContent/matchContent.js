import SplitPane from '../splitPane/splitPane.vue';
import matchFilter from '../matchFilter/matchFilter.vue';
import matchObj from 'COMPONENTS/matchObj/matchObj.vue';

export default {
    computed: {
        matchArr () {
            return this.$store.state.showMatch;
        }
    },
    components: {
        matchFilter,
        matchObj,
        SplitPane
    },
    beforeMount () {
        console.log(this.matchArr);
    },
    methods: {
        filter (e) {
            bridge.send('filter-instances', e.target.value)
        }
    }
};
