import { cleanup, render, fireEvent } from 'react-testing-library'
import React from 'react'
import Provider, { useAppState } from '../src/index'
import 'jest-dom/extend-expect'

afterEach(cleanup)

const Receiver = () => {
  const [appState, setAppState] = useAppState()

  const clickCount = () => setAppState({ count: appState.count + 1 })

  const clickStable = () => setAppState({ stable: { changed: 'changed' } })

  return (
    <div>
      <button data-testid="count" onClick={clickCount}>
        {appState.count}
      </button>
      <button data-testid="stable" onClick={clickStable}>
        {JSON.stringify(appState.stable)}
      </button>
    </div>
  )
}

const App = () => {
  const appState = { count: 0, stable: { blank: 'blank' } }

  return (
    <Provider appState={appState}>
      <Receiver />
    </Provider>
  )
}

test('Provider is sharing appState value to bottom component', () => {
  const { getByTestId } = render(<App />)

  const node = getByTestId('count')
  expect(node).toHaveTextContent('0')
})

test('should count increments by setAppState()', () => {
  const { getByTestId } = render(<App />)
  const countNode = getByTestId('count')
  expect(countNode).toHaveTextContent('0')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('1')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('2')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('3')
  fireEvent.click(countNode)

  // stable is still untouch above tests, so confirm state is appStateValue
  const stableNode = getByTestId('stable')
  expect(stableNode).toHaveTextContent(`{"blank":"blank"}`)
})

test('should update json value by setAppState()', () => {
  const { getByTestId } = render(<App />)
  const stableNode = getByTestId('stable')
  expect(stableNode).toHaveTextContent(`{"blank":"blank"}`)
  fireEvent.click(stableNode)
  expect(stableNode).toHaveTextContent(`{"changed":"changed"}`)

  // repeat 'should count increments by setAppState()'
  const countNode = getByTestId('count')
  expect(countNode).toHaveTextContent('0')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('1')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('2')
  fireEvent.click(countNode)
  expect(countNode).toHaveTextContent('3')
  fireEvent.click(countNode)
})
