module.exports = function(api) {
  api.cache(false)

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-flow'
  ]

  return { presets }
}
