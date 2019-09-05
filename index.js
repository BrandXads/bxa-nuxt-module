import AffiliateLink from './AffiliateLink.vue'
import attribution from './attribution.js'
import extract from './extract.js'

const AffiliateLinkPlugin = {
  install(Vue) {

    Vue.store.registerModule('attribution', attribution)

    // Register components
    Vue.component('affiliate-link', AffiliateLink)

    // Add event bus to vue instance
    Vue.prototype.$extractQuery = extract
  }
}

export default AffiliateLinkPlugin
