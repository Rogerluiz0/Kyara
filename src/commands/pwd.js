module.exports = {
  name: 'pwd',
  description: 'Shows the current directory.',
  
  run: async toolbox => {
    const { print } = toolbox
    print.success(process.cwd())
  }
}