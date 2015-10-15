var nmq = require('../lib/nmq.js')
var client = nmq.startClient({port : 5000})




var i = 0
client.push('test-pull' , ['server_',i++])
