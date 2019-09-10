import path from 'path'

export default function nuxtBootstrapVue (moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin({
    src: path.resolve(__dirname, 'components/index.js'),
    mode: 'client'
  })
  this.addPlugin({
    src: path.resolve(__dirname, 'affiliate.js'),
    mode: 'client'
  }
  )
}
module.exports.meta = require('./package.json')
