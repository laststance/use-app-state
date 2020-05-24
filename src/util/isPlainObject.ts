/**
 * Redux v4.0.1 (https://github.com/reduxjs/redux)
 * Copyright (c) 2015-present Dan Abramov
 * The MIT License (MIT)(https://github.com/reduxjs/redux/blob/master/LICENSE.md)
 *
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
export default function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false

  let proto = obj
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(obj) === proto
}