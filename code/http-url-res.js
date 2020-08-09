var http = require('http');



var server = http.createServer();

server.on('request', function(req, res) {
    //  res.write('hello')
    //  res.write('world')
    //  res.end()
    //上面的方式比较麻烦，推荐使用更简单的方式，直接end的同时

    //res.end('hello nodejs)

    //根据不同的请求路径发送不同的响应结果

    //1.获取请求路径

    //req.url获取到的是端口号之后的那一部分路径也就是说所有的url都是以/开头的
    //2.判断路径处理响应

    var url = req.url
        // res.end(url)
        // if (url === '/') {
        //     res.end('index page')
        // } else if (url === 'login') {
        //     res.end('login page')
        // } else {
        //     res.end('404 not found')
        // }

    console.log('收到请求了，请求路径是' + req.url);
    console.log('请求我的客户端的地址是：', req.socket.remoteAddress, req.socket.remotePort);
    if (url === '/products') {
        var products = [{
                name: '苹果X',
                price: 8888
            },
            {
                name: '小辣椒',
                price: 5000
            },
            {
                name: '锤子',
                price: 1999
            }
        ]

        //响应内容只能是二进制数据或者字符串
        res.end(JSON.stringify(products))
    }
})


//绑定端口
server.listen(3000, function() {
    console.log('服务端启动成功，可以访问了');
})