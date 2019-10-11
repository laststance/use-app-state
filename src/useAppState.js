// @flow // $FlowIssue flow doesn't know hook
import { useContext } from 'react'
import Context from './Context'

export default function useAppState() {
  const { appState, setAppState } = useContext(Context)
  return [appState, setAppState]
}
