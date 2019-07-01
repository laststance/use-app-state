// @flow // $FlowIssue flow doesn't know hook
import { useContext } from 'react'
import Context from './Context'

export default function useStore() {
  const { store, setStore } = useContext(Context)
  return [store, setStore]
}
