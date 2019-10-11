// @flow // $FlowIssue flow doesn't know hook
import React, { useState, Children } from 'react'
import isPlainObject from './util/isPlainObject'
import Context from './Context'

type Props = {
  appState: Object,
  children: React$Node
}

export default function Provider(props: Props) {
  const { appState } = props

  if (!isPlainObject(appState)) {
    throw new Error('react-appstate: Provider Expected the appState to be a PlainObject')
  }

  // "tmpAppState" role is avoid name collision "appState"
  const [tmpAppState, setState] = useState(appState)

  const setAppState: Function = (state: Object) => {
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
