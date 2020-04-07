module.exports = {
  preset: 'ts-jest',
  testRegex: '/test/.*\\.test\\.tsx$',
  testPathIgnorePatterns: ['/example/'],
  setupFilesAfterEnv: ['./jest.setup.js'],
}
