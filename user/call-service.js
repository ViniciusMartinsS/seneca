'use strict'

module.exports.callService = (seneca, params) => {
  if (!params) {
    throw new Error('Invalid Params!')
  }

  return seneca.act({ cmd: 'match', params }, handleMatchServiceResponse)
}

function handleMatchServiceResponse (err, reply) {
  if (err) {
    throw err
  }

  console.dir(reply, { depth: null})
}
