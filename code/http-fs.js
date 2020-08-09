var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request', function(req, res) {
    var url = req.url
    if (url === '/index') {
        fs.readFile('./resource/index.html', function(err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('文件读取失败，请稍后再试')
            } else {
                //data默认是二进制数据，可以通过，toString转为暂未识别的字符串
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)
            }
        })

    } else if (url === '/a') {
        fs.readFile('./resource/6.jpg', function(err, data) {
            res.setHeader('Content-Type', 'image/jpeg')
            res.end(data)
        })
    }
})


server.listen(3000, function() {
    console.log('server is running');
})