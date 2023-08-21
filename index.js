const fs = require("fs")
const server = require("./server/server").ser

// 读取配置
const op = JSON.parse(String(fs.readFileSync("./config/server.json")))
const listVal = JSON.parse(String(fs.readFileSync("./config/list.json")))
// 判断协议
const httpsOn = op["http"]["on"] === false

// 启动服务
server(httpsOn?op["https"]:op['http'],httpsOn,listVal)