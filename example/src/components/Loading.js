import React, { memo } from 'react'
import styled from 'react-emotion'
import { CircleLoader } from 'react-spinners'

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loading = memo(() => {
  return (
    <Container>
      <CircleLoader sizeUnit={'px'} size={150} color={'#36D7B7'} />
    </Container>
  )
})
