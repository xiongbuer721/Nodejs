// require 是一个方法
// 它的作用就是用来加载模块
// 在node中，模块有三种：
// 具名的核心模块，例如fs.http
// 用户自己编写的文件模块
// 相对路径必须加./

console.log('a start');

function add(x, y) {
    return x + y
}
require('./b.js')
console.log('a end');