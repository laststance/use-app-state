// @flow // $FlowIssue flow doesn't know hook
import { useContext } from 'react'
import Context from './Context'

export default () => useContext(Context)
