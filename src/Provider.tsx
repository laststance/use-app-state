import React, { FC, useState, Children, ReactNode } from 'react'
import isPlainObject from './util/isPlainObject'
import Context from './Context'

// Originary type AppState = Record<string, unknown> but TypeScript doing incorrect compatibility evaluation.
// follow the link to detail https://github.com/microsoft/TypeScript/issues/15300
// eslint-disable-next-line @typescript-eslint/ban-types
export type AppState = Object
export type SetAppState = (state: AppState) => void

interface Props {
  appState: AppState
  children: ReactNode
}

const Provider: FC<Props> = (props) => {
  const { appState } = props

  if (!isPlainObject(appState)) {
    throw new Error(
      'use-app-state: Provider Expected the appState to be a PlainObject'
    )
  }

  // "tmpAppState" role is avoid name collision "appState"
  const [tmpAppState, setState] = useState(appState)

  const setAppState: SetAppState = (state: AppState) => {
    if (!isPlainObject(state)) {
      throw new Error(
        'use-app-sate: Expected the setAppState() argument to be a PlainObject'
      )
    }

    setState((tmpAppState) => {
      return { ...tmpAppState, ...state }
    })
  }

  return (
    <Context.Provider
      value={{
        appState: tmpAppState,
        setAppState: setAppState,
      }}
    >
      {Children.only(props.children)}
    </Context.Provider>
  )
}

export default Provider
