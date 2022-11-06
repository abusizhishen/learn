import { Vue } from 'vue'
new Vue({
    data() {
        return {
            message: "hello world"
        }
    },

    created() {
        this.$on("didi", this.bound)
    },
    methods: {
        bound: function (e) {
            console.log(e)
        },

        boost: () => {
            this.$emit("didi", 'didi');
        }
    },


}).mount('#app')
