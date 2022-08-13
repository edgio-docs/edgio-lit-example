const { exit } = require('process')
const { DeploymentBuilder } = require('@layer0/core/deploy')

const appDir = process.cwd()
const builder = new DeploymentBuilder(appDir)

module.exports = async function build(options) {
  try {
    builder.clearPreviousBuildOutput()
    let command = 'NODE_ENV=production npx rollup -c'
    await builder.exec(command)
    await builder.build()
  } catch (e) {
    console.log(e)
    exit()
  }
}
