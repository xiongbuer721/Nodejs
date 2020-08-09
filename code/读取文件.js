// 浏览器中的javascript是没有文件操作的能力的
// 但是Node中的JavaScript是具有文件操作的能力的
// fs是filesystem的简写，就是文件系统的意思
// 在node中想进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块就提供了所有的文件操作相关的API
// 例如：fs.readfile就是用来读取文件的
// 1.使用require方法加载fs核心模块
var fs = require('fs')
    //2.读取文件
    //  第一个参数就是要读取文件的路径，第二个参数是回调函数
    //error
    ///      如果读取失败，error就是错误对象
    //       如果读取成功，error就是null
    //data
    //      如果读取成功，data就是读取到的对象
    //     如果读取失败 error就是错误对象
    ///  成功
    //     data 数据
    //   error null
    // 失败
    //    data null
    //    error 错误对象
fs.readFile('../data/hello.txt', function(error, data) {

    //文件中存储的都是二进制数据，可以通过toString方法转换成认识的字符
    console.log(data.toString());
    console.log(error);

})
fs.readFile('../data/a.txt', function(error, data) {

    //文件中存储的都是二进制数据，可以通过toString方法转换成认识的字符
    if (error) {
        console.log('读取文件失败');
    } else {
        console.log(data.toString());
    }



})