import SplitPane from '../splitPane/splitPane.vue';
import ComponentTree from '../matchTab/matchTab.vue';
import matchObj from 'COMPONENTS/matchObj/matchObj.vue';

export default {
    data () {
        return {
            matchArr: []
        }
    },
    components: {
        ComponentTree,
        matchObj,
        SplitPane
    },
    beforeMount () {
        this.matchArr = window.MATCH_STACK;
        this.matchArr = [
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
        ];
        console.log(this.matchArr);
    },
    methods: {
        filter (e) {
            bridge.send('filter-instances', e.target.value)
        }
    }
};
