import { cleanup, render } from 'react-testing-library'
import React, { useContext } from 'react'
import StoreContext from './StoreContext'
import Provider from './Provider'

afterEach(cleanup)

const Receiver = () => {
  const { store, setStore } = useContext(StoreContext)

  const handleClick = () => setStore({ count: store.count + 1 })

  return (
    <button
      data-testid="target-butbton"
      className="button"
      onClick={handleClick}
    >
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

  const nodeText = getByTestId('target-butbton')
  expect(nodeText).toHaveTextContent('0')
})
