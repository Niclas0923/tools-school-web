# tools-school-web

### 介绍
学校使用的一些工具，目前计划的功能有：
1. 点名工具
2. wx接龙处理
3. 所有信息展示

### 软件架构
使用了nodejs进行服务器端架构
网页使用了vue3编写并使用vite进行编译

### 开发环境
node v20.4.0  
npm 9.7.2  
开发使用了node作为基础，使用了开发版本的node，理论上相同时期的稳定版，或者更老或者更新版本都可以运行。

### 使用教程
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

### 开发教程
1. 先通过使用教程成功运行项目
2. 之后需要安装开发工具nodemon
    ```shell
    npm install -g nodemon
    ```
3. 进入初始文件夹运行服务器端
    ```shell
    nodemon index.js
    ```
4. 进入page文件夹，运行前端开发服务器
    ```shell
    cd page
    npm run dev
    ```
5. 之后根据提示打开网页进行开发即可