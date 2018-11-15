import React, { memo, useContext } from 'react'
import styled from 'react-emotion'
import { withStyles } from '@material-ui/core/styles'
import compose from '../../compose'
// import { StoreContext } from '../../lib'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Index({ classes }) {
  // const { store, setStore } = useContext(StoreContext)

  return (
    <Screen>
      <div>Index Page</div>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
    </Screen>
  )
}

export default compose(
  withStyles(styles),
  memo
)(Index)
