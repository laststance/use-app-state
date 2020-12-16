import React, { FC, useState, Children } from 'react'
import isPlainObject from './util/isPlainObject'
import Context from './Context'

// Originary type AppState = Record<string, unknown> but TypeScript doing incorrect compatibility evaluation.
// follow the link to detail https://github.com/microsoft/TypeScript/issues/15300
// eslint-disable-next-line @typescript-eslint/ban-types
export type AppState = Object
// eslint-disable-next-line no-unused-vars
export type SetAppState = (state: AppState) => void

interface Props {
  initialState: AppState
}

const Provider: FC<Props> = ({ initialState, children }) => {
  if (!isPlainObject(initialState)) {
    throw new Error(
      'use-app-state: Provider Expected the initialState to be a PlainObject'
    )
  }

  const [appState, setState] = useState(initialState)

  const setAppState: SetAppState = (newState: AppState) => {
    if (!isPlainObject(newState)) {
      throw new Error(
        'use-app-sate: Expected the setAppState() argument to be a PlainObject'
      )
    }

    setState(() => {
      return { ...appState, ...newState }
    })
  }

  return (
    <Context.Provider
      value={{
        appState: appState,
        setAppState: setAppState,
      }}
    >
      {Children.only(children)}
    </Context.Provider>
  )
}

export default Provider
