import path from 'path'

export default function nuxtBootstrapVue (moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin(path.resolve(__dirname, 'AffiliateLink.vue'))
  this.addPlugin(path.resolve(__dirname, 'LinkWrap.vue'))
  this.addPlugin(path.resolve(__dirname, 'affiliate.js'))
}
module.exports.meta = require('./package.json')
