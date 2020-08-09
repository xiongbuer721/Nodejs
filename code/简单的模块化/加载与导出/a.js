// require方法有两个作用
// //1.加载文件模块并执行里面的代码
// 2.拿到被加载文件模块导出的接口对象

// 在每个文件模块都提供了一个对象：exports

// exports默认是一个空对象
// 你要做的就是把所有需要访问的外部访问的成v员挂载到这个exports对象中
var bExports = require('./b')
console.log(bExports.foo);