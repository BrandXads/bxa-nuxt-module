import path from 'path'

export default function nuxtBootstrapVue (moduleOptions) {
  // Register `plugin.js` template
  this.addPlugin({
    src: path.resolve(__dirname, 'components/index.js'),
    ssr: false 
  })
  this.addPlugin(path.resolve(__dirname, 'affiliate.js'))
}
module.exports.meta = require('./package.json')
