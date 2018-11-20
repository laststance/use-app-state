/**
 * recompose v0.30.0 (https://github.com/acdlite/recompose)
 * Copyright (c) 2015-2018 Andrew Clark
 * The MIT License (MIT)(https://github.com/acdlite/recompose/blob/master/LICENSE.md)
 */
const compose = (...funcs) =>
  funcs.reduce((a, b) => (...args) => a(b(...args)), arg => arg)

export default compose