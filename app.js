/*
 * @Author: your name
 * @Date: 2021-04-19 11:04:48
 * @LastEditTime: 2021-04-19 11:15:14
 * @LastEditors: Please set LastEditors
 * @Description: 全局入口文件
 * @FilePath: \admin-imooc-node\app.js
 */

//引入express
const express = require('express')
// 创建 express 应用
const app = express()
// 监听 / 路径的 get 请求
app.get('/',function (req,res){
    // res.send('hello node')
    throw new Error('err...')
})
function errorhandler(err,req,res,next){
  res.status(400).json({
    error:-1,
    msg:err.toString()
  })
};
app.use(errorhandler)
// 使 express 监听 5000 端口号发起的 http 请求
const server=app.listen(5000,function (){
    //监听端口号和地址
const {address,port}=server.address()
    console.log('Http服务启动成功：http://%s:%s',address,port)
})