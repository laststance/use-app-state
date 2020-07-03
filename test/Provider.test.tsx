import React from 'react'
import Provider from '../src/index'
import TestRenderer from 'react-test-renderer'

test(`doesn't work without children`, () => {
  expect(() =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore Because expectend used to JavaScirpt
    TestRenderer.create(<Provider initialState={{}} />)
  ).toThrowErrorMatchingSnapshot()
})

test(`doesn't work without giving appState`, () => {
  expect(() =>
    TestRenderer.create(
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore Because expectend used to JavaScirpt
      <Provider>
        <div>elm</div>
      </Provider>
    )
  ).toThrowErrorMatchingSnapshot()
})

const renderElm = appState =>
  TestRenderer.create(
    <Provider initialState={appState}>
      <div>elm</div>
    </Provider>
  ).toJSON()

test(`work fine with PlainObject appState`, () => {
  const tree01 = renderElm({})
  expect(tree01).toMatchSnapshot()

  const tree02 = renderElm(new Object())
  expect(tree02).toMatchSnapshot()

  const tree03 = renderElm({ name: 'mark' })
  expect(tree03).toMatchSnapshot()

  const tree04 = renderElm({
    chunk: { home: { oneFloor: 'spacious', twoFloor: 'narrow' } },
    array: [1, 2, 3, 4]
  })
  expect(tree04).toMatchSnapshot()
})

test(`doesn't work without PlainObject`, () => {
  expect(() => renderElm(1)).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm([])).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(new Map())).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(new Date())).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm('string')).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(true)).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(undefined)).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(null)).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm(NaN)).toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
  expect(() => renderElm({ count: 0 })).not.toThrowError(
    'use-app-state: Provider Expected the appState to be a PlainObject'
  )
})
