 //http这个模块的职责就是帮助创建编写服务器


 //1.加载http核心模块

 var http = require('http')


 //2.使用http.createServer()方法创建一个web服务器
 //返回一个实例对象
 var server = http.createServer()


 //request请求事件
 //  request请求对象
 //            请求对象可以用来获取客户端的一些请求信息，例如请求路径
 //response 响应对象
 //    响应对象可以用来给客户端发送响应信息
 //当客户端请求过来，就会自动触发服务器的request请求事件，然后执行第二个参数，回调函数
 server.on('request', function(request, response) {
     console.log('收到客户端的请求了' + request.url);
     //response对象有一个方法，write可以用来给客户端发送响应数据
     //write可以使用多次，但是最后一定要用end来结束响应，foe则客户端就会一直等待
     response.write('hello');
     response.end();
 })

 //4.绑定端口号，启动服务器
 server.listen(3000, function() {
     console.log('服务器启动成功了，可以通过127.0.0.1:3000访问了');
 })