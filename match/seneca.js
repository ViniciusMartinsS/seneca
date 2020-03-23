'use strict'

const Seneca = require('seneca')
const { main } = require('./index.js')

module.exports.defineSenecaServices = () =>
  Seneca()
    .use('seneca-amqp-transport')
    .use(match)
    .listen({
      type: 'amqp',
      url: 'amqp://localhost:5672',
      pin: { cmd: 'match' }
    })

function match () {
  this.add({ cmd: 'match' }, main)
}

module.exports.defineSenecaServices()
