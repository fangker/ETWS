const http = require('http').createServer();
const io = require('socket.io')(http);
const redis =require('./bin/adapter');
io.use(function (socket,next) {
    let {token}=socket.handshake.query;

    next();
})

io.adapter(new redis({ host: 'localhost', port: 6379 }));

let nsp = io.of('/my-namespace');
nsp.on('connection', function(socket){
    socket.join('r6666666');
    socket.to('r6666666').emit('news', '加入了房间');

});



http.listen(8080);