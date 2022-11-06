import Vue from 'vue'
import { Range, Button, Cell, Toast, Actionsheet } from 'mint-ui'
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell, Actionsheet.name, Actionsheet)
/* or
 * Vue.use(Button)
 * Vue.use(Cell)
 */


Vue.component(Range.name, Range);
new Vue({
  el: '#app',
  components: { App }
})

Toast({
  message: 'Upload Complete',
  position: 'bottom',
  duration: 5000
});