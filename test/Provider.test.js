import React from 'react'
import Provider from '../src/index'
import TestRenderer from 'react-test-renderer'

test(`doesn't work without children`, () => {
  expect(() =>
    TestRenderer.create(<Provider appState={{}} />)
  ).toThrowErrorMatchingSnapshot()
})

test(`doesn't work without giving appState`, () => {
  expect(() =>
    TestRenderer.create(
      <Provider>
        <div>elm</div>
      </Provider>
    )
  ).toThrowErrorMatchingSnapshot()
})

const renderElm = appState =>
  TestRenderer.create(
    <Provider appState={appState}>
      <div>elm</div>
    </Provider>
  ).toJSON()

test(`work fine with PlainObject appState`, () => {
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

test(`doesn't work without PlainObject`, () => {
  expect(() => renderElm(1)).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm([])).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(new Map())).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(new Date())).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm('string')).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(true)).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(undefined)).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(null)).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(NaN)).toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm({ count: 0 })).not.toThrowError(
    'react-appstate: Provider Expected the appState to be a PlainObject'
  )
})
