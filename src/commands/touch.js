const { appendFile } = require('fs')
const { join } = require('path')

module.exports = {
  name: 'touch',
  description: 'Create a file.',

  run: async toolbox => {
    const { parameters, print } = toolbox
    const file = parameters.first
    const path = process.cwd() 

    if (file == undefined) {
      print.error('Unspecified file name')

    } else {
      appendFile(join(path, file), 'w', () => {
        print.info(`Create '${file}' in '${path}'`)
      })
    }
  }
}