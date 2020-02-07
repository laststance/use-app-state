# use-app-state [![CircleCI](https://circleci.com/gh/laststance/use-app-state.svg?style=svg)](https://circleci.com/gh/laststance/use-app-state) [![Depfu](https://badges.depfu.com/badges/7c09c0977aa273b25bebc74befdfbee9/status.svg)](https://depfu.com) [![Depfu](https://badges.depfu.com/badges/7c09c0977aa273b25bebc74befdfbee9/overview.svg)](https://depfu.com/github/laststance/use-app-state?project_id=9896) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> 🌏 useAppState() hook. that global version of setState() built on useContext.


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Usage](#usage)
- [Why](#why)
- [Installation](#installation)
- [API](#api)
  - [`<Provider appState={AppState} />`](#provider-appstateappstate-)
  - [`const [appState, setAppState] = useAppState()`](#const-appstate-setappstate--useappstate)
      - [Get value from `appState`](#get-value-from-appstate)
      - [update appState with `setAppState(appState: Object)`](#update-appstate-with-setappstateappstate-object)
- [TypeScript](#typescript)
  - [Example](#example)
- [Advanced](#advanced)
  - [Multiple AppStates](#multiple-appstates)
- [CodeSandbox](#codesandbox)
- [Example App](#example-app)
- [Articles](#articles)
- [LICENSE](#license)
- [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage

```js
// index.js
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import Provider, { useAppState } from '@laststance/use-app-state'
 
// initialAppState must be Plain Object
const initialAppState = { count: 0 }
 
ReactDOM.render(
  <Provider appState={initialAppState}>
    <App />
  </Provider>,
  document.getElementById('root')
)
 
function App() {
  const [appState, setAppState] = useAppState()

  return (
    <Fragment>
      <div>
        <button onClick={() => setAppState({ count: appState.count + 1 })}>increment</button>
        <button onClick={() => setAppState({ count: appState.count - 1 })}>decrement</button>
      </div>
      <p>I have {appState.apple.count} apples </p>
    </Fragment>
  )
}
```

## Why

I wanted **just global version of `setState()`** in some projects.
So I setup code with `useState()`and `useContext()` then export `useAppState()` hook. 
Finaly added test, TypeScript supprt with published on npm. 🤗

There is no spefial things against generally kind of `useCotecxt()` hook based grrobal store.

## Installation

```
npm install @laststance/use-app-state
```

## API

### `<Provider appState={AppState} />`

+ Make your AppState as a plain Javascript Object.(eg: `const GlobalStaate = {foo: "bar"}`)
+ Wrap Provider in your root app component.
```js
import Provider from '@laststance/use-app-state'

// initialAppState must be Plain Object
const initialAppState = { count: 0 }

ReactDOM.render(
  <Provider appState={initialAppState}>
    <App />
  </Provider>,
  document.getElementById('root')
```

### `const [appState, setAppState] = useAppState()`

+ Gives interface to access and set the global appState.

##### Get value from `appState`

```js
// example
import { useAppState } from '@laststance/use-app-state'

const AppleComponent = () => {
  const [appState, setAppState] = useAppState()
  
  return (<div><{appState.thisIsMyValue}/div>)
}
```

##### update appState with `setAppState(appState: Object)`

```js
// example
import { useAppState } from '@laststance/use-app-state'

const NintendoComponent = () => {
  const [appState, setAppState] = useAppState()
  const orderSmashBros = () => setAppState({sales: appState.sales + 1 })
  
  return (<button onClick={orderSmashBros}>You can not wait!!</button>)
}
```

## TypeScript

This package contains an `index.d.ts` type definition file, so you can use it in TypeScript without extra configuration.

### Example

```typescript
import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'
import Provider, { useAppState } from '@laststance/use-app-state'

interface Food {
  id: string
  name: string
}

type TodoList = Todo[]

interface AppState {
  FoodList: FoodList
}

let initialAppState: AppState = {
  foodList: []
}

const App = () => {
const [appState, setAppState] = useAppState<AppState>() // pass appState object type as generic
const item1: Food = {id: 'j4i3t280u', name: 'Hamburger'}
const item2: Food = {id: 'f83ja0j2t', name: 'Fried chicken'}
setAppState({foodList: [item1, item2]})

const foodListView: ReactElement[] = appState.foodList.map((f: Food) => <p key={f.id}>{f}</p>)

return (<div>{foodListView}</div>)
}

ReactDOM.render(
    <Provider appState={initialAppState}>
      <App>
    </Provider>,
  document.getElementById('root')
)
```


## Advanced

This is an abstract example utilizing [custom Hooks](https://reactjs.org/docs/hooks-custom.html).

- **src/index.js**
```js
import React from 'react'
import ReactDOM from 'react-dom'
import Provider, { useAppState } from '@laststance/use-app-state'
import { Layout } from './style'
import useAction from './actions'

const initialAppState = { count: 0 }
ReactDOM.render(
  <Provider appState={initialAppState}>
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
      <p>{useAppState().appState.count}</p>
    </Layout>
  )
}
```

- **src/actions.js**
```js
import { useAppState } from '@laststance/use-app-state'

function useAction() {
  const [appState, setAppState] = useAppState()

  const Action = {}
  Action.increment = () => setAppState({ count: appState.count + 1 })
  Action.decrement = () => setAppState({ count: appState.count - 1 })

  return Action
}

export default useAction
```

### Multiple AppStates

**・CodeSandbox**

[![Edit use-app-state-multiple-appState-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-app-state-multiple-appState-example-zwqxd?fontsize=14)



## CodeSandbox

[![Edit use-app-state-exampe](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-app-state-exampe-oreg7?fontsize=14)

<a href="https://codesandbox.io/s/use-app-state-example-oreg7">![codesandbox](./images/codesandbox.gif)</a>

[https://use-app-state-demo.netlify.com/](https://use-app-state.netlify.com/) Same code as above usage's one.

## Example App

- At the [React + TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#example-app): Example App Section, [React TypeScript Todo Example 2019](https://github.com/ryota-murakami/react-typescript-todo-example-2019) is created with use-app-state.



## Articles

- [React AppState was migrated to TypeScript!](https://dev.to/malloc007/use-app-state-was-migrated-to-typescript-5746)
- [Components Hierarchy Free setState() will be helpful people who wandering make a decision state management](https://dev.to/malloc007/components-hierarchy-free-setstate-will-be-helpful-people-who-wandering-make-a-decision-state-management-2e71)
- [I Created React AppState! 🤗](https://dev.to/malloc007/i-created-use-app-state-2m3k)

## LICENSE

MIT

## Contributors

Thank you to all these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):
I want to improve this library (especially stability) and your contribution is so helpful!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;" alt="ryota-murakami"/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/ryota-murakami/use-app-state/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/ryota-murakami/use-app-state/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/ryota-murakami/use-app-state/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/jackHedaya"><img src="https://avatars0.githubusercontent.com/u/20172754?v=4" width="100px;" alt="Jack Hedaya"/><br /><sub><b>Jack Hedaya</b></sub></a><br /><a href="https://github.com/ryota-murakami/use-app-state/commits?author=jackHedaya" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!
