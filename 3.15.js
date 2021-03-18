/*
 * @Author: your name
 * @Date: 2021-03-15 19:50:29
 * @LastEditTime: 2021-03-15 19:56:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \pro\JS\3.15.js
 */
var http = require('http');
var fs   = require('fs');
var server = http.createServer(function(req,res){
    var urlStr = req.url;
    var filePath = './'+urlStr;
    var data = fs.readFileSync(filePath);
    res.end(data);
});
//127.0.0.1代表了本机的回路IP地址.如果我们想让你的服务在局域网中被其他的主机访问,这里可以设置为你在局域网中的IP地址
server.listen(3000,'127.0.0.1',function(){
    console.log("Server is running at http://127.0.0.1:3000");
})