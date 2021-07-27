const { mkdir } = require('fs')
const { join } = require('path')

module.exports = {
  name: 'mkdir',
  description: 'Create a folder.',

  run: async toolbox => {
    const { parameters, print } = toolbox
    const folder = parameters.first
    const path = process.cwd()

    if (folder == undefined) {
      print.error('Unspecified folder name')
    } else {
      mkdir(join(path, folder), () => {
        print.info(`Create '${folder}' in '${path}'`)
      })
    }
  }
}