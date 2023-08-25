const server = (options,httpsOn,listVal)=>{
    const express = require("express")
    const bodyParser = require("body-parser");
    const fs = require("fs")
    // 开启监听测试
    const app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // 托管静态库
    app.use(express.static('./page/dist'))

    // 获取班级列表信息
    app.get("/data",(req, res) => {
        res.send(listVal)
    })

    // 判断协议
    if (httpsOn){
        const https = require("https")
        const option = {
            key: fs.readFileSync(options["ssl"]["key"]),
            cert: fs.readFileSync(options["ssl"]["cert"])
        }
        return https.createServer(option, app).listen(options["point"],function (){
            console.log(`已经开启https协议${options["point"]}端口监听`);
        });
    }else {
        const http = require("http")
        return http.createServer(app).listen(options["point"],function () {
            console.log(`已经开启http协议${options["point"]}端口监听`);
        })
    }
}

exports.ser = server