import React, { memo } from 'react'
import styled from 'react-emotion'

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Index() {
  return (
    <Screen>
      <div>Index Page</div>
    </Screen>
  )
}

export default memo(Index)
