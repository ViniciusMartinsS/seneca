'use strict'

const names = require('./random-names')

module.exports.main = (args, done) => {
  const { name } = args && args.params

  if (!name) {
    throw new Error('No name provided to match!')
  }

  const matchedName = names[ Math.floor(Math.random() * names.length) ]

  return done(null, {
    result: `${name} your name matches with ${matchedName}`
  })
}
