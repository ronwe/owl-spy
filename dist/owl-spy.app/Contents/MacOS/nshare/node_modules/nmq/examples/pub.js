var nmq = require('../nmq.js')
var client = nmq.startClient({port : 5000})
client.pub('test' , new Date)
