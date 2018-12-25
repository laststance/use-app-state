<!-- START doctoc generated TOC please keep comment here to allow auto update -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors)
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [muriatic](#muriatic)
  - [Usage](#usage)
  - [API](#api)
  - [Contributors](#contributors)
  - [LICENSE](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# muriatic
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

## Usage

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './style'
import Provider, { useStore } from 'muriatic'

const initialStore = { count: 0 }

ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

function App() {
  const { store, setStore } = useStore()

  const inrement = () => setStore({ count: store.count + 1 })
  const decrement = () => setStore({ count: store.count - 1 })

  return (
    <Layout>
      <div>
        <button onClick={inrement}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <p>{store.count}</p>
    </Layout>
  )
}
```

## API
refer [Usage](https://github.com/ryota-murakami/muriatic/edit/master/README.md), THere is no nothig else.

## 
Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):


## LICENSE
MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!