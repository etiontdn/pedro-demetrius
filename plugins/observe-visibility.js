import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.directive('visible', function (el, binding) {
  el.style.visibility = !!binding.value ? 'visible' : 'hidden';
});
