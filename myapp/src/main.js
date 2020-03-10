import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { Swipe, SwipeItem, Lazyload, Card, PullRefresh, List, GoodsAction, GoodsActionIcon, GoodsActionButton, Form, Field, Button } from 'vant'
Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(Card).use(PullRefresh).use(List).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Form).use(Field).use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
