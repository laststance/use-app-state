import React from 'react'
import ReactDOM from 'react-dom'
import Provider, { useAppState } from '@laststance/use-app-state'
import { Layout } from './style'

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
    <Layout>
      <div>
        <button onClick={() => setAppState({ count: appState.count + 1 })}>
          increment
        </button>
        <button onClick={() => setAppState({ count: appState.count - 1 })}>
          decrement
        </button>
      </div>
      <p>{appState.count}</p>
    </Layout>
  )
}
