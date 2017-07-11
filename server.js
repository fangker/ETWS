const http    = require('http').createServer();
const adapter = require('./index.js').adapter;
let config  = {
    //允许访问域
    origins : "*:*",
    //鉴权回调
    allowRequest:(req,callback)=>{
            callback(null,true)
    },
    adapter : new adapter({ host: 'localhost', port: 6379 })
}
const io      = require('socket.io')(http,config);
const inject  = adapter.inject()
inject.broadcast=function(...arg){
    console.log(arg)
}

io.use(function (socket,next) {
    let {token}=socket.handshake.query;
    next();
})

let nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
    socket.join('r6666666');
    socket.to('r6666666').emit('news', '加入了房间');

});

nsp.on('connection', function(socket){
 
});


http.listen(8080);