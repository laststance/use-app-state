import React from 'react'
import Provider from './Provider'
import TestRenderer from 'react-test-renderer'

test(`doesn't work without children`, () => {
  expect(() =>
    TestRenderer.create(<Provider initialState={{}} />)
  ).toThrowErrorMatchingSnapshot()
})

test(`doesn't work without giving initialState`, () => {
  expect(() =>
    TestRenderer.create(
      <Provider>
        <div>elm</div>
      </Provider>
    )
  ).toThrowErrorMatchingSnapshot()
})

const render = initialState =>
  TestRenderer.create(
    <Provider initialState={initialState}>
      <div>elm</div>
    </Provider>
  ).toJSON()

test(`work fine with PlainObject initialState`, () => {
  var tree = render({})
  expect(tree).toMatchSnapshot()

  var tree = render({ name: 'mark' })
  expect(tree).toMatchSnapshot()

  var tree = render({
    chunk: { home: { oneFloor: 'spacious', twoFloor: 'narrow' } },
    array: [1, 2, 3, 4]
  })
  expect(tree).toMatchSnapshot()
})

test(`doesn't work exept PlainObject`,() => {
  expect(() => render(1)).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render([])).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(new Map())).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(new Date())).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render('string')).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(true)).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(undefined)).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(null)).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
  expect(() => render(NaN)).toThrowError('react-topdown: Expected the initialState to be a PlainObject')
})