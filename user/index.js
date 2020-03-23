'use strict'

const { question } = require('readline-sync')
const { callService } = require('./call-service')

const Seneca = require('./seneca')
const seneca = Seneca.defineSenecaServices()

function main () {
  const name = question('Let me know your name... :). Write it down:')
  callService(seneca, { name })
}

main()
