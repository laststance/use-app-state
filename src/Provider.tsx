import React, { FC, useState, Children, ReactNode } from 'react'
import isPlainObject from './util/isPlainObject'
import Context from './Context'

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  appState: Record<string, any>
  children: ReactNode
}

const Provider: FC<Props> = props => {
  const { appState } = props

  if (!isPlainObject(appState)) {
    throw new Error(
      'react-appstate: Provider Expected the appState to be a PlainObject'
    )
  }

  // "tmpAppState" role is avoid name collision "appState"
  const [tmpAppState, setState] = useState(appState)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setAppState: Function = (state: Record<string, any>) => {
    if (!isPlainObject(state)) {
      throw new Error(
        'react-appstate: Expected the setAppState() argument to be a PlainObject'
      )
    }

    setState(tmpAppState => {
      return { ...tmpAppState, ...state }
    })
  }

  return (
    <Context.Provider
      value={{
        appState: tmpAppState,
        setAppState: setAppState
      }}
    >
      {Children.only(props.children)}
    </Context.Provider>
  )
}

export default Provider
