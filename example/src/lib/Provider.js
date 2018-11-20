// @flow // $FlowIssue flow doesn't know hook
import React, { useState, Children } from 'react'
import isPlainObject from './util/isPlainObject'
import StoreContext from './StoreContext'

type Props = {
  initialState: Object,
  children: React$Node
}

export default function Provider({ initialState, children }: Props) {
  if (!isPlainObject(initialState)) {
    throw new Error(
      'react-topdown: Expected the initialState to be a PlainObject'
    )
  }

  const [store, setState] = useState(initialState)
  const setStore = (state: Object) => {
    if (!isPlainObject(state)) {
      throw new Error(
        'react-topdown: Expected the setState() 1st argument to be a PlainObject'
      )
    }

    setState({ ...store, ...state })
  }

  return (
    <StoreContext.Provider
      value={{
        store,
        setStore
      }}
    >
      {Children.only(children)}
    </StoreContext.Provider>
  )
}
