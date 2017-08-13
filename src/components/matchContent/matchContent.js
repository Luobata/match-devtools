import SplitPane from '../splitPane/splitPane.vue';
import ComponentTree from '../matchTab/matchTab.vue';
import matchObj from 'COMPONENTS/matchObj/matchObj.vue';

export default {
    data () {
        return {
        }
    },
    computed: {
        matchArr () {
            return this.$store.state.matches;
        }
    },
    components: {
        ComponentTree,
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
