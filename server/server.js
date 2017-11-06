var path = require("path");
var url = require("url");
var express = require("express");
var fs = require("fs");
var gm = require('gm').subClass({ imageMagick: true });//默认的情况下 gm使用的是另外一个图片处理程序

var app = express();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


var con = {
    code:-1,
    msg:"请求失败",
    result:null
}




app.get("/getAllMusic",function(req,res){
    var limit = req.query.limit;
    var offset = req.query.offset;
    var data = JSON.parse(fs.readFileSync("./json/music.json"));
    var total = data.length;
    data = data.splice(offset,limit);
    con = {
        code : 10000,
        msg:"请求成功",
        result:{
            total:total,
            data:data
        }
    }
    res.end(JSON.stringify(con))
})
app.get("/getPhotos",function(req,res){
    var id = req.query.id;
    con = JSON.parse(fs.readFileSync("./json/photo"+id+".json"))
    con = {
        code:10000,
        msg:"请求成功",
        result:{
            total:con.length,
            data:con
        }
    };
    res.end(JSON.stringify(con))
})

app.get("*",function(req,res){
    var filePath = req.params[0];
    var reg = /\.(?:jpg|png)$/i;
    if(reg.test(filePath)){
        con = fs.readFileSync("."+filePath);
        res.end(con)
    }
})


app.listen(8000,function(){
    console.log("8000端口启动成功")
})