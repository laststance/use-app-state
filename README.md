# muriatic [![CircleCI](https://circleci.com/gh/ryota-murakami/muriatic.svg?style=svg)](https://circleci.com/gh/ryota-murakami/muriatic) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors) [![Netlify Status](https://api.netlify.com/api/v1/badges/f98aafdd-e136-41f0-b626-23471689ff2f/deploy-status)](https://app.netlify.com/sites/muriatic/deploys)

> 🌏 React Global Store for Sharing Data between each components Built on Context.

![movie](./movie.gif)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

  - [Usage](#usage)
  - [Why](#why)
  - [Resource](#resource)
  - [Installation](#installation)
  - [API](#api)
    - [`<Provider store={Store} />`](#provider-storestore-)
    - [`const [store, setStore] = useStore()`](#const-store-setstore--usestore)
  - [Get value from `store`](#get-value-from-store)
    - [update store with `setStore(store: Object)`](#update-store-with-setstorestore-object)
  - [Advanced](#advanced)
  - [TypeScript](#typescript)
    - [Example](#example-1)
  - [LICENSE](#license)
  - [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

```js
// index.js
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
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

  return (
    <Fragment>
      <div>
        <button onClick={() => setStore({ count: store.count + 1 })}>increment</button>
        <button onClick={() => setStore({ count: store.count - 1 })}>decrement</button>
      </div>
      <p>I have {store.apple.count} apples </p>
    </Fragment>
  )
}
```

## Play 👇

[![Edit muriatic-exampe](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/muriatic-exampe-oreg7?fontsize=14)

[https://muriatic-demo.netlify.com/](https://muriatic.netlify.com/) Same code as above usage's one.

## Why

I wanted a sharable state over the component hierarchy that could be setup immediately (in one shot). The goal was to have something similar to a **global version of `setState()`** with a simple interface.

Although there are many similar libraries and blog posts with code examples, they tended to be unnecessarily complicated / difficult to reuse. Muriatic is awesome for prototyping, experimenting, and developing small apps.

Now, the`setStore()` custom hook is packed it as an npm package to make setup one shot anywhere! 🍸

## Resources

- [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#example-app): Example App [React TypeScript Todo Example 2019 Mid](https://github.com/ryota-murakami/react-typescript-todo-example-2019) is created with muriatic.

## Installation

```
npm install muriatic
yarn add muriatic
```

## API

### `<Provider store={Store} />`

+ Make your GlobalStore as a plain Javascript Object.(eg: `const GlobalStaate = {foo: "bar"}`)  
+ Wrap Provider in your root app component.
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

+ Gives interface to access and set the global store.

## Get value from `store`

```js
// example
import { useStore } from 'muriatic'

const AppleComponent = () => {
  const [store, setStore] = useStore()
  
  return (<div><{store.thisIsMyValue}/div>)
}
```

### update store with `setStore(store: Object)`

```js
// example
import { useStore } from 'muriatic'

const NintendoComponent = () => {
  const [store, setStore] = useStore()
  const orderSmashBros = () => setStore({sales: store.sales + 1 })
  
  return (<button onClick={orderSmashBros}>You can not wait!!</button>)
}
```

## Advanced

This is an abstract example utilizing [custom Hooks](https://reactjs.org/docs/hooks-custom.html).

- **src/index.js**
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
        <button onClick={action.increment}>increment</button>
        <button onClick={action.decrement}>decrement</button>
      </div>
      <p>{useStore().store.count}</p>
    </Layout>
  )
}
```

- **src/actions.js**
```js
import { useStore } from 'muriatic'

function useAction() {
  const [store, setStore] = useStore()

  const Action = {}
  Action.increment = () => setStore({ count: store.count + 1 })
  Action.decrement = () => setStore({ count: store.count - 1 })

  return Action
}

export default useAction
```

### Multiple Stores

**・Play 👇**

[![Edit muriatic-multiple-store-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/muriatic-multiple-store-example-zwqxd?fontsize=14)

## TypeScript

This package contains an `index.d.ts` type definition file, so you can use it in TypeScript without extra configuration.

### Example

```typescript
import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import Provider, { useStore } from 'muriatic'

interface Food {
  id: string
  name: string
}

type TodoList = Todo[]

interface Store {
  FoodList: FoodList
}

let initialStore: Store = {
  foodList: []
}

const App = () => {
const [store, setStore] = useStore<Store>() // pass store object type as generic
const item1: Food = {id: 'j4i3t280u', name: 'Hamburger'}
const item2: Food = {id: 'f83ja0j2t', name: 'Fried chicken'}
setStore({foodList: [item1, item2]})

const foodListView: ReactElement[] = store.foodList.map((f: Food) => <p key={f.id}>{f}</p>)

return (<div>{foodListView}</div>)
}

ReactDOM.render(
    <Provider store={initialStore}>
      <App>
    </Provider>,
  document.getElementById('root')
)
```

## LICENSE

MIT

## Contributors

Thank you to all these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):
I want to improve this library (especially stability) and your contribution is so helpful!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;" alt="ryota-murakami"/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/ryota-murakami/muriatic/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/ryota-murakami/muriatic/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/ryota-murakami/muriatic/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/jackHedaya"><img src="https://avatars0.githubusercontent.com/u/20172754?v=4" width="100px;" alt="Jack Hedaya"/><br /><sub><b>Jack Hedaya</b></sub></a><br /><a href="https://github.com/ryota-murakami/muriatic/commits?author=jackHedaya" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
