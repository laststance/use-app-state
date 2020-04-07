// eslint-disable-next-line no-console
const originalError = console.error
beforeAll(() => {
  // eslint-disable-next-line no-console
  console.error = (...args) => {
    // Suppress expected console error message from src/ErrorBoudary.test.js test
    if (args[0].includes('<Provider>')) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  // eslint-disable-next-line no-console
  console.error = originalError
})
