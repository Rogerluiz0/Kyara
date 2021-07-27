const { readFile } = require('fs')
const { join } = require('path')

module.exports = {
  name: 'cat',
  description: 'Shows the contents of a file.',

  run: async toolbox => {
    const { parameters , print } = toolbox
    const file = parameters.first
    const path = process.cwd() 

    if (file == undefined) {
      print.error('Unspecified file name')
      
    } else {
        readFile(join(path, file), 'utf8', (error, data) => {
         if (error) {
          print.error(data)
        } else {
          print.info('\n')
          print.info(data)
        }   
      }) 
    }
  }
}