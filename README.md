# tools-school-web

#### 介绍
学校使用的一些工具，目前计划的：
1.点名工具
2.wx接龙处理

#### 软件架构
使用了nodejs进行服务器端架构
网页使用了vue3编写并使用vite进行编译


#### 安装教程

1.  克隆或者下载整个项目
2.  下载服务器端库文件
    ```shell
    npm install
    ```
3.  进入page文件夹，下载页面的构建库文件并进行编译
    ```shell
    cd page
    npm install
    npm build
    ```
4. 返回初始文件夹，进入config文件夹，对配置文件进行修改
    ```shell
    cd ..
    cd config
    # 服务器相关配置
    vim server.json
    # 页面信息配置
    vim list.json
    ```
5. 回到初始文件夹，开启服务器
    ```shell
    cd ..
    npm run st
    ```
