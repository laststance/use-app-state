import React from 'react'
import Provider from '../src/Provider'
import TestRenderer from 'react-test-renderer'

test(`doesn't work without children`, () => {
  expect(() =>
    TestRenderer.create(<Provider store={{}} />)
  ).toThrowErrorMatchingSnapshot()
})

test(`doesn't work without giving Store`, () => {
  expect(() =>
    TestRenderer.create(
      <Provider>
        <div>elm</div>
      </Provider>
    )
  ).toThrowErrorMatchingSnapshot()
})

const renderElm = Store =>
  TestRenderer.create(
    <Provider store={Store}>
      <div>elm</div>
    </Provider>
  ).toJSON()

test(`work fine with PlainObject Store`, () => {
  var tree = renderElm({})
  expect(tree).toMatchSnapshot()

  var tree = renderElm(new Object())
  expect(tree).toMatchSnapshot()

  var tree = renderElm({ name: 'mark' })
  expect(tree).toMatchSnapshot()

  var tree = renderElm({
    chunk: { home: { oneFloor: 'spacious', twoFloor: 'narrow' } },
    array: [1, 2, 3, 4]
  })
  expect(tree).toMatchSnapshot()
})

test(`doesn't work exept PlainObject`, () => {
  expect(() => renderElm(1)).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm([])).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(new Map())).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(new Date())).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm('string')).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(true)).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(undefined)).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(null)).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm(NaN)).toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
  expect(() => renderElm({ count: 0 })).not.toThrowError(
    'react-topdown: Expected the Store to be a PlainObject'
  )
})
