import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'

const globalStyle = css`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    border-radius: 5px;
    border-width: 3px;
    border-style: solid;
    padding: 16px;
    min-width: 12rem;
    text-decoration: none;
    margin: 10px;
    font-size: 24px;
    &:focus {
      outline: 0;
    }
  }

  button:first-child {
    color: green;
    border-color: green;
  }

  button:last-child {
    color: crimson;
    border-color: crimson;
  }
`

const layout = {
  height: '100%',
  fontSize: '58px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

export const Layout = props => {
  return (
    <Fragment>
      <Global styles={globalStyle} />
      <div style={layout}>{props.children}</div>
    </Fragment>
  )
}
