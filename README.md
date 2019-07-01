# muriatic [![CircleCI](https://circleci.com/gh/ryota-murakami/muriatic.svg?style=svg)](https://circleci.com/gh/ryota-murakami/muriatic) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> Plain Entire State Management with React hooks. 

[![](muriatic.gif)](https://muriatic.netlify.com/)

## One File Demo
In avobe example, muriatic exposing all API and usecase. Please keep in mind `initialStore` must be Plain Object.  

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Layout } from './style'
import Provider, { useStore } from 'muriatic'

// initialStore must be Plain Object
const initialStore = { count: 0 }

ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

function App() {
  const [store, setStore] = useStore()

  const inrement = () => setStore({ count: store.count + 1 })
  const decrement = () => setStore({ count: store.count - 1 })

  return (
    <Layout>
      <div>
        <button onClick={inrement}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <p>I have {store.apple.count} apple </p>
    </Layout>
  )
}
```

## Installation
On your React project root directory, run bellow yarn commands.

```
yarn add muriatic
yarn add react react-dom
```

## API
### `<Provider store={Store>} />`
Make your GrobalStore as a PlainObject.(eg: `const GlobalStaate = {foo: "bar"}`)  
And Wrapp Provider in your root app component.
```js
import Provider from 'muriatic'

// initialStore must be Plain Object
const initialStore = { count: 0 }

ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('root')
```

### `const [store, setStore] = useStore()`
You have to import top of file like this `import { useStore } from 'muriatic'` 

You can use useStore() only into the body of Function Components.
And then you recive 2 value witch is **store** **setState**  variables named by [Object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring).

### `store: Object`

```js
const AppleComponent = () => {
  const {store, setStore} = useStore()
  
  rieturn (<div><{store.faavGame}/div>) // output <div><God Of War3/div> 
}
```

### `setStore(store: Object)`
Update store to argument value.

```js
const NINTENDOComponent = () => {
  const {store, setStore} = useStore()
  const orderSmashBros = () => setStore({sales: store.sales + 1 })
  
  rieturn (<button onClick={orderSmashBros}>Your can not wait!!</button>)
}
```

## Advanced
This is action abstraction example utilize [custom Hooks](https://reactjs.org/docs/hooks-custom.html).

- src/index.js
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Provider, { useStore } from 'muriatic'
import { Layout } from './style'
import useAction from './actions'

const initialStore = { count: 0 }
ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

function App() {
  const action = useAction()
  return (
    <Layout>
      <div>
        <button onClick={action.inrement}>increment</button>
        <button onClick={action.decrement}>decrement</button>
      </div>
      <p>{useStore().store.count}</p>
    </Layout>
  )
}
```

- src/actions.js
```js
import { useStore } from 'muriatic'

function useAction() {
  const [store, setStore] = useStore()

  const Action = {}
  Action.inrement = () => setStore({ count: store.count + 1 })
  Action.decrement = () => setStore({ count: store.count - 1 })

  return Action
}

export default useAction
```

## LICENSE
MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):
I want to implove this library(espesialy stability), your contribute is so helpful!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;"/><br /><sub><b>ryota-murakami</b></sub>](http://ryota-murakami.github.io/)<br />[💻](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Code") [📖](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Documentation") [⚠️](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
