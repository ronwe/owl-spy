var cluster = require('cluster')

var server_script =  'proxy.js'
    ,args = process.argv.slice(3)

cluster.setupMaster({
    exec : server_script,
    args : args,
    silent : false
})

for(var i = require('os').cpus().length ; i--;){
    cluster.fork()
}

cluster.on('exit', function (worker, code, signal) {
    console.log('[master] ' + 'exit worker' + worker.id + ' died')
    cluster.fork()
})
