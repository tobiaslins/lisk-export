const micro = require('micro')
const index = require('./index')

const port = process.env.PORT || 8081
const server = micro(index)
server.listen(port)

console.log('Listening on port ' + port)
