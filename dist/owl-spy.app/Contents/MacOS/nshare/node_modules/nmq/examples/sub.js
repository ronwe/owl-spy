var nmq = require('../nmq.js')
var i =  0 
while(i++ < 1000){
	~(function(i){
	var client = nmq.startClient({port : 5001})
	var subId = client.sub('test' ,function(data){
		console.log(i , data)
	} )
	})(i)
}
