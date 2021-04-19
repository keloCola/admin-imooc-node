/*
 * @Author: your name
 * @Date: 2021-04-19 11:22:25
 * @LastEditTime: 2021-04-19 17:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-imooc-node\router\user.js
 */
const express = require('express')
const router = express.Router()
router.get('/info',function(req,res,next){
  res.json('user info ...')
}) 