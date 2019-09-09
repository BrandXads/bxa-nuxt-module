// components/index.js
import Vue from 'vue'
import AffiliateLink from './lib/AffiliateLink.vue'
import LinkWrap from './lib/LinkWrap.vue'

// loop through components and register them
Vue.component('affiliate-link', LinkWrap)
Vue.component('aff-link', AffiliateLink)
