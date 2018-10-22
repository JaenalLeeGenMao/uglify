class Gandalf {
  static Components (name) {
    return require(`./src/components/${name}`)
  }

  static CommonComponents (name) {
    return require(`./src/components/common/${name}`)
  }
}

module.exports = Gandalf;