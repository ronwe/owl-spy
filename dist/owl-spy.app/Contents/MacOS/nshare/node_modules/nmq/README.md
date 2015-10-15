START SERVER
example/server.js	
	

HOW TO PUB/SUB
example/pub.js
	client.pub(channel , data) 
example/sub.js
	var subId = client.sub(channel ,function(data){
		  console.log(data)
	} )
	client.unSub(channel , subId) //取消某个监听
	client.unSub(channel )//取消全部监听



HOW TO PUSH/PULL	
example/push.js
	client.push(channel , data)
example/pull.js
	client.pull(channel , function(data){
		    data && console.log('I pull it ' , data)
	} , {times : true}) //times 拉取次数 true 为永久

