const command = {
  name: 'kyara',

  run: async toolbox => {
    const { print } = toolbox

    print.info('\nWelcome to kyara CLI')
    print.success('Access: https://github.com/abantes/kyara for more details')
  }
}

module.exports = command