# BXA Nuxt Module
This module can be included into a Nuxt project to bootstrap commonly used components and plugins.

## Installation
To install in an existing Nuxt project:
``
yarn add brandxads/bxa-nuxt-module
```

Inside your `nuxt.config.js` file, add the module:
```js
modules: [
  'bxa-nuxt-module'
]
```

## Current features:

### Extract query parameters and store in localStorage / populate Vuex
Place the following code inside the `mounted()` hook of any page where you'd like to extract query parameters from the url:
```
this.$extractQuery(window.location.search)
```

### Place affiliate link
The module automatically registers the `<affiliate-link>` component. The following props are available:
```js
props: {
    // Link url, including any existing query params
    baseUrl: {
      type: String,
      required: true
    },
    // Overwrite any params present in baseUrl with values from cookie
    overwriteQuery: {
      type: Boolean,
      required: false,
      default: true
    },
    // Values to pass, with mappings
    // e.g. { a: 'aff', gclid: 's5' }
    // Leave blank to pass through all values
    valuesToPass: {
      type: Object,
      required: false,
      default: () => {return new Object}
    }
```

### Attribution
All params are made available in the root state of the `attribution` Vuex module. Access via `this.$store.state.attribution`
