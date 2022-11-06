import Vue from 'vue'
import 'mint-ui/lib/style.css'

new Vue({
  el: "#app",
  data: {
    message: "hello world"

  },

  created() {
    this.$on("didi", this.bound)
  },
  methods: {
    bound: function (e) {
      console.log(e)
    },

    boost: function () {
      this.$emit("didi", 'didi');
    }
  }
})