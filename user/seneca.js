'use strict'

const Seneca = require('seneca')

module.exports.defineSenecaServices = () =>
  Seneca()
    .use('seneca-amqp-transport')
    .use(user)
    .listen({
      type: 'amqp',
      url: 'amqp://localhost:5672',
      pin: { cmd: 'user' }
    })
    .client({
      type: 'amqp',
      url: 'amqp://localhost:5672',
      pin: { cmd: 'match' }
    })


function user () {
  this.add({ cmd: 'user' }, handleUserService)
}

function handleUserService (msg, done) {
  return done(null, { result: 'User service response' })
}
