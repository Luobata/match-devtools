import SplitPane from '../splitPane/splitPane.vue';
import ComponentTree from '../matchTab/matchTab.vue';

export default {
    components: {
        ComponentTree,
        SplitPane
    },
    methods: {
        filter (e) {
            bridge.send('filter-instances', e.target.value)
        }
    }
};
