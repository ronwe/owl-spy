var nmq = require('../lib/nmq.js')
var client = nmq.startClient({port : 5000})


client.pull('test-pull' , function(data){
    data && console.log('I pull it ' , data)
} , {times : true})
