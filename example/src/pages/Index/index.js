import React, { memo, useContext } from 'react'
import styled from 'react-emotion'
import StoreContext from '../../lib/StoreContext'
import Button from '@material-ui/core/Button'

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const NumArea = styled.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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
      <Button onClick={handleClick} variant="outlined" color="primary">
        Action
      </Button>
      <NumArea>
        {numray.map(i => (
          <div key={i}>{i}</div>
        ))}
      </NumArea>
    </Screen>
  )
}

export default memo(Index)
