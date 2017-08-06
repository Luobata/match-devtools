export default {
    data () {
        return {
            matchArr: []
        }
    },
    beforeMount () {
        this.matchArr = window.MATCH_STACK;
        console.log(this.matchArr);
    }
};
