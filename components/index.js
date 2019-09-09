// components/index.js
import Vue from 'vue'
import components from './lib/index.js'

// loop through components and register them
for (const name in components) {
  Vue.component(name)
}
