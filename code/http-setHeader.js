var http = require('http')
var server = http.createServer()
server.on('request', function(req, res) {
    var url = req.url
    if (url === '/plain') {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end('你好')

    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('<p>你好html</p>')
    }
})
server.listen(3000, function() {
    console.log('server is running');
})