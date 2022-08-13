const { createDevServer } = require('@layer0/core/dev')

module.exports = function () {
  return createDevServer({
    label: '[Lit 2.0]',
    command: (port) => `PORT=${port} NODE_ENV=development npx rollup -c -w`,
    ready: [/listening on/i],
  })
}
