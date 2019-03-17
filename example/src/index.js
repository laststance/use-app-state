import React from 'react'
import ReactDOM from 'react-dom'
import Provider, { useStore } from 'muriatic'
import { Layout } from './style'

const initialStore = { count: 0 }
ReactDOM.render(
  <Provider store={initialStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)

function App() {
  const { store, setStore } = useStore()
  return (
    <Layout>
      <div>
        <button onClick={() => setStore({ count: store.count + 1 })}>
          increment
        </button>
        <button onClick={() => setStore({ count: store.count - 1 })}>
          decrement
        </button>
      </div>
      <p>{store.count}</p>
    </Layout>
  )
}
