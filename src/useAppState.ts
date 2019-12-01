import { Dispatch, SetStateAction, useContext } from 'react'
import Context from './Context'

export default function useAppState<S>(): [S, Dispatch<SetStateAction<S>>] {
  const { appState, setAppState } = useContext(Context)

  return [appState, setAppState]
}
