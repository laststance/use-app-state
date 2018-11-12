import React from 'react'
import Provider from './Provider'
import TestRenderer from 'react-test-renderer'

test('without children', () => {
  const testRenderer = TestRenderer.create(<Provider initialState={{}} />)

  console.log(testRenderer.toJSON())
})
