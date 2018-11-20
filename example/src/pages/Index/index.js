import React, { memo, useContext } from 'react'
import styled from 'react-emotion'
import { withStyles } from '@material-ui/core/styles'
import compose from '../../compose'
import StoreContext from '../../lib/StoreContext'
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

const Num = styled.div`
    display: flex;
 `

function Index({ classes }) {
  const { store, setStore } = useContext(StoreContext)
  const { numray } = store
  const handleClick = () => {
    numray.shift()
    setStore({ numray: [...numray] })
  }

  return (
    <Screen>
      <div>Index Page</div>
      <Button
        onClick={handleClick}
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Action
      </Button>
      <Num>
        {numray.map(i => (
          <div key={i}>{i}</div>
        ))}
      </Num>
    </Screen>
  )
}

export default compose(
  withStyles(styles),
  memo
)(Index)
