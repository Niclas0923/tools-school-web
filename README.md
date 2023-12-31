# tools-school-web

### 介绍
学校中会使用的一些工具

### 功能与开发
- 全局
  - [x] 使用 vue-router 对地址进行处理
  - [x] 使用 pinia 进行信息保存和方法使用
  - [x] 使用 pinia 进行信息的缓存
  - [ ] 背景
  - [ ] 班级信息切换功能/本地存储上传或者服务器进行存储
- home界面
  - [x] 页面样式
  - [x] 转跳功能
- 点名
  - [x] 页面样式
  - [x] 点名基础功能实现
  - [x] 上下对调
  - [x] 刷新
  - [x] 本地存储
  - [x] 删除
  - [x] 新建
  - [x] 导出
- wx接龙处理
  - [x] 页面样式
  - [x] 接龙基础功能实现
  - [x] 响应式动态输出信息
  - [x] 导出功能
  - [ ] 优化界面显示
- 信息显示
  - [x] 页面样式
  - [x] 接龙基础功能实现
  - [x] 搜索框
  - [x] 拼音搜索
  - [x] 首字母搜索
- 其他工具
  - [x] 页面样式
  - [x] 页面切换功能实现
  - 设置界面
      - [x] 页面样式
      - [x] 设置导出格式
      - [x] 添加还原功能
      - [ ] 深色模式
  - 屏幕长宽显示
    - [x] 页面样式
    - [x] 显示长宽的功能实现
    - [x] 动态读取功能
    - [x] bootstrap宽度对应列表以及当前所在范围

### 开发环境
- node v20.4.0  
- npm 9.7.2  
开发使用了开发版本的node，由于后端较为简单，理论上相同时期的稳定版，或者更老或者更新版本都可以运行。

### 使用插件
- vue v3.3.4
- vue-router v4.2.4
- axios v1.4.0
- pinia v2.1.6
- tiny-pinyin v1.3.2

### 使用教程
#### 安装和初次使用
1.  克隆或者下载整个项目
2.  下载服务器端库文件
    ```shell
    npm install
    ```
3. 进入config文件夹，对配置文件进行修改，之后返回
    ```shell
    cd config
    # 服务器相关配置
    vim server.json
    # 页面信息配置
    vim list.json
    cd ..
    ```
4. 开启服务器
    ```shell
    npm run st
    ```

#### 路由情况
- / --> /home  
  - home
    - 主页(可转跳到其他页面)  
  - rollCallTool
    - 点名页面
  - weChatRelay
    - 微信接龙处理
  - dataShow
    - 数据显示和搜索
  - others --> /others/settings
    - 其他工具页面
    - settings
      - 设置
    - screenSize
      - 屏幕尺寸工具

### 开发教程
1. 先通过使用教程成功运行项目
2. 之后需要安装开发工具nodemon
    ```shell
    npm install -g nodemon
    ```
3. 进入初始文件夹运行服务器端
    ```shell
    npm run dev
    ```
4. 开启一个新的终端进入page文件夹，安装运行库，之后运行前端开发服务器
    ```shell
    cd page
    npm install
    npm run dev
    ```
5. 之后根据提示打开网页进行开发即可