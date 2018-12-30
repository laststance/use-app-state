# muriatic [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
Global version of a setState() with React hooks. 

## Usage
In Bellow example, muriatic exposing all API and usecase.Please keep this in mind `initialStore` must be Plain Object.  
Also this Library using `Store` word as a so-called Global Store.

If you don't have strong knowledge of React, muriatic doesn't contain complicated mechanism.
I wish many people to enjoy software development using React.

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
  const { store, setStore } = useStore() // store is plain object for grobal state. anytime enable to access like store.count

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

[Live Demo](https://muriatic.netlify.com/)

## Install
```
yarn add muriatic
yarn add react@16.7.0-alpha.2 react-dom@16.7.0-alpha.2
```
⚠️ In this time,(2018 Dec 26) hooks is only available for alpha ver.

## LICENSE
MIT

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4" width="100px;"/><br /><sub><b>ryota-murakami</b></sub>](http://ryota-murakami.github.io/)<br />[💻](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Code") [📖](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Documentation") [⚠️](https://github.com/ryota-murakami/muriatic/ryota-murakami/muriatic/commits?author=ryota-murakami "Tests") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
