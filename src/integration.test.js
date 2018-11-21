import { cleanup, render, fireEvent } from 'react-testing-library'
import React, { useContext } from 'react'
import StoreContext from './StoreContext'
import Provider from './Provider'
import 'jest-dom/extend-expect'

afterEach(cleanup)

const Receiver = () => {
  const { store, setStore } = useContext(StoreContext)

  const handleClick = () => setStore({ count: store.count + 1 })

  return (
    <button data-testid="button" onClick={handleClick}>
      {store.count}
    </button>
  )
}

const App = () => {
  const initialState = { count: 0 }

  return (
    <Provider initialState={initialState}>
      <Receiver />
    </Provider>
  )
}

test('Privider is sharing store value to bottom component', () => {
  const { getByTestId } = render(<App />)

  const node = getByTestId('button')
  expect(node).toHaveTextContent('0')
})

test('working fine setStore() API', () => {
  const { getByTestId } = render(<App />)
  const node = getByTestId('button')
  expect(node).toHaveTextContent('0')
  fireEvent.click(node)
  expect(node).toHaveTextContent('1')
  fireEvent.click(node)
  expect(node).toHaveTextContent('2')
  fireEvent.click(node)
  expect(node).toHaveTextContent('3')
  fireEvent.click(node)
  expect(node).toHaveTextContent('4')
  fireEvent.click(node)
  expect(node).toHaveTextContent('5')
  fireEvent.click(node)
  expect(node).toHaveTextContent('6')
  fireEvent.click(node)
  expect(node).toHaveTextContent('7')
})
