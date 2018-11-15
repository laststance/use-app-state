import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Routes'
import { Provider } from './lib'

const shape = {
  numray: [...Array(999).keys()],
  prmstr: 'it is string'
}

ReactDOM.render(
  <Provider initialState={shape}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
