const express = require('express'), //加载express模块
app = express(); //启动一个web服务器
var homeAdData = require('./public/ad.js')
var homeListData = require('./public/list.js')
var detail = require('./public/detail.js')
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

app.get('/api/list',function(req,res){
        res.status(200);
        let data=homeListData;
        var jsonr=req.query;
        //console.log(jsonr.page);
        if(jsonr.page>5){
          data.hasMore=false
        }
        else{
            data.hasMore=true
        }
        res.json(data);
})
const server = app.listen(6969,function(){
    let port = server.address().port;
    console.log('app listening at http://%s:%s','localhost',port);
});
