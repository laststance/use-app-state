// @flow // $FlowIssue flow doesn't know hook
import React, { useState, Children } from 'react'
import isPlainObject from './util/isPlainObject'
import StoreContext from './StoreContext'

type Props = {
  Store: Object,
  children: React$Node
}

export default function Provider({ Store, children }: Props) {
  if (!isPlainObject(Store)) {
    throw new Error(
      'react-topdown: Expected the Store to be a PlainObject'
    )
  }

  const [store, setState] = useState(Store)
  const setStore = (state: Object) => {
    if (!isPlainObject(state)) {
      throw new Error(
        'react-topdown: Expected the setStore() argument to be a PlainObject'
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
