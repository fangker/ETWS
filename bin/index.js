const http = require('http').createServer();
const io = require('socket.io')(http);


io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
app.listen(8080);